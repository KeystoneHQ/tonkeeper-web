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

import { mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { EncryptedComment } from './EncryptedComment';
import {
    EncryptedCommentFromJSON,
    EncryptedCommentFromJSONTyped,
    EncryptedCommentToJSON,
} from './EncryptedComment';
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface TonTransferAction
 */
export interface TonTransferAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof TonTransferAction
     */
    sender: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof TonTransferAction
     */
    recipient: AccountAddress;
    /**
     * amount in nanotons
     * @type {number}
     * @memberof TonTransferAction
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TonTransferAction
     */
    comment?: string;
    /**
     * 
     * @type {EncryptedComment}
     * @memberof TonTransferAction
     */
    encryptedComment?: EncryptedComment;
    /**
     * 
     * @type {Refund}
     * @memberof TonTransferAction
     */
    refund?: Refund;
}

/**
 * Check if a given object implements the TonTransferAction interface.
 */
export function instanceOfTonTransferAction(value: object): boolean {
    if (!('sender' in value)) return false;
    if (!('recipient' in value)) return false;
    if (!('amount' in value)) return false;
    return true;
}

export function TonTransferActionFromJSON(json: any): TonTransferAction {
    return TonTransferActionFromJSONTyped(json, false);
}

export function TonTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonTransferAction {
    if (json == null) {
        return json;
    }
    return {
        
        'sender': AccountAddressFromJSON(json['sender']),
        'recipient': AccountAddressFromJSON(json['recipient']),
        'amount': json['amount'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'encryptedComment': json['encrypted_comment'] == null ? undefined : EncryptedCommentFromJSON(json['encrypted_comment']),
        'refund': json['refund'] == null ? undefined : RefundFromJSON(json['refund']),
    };
}

export function TonTransferActionToJSON(value?: TonTransferAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sender': AccountAddressToJSON(value['sender']),
        'recipient': AccountAddressToJSON(value['recipient']),
        'amount': value['amount'],
        'comment': value['comment'],
        'encrypted_comment': EncryptedCommentToJSON(value['encryptedComment']),
        'refund': RefundToJSON(value['refund']),
    };
}
