/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionRequestModel } from '../models/ConnectionRequestModel';
import type { FriendListQueryPagedList } from '../models/FriendListQueryPagedList';
import type { FriendRequestReceivedQueryPagedList } from '../models/FriendRequestReceivedQueryPagedList';
import type { FriendRequestSentQueryPagedList } from '../models/FriendRequestSentQueryPagedList';
import type { UpdateConnectionRequestModel } from '../models/UpdateConnectionRequestModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConnectionService {

    /**
     * Send friend request
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postV1Connection(
        requestBody?: ConnectionRequestModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/connection',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get friend list
     * @param page
     * @param pageSize
     * @param search
     * @returns FriendListQueryPagedList Success
     * @throws ApiError
     */
    public static getV1Connection(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<FriendListQueryPagedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/connection',
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
     * Answer friend request
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putV1Connection(
        id: number,
        requestBody?: UpdateConnectionRequestModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/connection/{id}',
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
     * Get friend requests received
     * @param page
     * @param pageSize
     * @param search
     * @returns FriendRequestReceivedQueryPagedList Success
     * @throws ApiError
     */
    public static getV1ConnectionReceived(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<FriendRequestReceivedQueryPagedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/connection/received',
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
     * Get friend requests sent
     * @param page
     * @param pageSize
     * @param search
     * @returns FriendRequestSentQueryPagedList Success
     * @throws ApiError
     */
    public static getV1ConnectionSent(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<FriendRequestSentQueryPagedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/connection/sent',
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
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static deleteV1ConnectionUser(
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/connection/user/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
