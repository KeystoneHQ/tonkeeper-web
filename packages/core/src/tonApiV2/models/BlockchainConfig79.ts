/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { JettonBridgeParams } from './JettonBridgeParams';
import {
    JettonBridgeParamsFromJSON,
    JettonBridgeParamsFromJSONTyped,
    JettonBridgeParamsToJSON,
} from './JettonBridgeParams';

/**
 * Bridge parameters for wrapping tokens from other networks into tokens on the TON network.
 * @export
 * @interface BlockchainConfig79
 */
export interface BlockchainConfig79 {
    /**
     * 
     * @type {JettonBridgeParams}
     * @memberof BlockchainConfig79
     */
    jettonBridgeParams: JettonBridgeParams;
}

/**
 * Check if a given object implements the BlockchainConfig79 interface.
 */
export function instanceOfBlockchainConfig79(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jettonBridgeParams" in value;

    return isInstance;
}

export function BlockchainConfig79FromJSON(json: any): BlockchainConfig79 {
    return BlockchainConfig79FromJSONTyped(json, false);
}

export function BlockchainConfig79FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig79 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jettonBridgeParams': JettonBridgeParamsFromJSON(json['jetton_bridge_params']),
    };
}

export function BlockchainConfig79ToJSON(value?: BlockchainConfig79 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jetton_bridge_params': JettonBridgeParamsToJSON(value.jettonBridgeParams),
    };
}
