/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactListUser } from '../models/ContactListUser';
import type { GroupDetailQueryPagedListResult } from '../models/GroupDetailQueryPagedListResult';
import type { Int32Result } from '../models/Int32Result';
import type { PatchUserModel } from '../models/PatchUserModel';
import type { RegisterUserModel } from '../models/RegisterUserModel';
import type { Result } from '../models/Result';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserDetailQueryResult } from '../models/UserDetailQueryResult';
import type { UserListQueryPagedListResult } from '../models/UserListQueryPagedListResult';
import type { UserProfileQueryResult } from '../models/UserProfileQueryResult';
import type { UserStatus } from '../models/UserStatus';
import type { UserSyncListQueryIEnumerableResult } from '../models/UserSyncListQueryIEnumerableResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * List users
     * @param name
     * @param status
     * @param page
     * @param pageSize
     * @param search
     * @returns UserListQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1User(
        name?: string,
        status?: UserStatus,
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<UserListQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user',
            query: {
                'name': name,
                'status': status,
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
     * Register user
     * @param requestBody
     * @returns string Success
     * @throws ApiError
     */
    public static postV1User(
        requestBody?: RegisterUserModel,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * get user details
     * @param userId
     * @returns UserDetailQueryResult Success
     * @throws ApiError
     */
    public static getV1User1(
        userId: number,
    ): CancelablePromise<UserDetailQueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update user
     * @param userId
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static putV1User(
        userId: number,
        requestBody?: UpdateUserModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/user/{userId}',
            path: {
                'userId': userId,
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
     * Update user
     * @param userId
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static patchV1User(
        userId: number,
        requestBody?: PatchUserModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/user/{userId}',
            path: {
                'userId': userId,
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
     * Delete user.
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static deleteV1User(
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/user/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * get user profile
     * @returns UserProfileQueryResult Success
     * @throws ApiError
     */
    public static getV1UserProfile(): CancelablePromise<UserProfileQueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user/profile',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * get groups that user is member
     * @param page
     * @param pageSize
     * @param search
     * @returns GroupDetailQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1UserGroups(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<GroupDetailQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user/groups',
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
     * Approve user in waitlist
     * @param userId
     * @returns Int32Result Success
     * @throws ApiError
     */
    public static postV1UserWaitlistApprove(
        userId: number,
    ): CancelablePromise<Int32Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user/{userId}/waitlist/approve',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Block user.
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static postV1UserBlock(
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user/{userId}/block',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Unblock user.
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static postV1UserUnblock(
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user/{userId}/unblock',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * List users based on my contacts
     * @param requestBody
     * @returns UserSyncListQueryIEnumerableResult Success
     * @throws ApiError
     */
    public static postV1UserSyncContacts(
        requestBody?: ContactListUser,
    ): CancelablePromise<UserSyncListQueryIEnumerableResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user/sync-contacts',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
