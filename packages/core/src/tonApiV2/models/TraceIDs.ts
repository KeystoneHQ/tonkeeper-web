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
import type { TraceID } from './TraceID';
import {
    TraceIDFromJSON,
    TraceIDFromJSONTyped,
    TraceIDToJSON,
} from './TraceID';

/**
 * 
 * @export
 * @interface TraceIDs
 */
export interface TraceIDs {
    /**
     * 
     * @type {Array<TraceID>}
     * @memberof TraceIDs
     */
    traces: Array<TraceID>;
}

/**
 * Check if a given object implements the TraceIDs interface.
 */
export function instanceOfTraceIDs(value: object): boolean {
    if (!('traces' in value)) return false;
    return true;
}

export function TraceIDsFromJSON(json: any): TraceIDs {
    return TraceIDsFromJSONTyped(json, false);
}

export function TraceIDsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceIDs {
    if (json == null) {
        return json;
    }
    return {
        
        'traces': ((json['traces'] as Array<any>).map(TraceIDFromJSON)),
    };
}

export function TraceIDsToJSON(value?: TraceIDs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'traces': ((value['traces'] as Array<any>).map(TraceIDToJSON)),
    };
}
