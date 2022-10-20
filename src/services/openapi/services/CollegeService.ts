/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdAndNameResultListResult } from '../models/IdAndNameResultListResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollegeService {

    /**
     * Get all colleges
     * @returns IdAndNameResultListResult Success
     * @throws ApiError
     */
    public static getV1College(): CancelablePromise<IdAndNameResultListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/college',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
