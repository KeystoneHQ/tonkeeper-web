/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    beneficiaryAddress: string;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    failedAttempts: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    lastPaymentTime: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    lastRequestTime: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    period: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    startTime: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    subscriptionId: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    timeout: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    walletAddress: string;
}

/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "beneficiaryAddress" in value;
    isInstance = isInstance && "failedAttempts" in value;
    isInstance = isInstance && "lastPaymentTime" in value;
    isInstance = isInstance && "lastRequestTime" in value;
    isInstance = isInstance && "period" in value;
    isInstance = isInstance && "startTime" in value;
    isInstance = isInstance && "subscriptionId" in value;
    isInstance = isInstance && "timeout" in value;
    isInstance = isInstance && "walletAddress" in value;

    return isInstance;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'amount': json['amount'],
        'beneficiaryAddress': json['beneficiary_address'],
        'failedAttempts': json['failed_attempts'],
        'lastPaymentTime': json['last_payment_time'],
        'lastRequestTime': json['last_request_time'],
        'period': json['period'],
        'startTime': json['start_time'],
        'subscriptionId': json['subscription_id'],
        'timeout': json['timeout'],
        'walletAddress': json['wallet_address'],
    };
}

export function SubscriptionToJSON(value?: Subscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'amount': value.amount,
        'beneficiary_address': value.beneficiaryAddress,
        'failed_attempts': value.failedAttempts,
        'last_payment_time': value.lastPaymentTime,
        'last_request_time': value.lastRequestTime,
        'period': value.period,
        'start_time': value.startTime,
        'subscription_id': value.subscriptionId,
        'timeout': value.timeout,
        'wallet_address': value.walletAddress,
    };
}
