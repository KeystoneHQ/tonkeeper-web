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
/**
 * 
 * @export
 * @interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
 */
export interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    nodeIdShort: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    signature: string;
}

/**
 * Check if a given object implements the GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner interface.
 */
export function instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner(value: object): boolean {
    if (!('nodeIdShort' in value)) return false;
    if (!('signature' in value)) return false;
    return true;
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSON(json: any): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    return GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSONTyped(json, false);
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'nodeIdShort': json['node_id_short'],
        'signature': json['signature'],
    };
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerToJSON(value?: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'node_id_short': value['nodeIdShort'],
        'signature': value['signature'],
    };
}
