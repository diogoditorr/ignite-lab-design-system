/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagsQueryPagedListResult } from '../models/TagsQueryPagedListResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Get all tags
     * @param page
     * @param pageSize
     * @param search
     * @returns TagsQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1Tags(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<TagsQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/tags',
            query: {
                'page': page,
                'pageSize': pageSize,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
