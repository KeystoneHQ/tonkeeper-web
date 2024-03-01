import { delay } from '@tonkeeper/core/dist/utils/common';
import { BrowserWindow, ipcMain, shell } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import { Cookie, CookieJar } from 'tough-cookie';
import { handleBackgroundMessage } from '../electron/background';
import { Message } from '../libs/message';
import { CookieStore } from './cookieStorage';

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const store = new CookieStore();
const cookieJar = new CookieJar(store);

export abstract class MainWindow {
    static mainWindow: BrowserWindow | undefined = undefined;

    static async openMainWindow() {
        if (this.mainWindow !== undefined) return this.mainWindow;

        const icon = (() => {
            switch (process.platform) {
                case 'darwin':
                    return path.join(process.cwd(), 'public', 'icon.icns');
                case 'linux':
                    return path.join(__dirname, '../../../', 'public', 'icon.png');
                case 'win32':
                    return path.join(process.cwd(), 'public', 'icon.ico');
                default:
                    return '';
            }
        })();

        // Create the browser window.
        this.mainWindow = new BrowserWindow({
            icon: icon,
            width: 1150,
            minWidth: 1100,
            height: 700,
            minHeight: 600,
            resizable: isDev,
            autoHideMenuBar: process.platform !== 'darwin',
            webPreferences: {
                zoomFactor: process.platform !== 'linux' ? 0.8 : undefined,
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
            }
        });

        // and load the index.html of the app.
        this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

        if (isDev) {
            // Open the DevTools.
            this.mainWindow.webContents.openDevTools();
        }

        this.mainWindow.on('closed', () => {
            ipcMain.removeHandler('message');
            this.mainWindow = null;
        });

        ipcMain.handle('message', async (event, message: Message) => {
            try {
                return await handleBackgroundMessage(message);
            } catch (e) {
                return e;
            }
        });

        this.mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
            { urls: [] },
            (details, callback) => {
                cookieJar.getCookies(details.url).then(cookies => {
                    if (!cookies.length) {
                        return callback({});
                    }
                    const result = cookies
                        .map(cookie => `${cookie.key}=${cookie.value}`)
                        .join('; ');

                    /* patch tg auth headers  */
                    if (details.url === 'https://oauth.telegram.org/auth/get') {
                        details.requestHeaders.origin = 'https://tonkeeper.com';
                        details.requestHeaders.referer = 'https://tonkeeper.com';
                    }

                    callback({
                        ...details,
                        requestHeaders: {
                            ...details.requestHeaders,
                            cookie: result
                        }
                    });
                });
            }
        );

        this.mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
            const setCookie = details.responseHeaders['set-cookie'] ?? [];

            /* patch tg auth headers cors  */
            if (details.url === 'https://oauth.telegram.org/auth/get') {
                const corsHeader =
                    Object.keys(details.responseHeaders).find(
                        k => k.toLowerCase() === 'access-control-allow-origin'
                    ) || 'access-control-allow-origin';
                details.responseHeaders[corsHeader] = ['*'];
            }

            Promise.all(
                setCookie.map(cookieRaw =>
                    cookieJar.setCookie(Cookie.parse(cookieRaw), details.url)
                )
            ).finally(() => {
                callback(details);
            });
        });

        await delay(500);

        return this.mainWindow;
    }

    static async bringToFront() {
        if (process.platform === 'win32') {
            if (this.mainWindow) {
                if (this.mainWindow.isMinimized()) this.mainWindow.restore();
            } else {
                // Open main windows
                await this.openMainWindow();
            }

            this.mainWindow.setAlwaysOnTop(true);
            this.mainWindow.focus();
            this.mainWindow.setAlwaysOnTop(false);
        } else {
            await this.openMainWindow();
            this.mainWindow.show();
        }

        return this.mainWindow;
    }
}
