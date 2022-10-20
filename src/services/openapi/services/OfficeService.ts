/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Result } from '../models/Int32Result';
import type { OfficeIdNameQueryPagedListResult } from '../models/OfficeIdNameQueryPagedListResult';
import type { OfficeModel } from '../models/OfficeModel';
import type { OfficeQueryResult } from '../models/OfficeQueryResult';
import type { UserListQueryResult } from '../models/UserListQueryResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OfficeService {

    /**
     * Get all offices
     * @param page
     * @param pageSize
     * @param search
     * @returns OfficeIdNameQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1Office(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<OfficeIdNameQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/office',
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

    /**
     * Create office
     * @param requestBody
     * @returns Int32Result Success
     * @throws ApiError
     */
    public static postV1Office(
        requestBody?: OfficeModel,
    ): CancelablePromise<Int32Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/office',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get single office
     * @param id
     * @returns OfficeQueryResult Success
     * @throws ApiError
     */
    public static getV1Office1(
        id: number,
    ): CancelablePromise<OfficeQueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/office/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update office
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putV1Office(
        id: number,
        requestBody?: OfficeModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/office/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Remove office
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Office(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/office/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get users from office
     * @param id
     * @returns UserListQueryResult Success
     * @throws ApiError
     */
    public static getV1OfficeUsers(
        id: number,
    ): CancelablePromise<UserListQueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/office/{id}/users',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
