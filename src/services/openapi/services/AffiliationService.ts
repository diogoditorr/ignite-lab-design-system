/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdAndNameResultListResult } from '../models/IdAndNameResultListResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AffiliationService {

    /**
     * Get all affiliations
     * @returns IdAndNameResultListResult Success
     * @throws ApiError
     */
    public static getV1Affiliation(): CancelablePromise<IdAndNameResultListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/affiliation',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
