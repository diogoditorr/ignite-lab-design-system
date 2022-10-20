/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupDetailQueryPagedListResult } from '../models/GroupDetailQueryPagedListResult';
import type { GroupsQueryPagedListResult } from '../models/GroupsQueryPagedListResult';
import type { Int32Result } from '../models/Int32Result';
import type { InviteGroupMemberModel } from '../models/InviteGroupMemberModel';
import type { ManagementAdminGroupInviteModel } from '../models/ManagementAdminGroupInviteModel';
import type { ManagementUserGroupInviteModel } from '../models/ManagementUserGroupInviteModel';
import type { RegisterGroupModel } from '../models/RegisterGroupModel';
import type { UpdateGroupModel } from '../models/UpdateGroupModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupService {

    /**
     * Get groups
     * @param name
     * @param isPublic
     * @param page
     * @param pageSize
     * @param search
     * @returns GroupsQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1Group(
        name?: string,
        isPublic?: boolean,
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<GroupsQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/group',
            query: {
                'name': name,
                'isPublic': isPublic,
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
     * Register a new group
     * @param requestBody
     * @returns Int32Result Success
     * @throws ApiError
     */
    public static postV1Group(
        requestBody?: RegisterGroupModel,
    ): CancelablePromise<Int32Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/group',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get group detail
     * @param groupId
     * @returns GroupDetailQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1GroupDetail(
        groupId: number,
    ): CancelablePromise<GroupDetailQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/group/{groupId}/detail',
            path: {
                'groupId': groupId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * update a existed group
     * @param groupId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putV1Group(
        groupId: number,
        requestBody?: UpdateGroupModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/group/{groupId}',
            path: {
                'groupId': groupId,
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
     * Request to join in the group
     * @param groupId
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Group(
        groupId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/group/{groupId}',
            path: {
                'groupId': groupId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Request to join in the group
     * @param groupId
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static deleteV1GroupUser(
        groupId: number,
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/group/{groupId}/user/{userId}',
            path: {
                'groupId': groupId,
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Invite new group member
     * @param groupId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1GroupInvite(
        groupId: number,
        requestBody?: InviteGroupMemberModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/group/{groupId}/invite',
            path: {
                'groupId': groupId,
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
     * Request to join in the group
     * @param groupId
     * @returns void
     * @throws ApiError
     */
    public static postV1GroupJoinRequest(
        groupId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/group/{groupId}/join/request',
            path: {
                'groupId': groupId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Ability for users to see, accept or decline their pending invites.
     * @param groupId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1GroupUserManagementInvites(
        groupId: number,
        requestBody?: ManagementUserGroupInviteModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/group/{groupId}/user/management/invites',
            path: {
                'groupId': groupId,
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
     * Ability for admin to see, accept or decline their pending invites.
     * @param groupId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1GroupAdminManagementInvites(
        groupId: number,
        requestBody?: ManagementAdminGroupInviteModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/group/{groupId}/admin/management/invites',
            path: {
                'groupId': groupId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
