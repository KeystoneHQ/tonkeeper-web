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

/**
 * 
 * @export
 * @interface ElectionsDepositStakeAction
 */
export interface ElectionsDepositStakeAction {
    /**
     * 
     * @type {number}
     * @memberof ElectionsDepositStakeAction
     */
    amount: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof ElectionsDepositStakeAction
     */
    staker: AccountAddress;
}

/**
 * Check if a given object implements the ElectionsDepositStakeAction interface.
 */
export function instanceOfElectionsDepositStakeAction(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('staker' in value)) return false;
    return true;
}

export function ElectionsDepositStakeActionFromJSON(json: any): ElectionsDepositStakeAction {
    return ElectionsDepositStakeActionFromJSONTyped(json, false);
}

export function ElectionsDepositStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElectionsDepositStakeAction {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'staker': AccountAddressFromJSON(json['staker']),
    };
}

export function ElectionsDepositStakeActionToJSON(value?: ElectionsDepositStakeAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'staker': AccountAddressToJSON(value['staker']),
    };
}
