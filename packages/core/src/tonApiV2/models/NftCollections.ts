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
import type { NftCollection } from './NftCollection';
import {
    NftCollectionFromJSON,
    NftCollectionFromJSONTyped,
    NftCollectionToJSON,
} from './NftCollection';

/**
 * 
 * @export
 * @interface NftCollections
 */
export interface NftCollections {
    /**
     * 
     * @type {Array<NftCollection>}
     * @memberof NftCollections
     */
    nftCollections: Array<NftCollection>;
}

/**
 * Check if a given object implements the NftCollections interface.
 */
export function instanceOfNftCollections(value: object): boolean {
    if (!('nftCollections' in value)) return false;
    return true;
}

export function NftCollectionsFromJSON(json: any): NftCollections {
    return NftCollectionsFromJSONTyped(json, false);
}

export function NftCollectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftCollections {
    if (json == null) {
        return json;
    }
    return {
        
        'nftCollections': ((json['nft_collections'] as Array<any>).map(NftCollectionFromJSON)),
    };
}

export function NftCollectionsToJSON(value?: NftCollections | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nft_collections': ((value['nftCollections'] as Array<any>).map(NftCollectionToJSON)),
    };
}
