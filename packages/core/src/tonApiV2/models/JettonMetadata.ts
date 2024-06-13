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
 * @interface JettonMetadata
 */
export interface JettonMetadata {
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    decimals: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof JettonMetadata
     */
    social?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof JettonMetadata
     */
    websites?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof JettonMetadata
     */
    catalogs?: Array<string>;
}

/**
 * Check if a given object implements the JettonMetadata interface.
 */
export function instanceOfJettonMetadata(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('name' in value)) return false;
    if (!('symbol' in value)) return false;
    if (!('decimals' in value)) return false;
    return true;
}

export function JettonMetadataFromJSON(json: any): JettonMetadata {
    return JettonMetadataFromJSONTyped(json, false);
}

export function JettonMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
        'symbol': json['symbol'],
        'decimals': json['decimals'],
        'image': json['image'] == null ? undefined : json['image'],
        'description': json['description'] == null ? undefined : json['description'],
        'social': json['social'] == null ? undefined : json['social'],
        'websites': json['websites'] == null ? undefined : json['websites'],
        'catalogs': json['catalogs'] == null ? undefined : json['catalogs'],
    };
}

export function JettonMetadataToJSON(value?: JettonMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
        'name': value['name'],
        'symbol': value['symbol'],
        'decimals': value['decimals'],
        'image': value['image'],
        'description': value['description'],
        'social': value['social'],
        'websites': value['websites'],
        'catalogs': value['catalogs'],
    };
}
