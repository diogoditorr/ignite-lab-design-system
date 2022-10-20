/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminApproveEventModel } from '../models/AdminApproveEventModel';
import type { EventTypeEnumResultListResult } from '../models/EventTypeEnumResultListResult';
import type { Int32Result } from '../models/Int32Result';
import type { InviteEventMemberModel } from '../models/InviteEventMemberModel';
import type { ManagementInviteEventMemberModel } from '../models/ManagementInviteEventMemberModel';
import type { RegisterEventModel } from '../models/RegisterEventModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * Get event types
     * @returns EventTypeEnumResultListResult Success
     * @throws ApiError
     */
    public static getV1EventTypes(): CancelablePromise<EventTypeEnumResultListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/event/types',
        });
    }

    /**
     * Register a new event
     * @param requestBody
     * @returns Int32Result Success
     * @throws ApiError
     */
    public static postV1Event(
        requestBody?: RegisterEventModel,
    ): CancelablePromise<Int32Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/event',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * update event
     * @param eventId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putV1Event(
        eventId: number,
        requestBody?: RegisterEventModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/event/{eventId}',
            path: {
                'eventId': eventId,
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
     * delete event
     * @param eventId
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Event(
        eventId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/event/{eventId}',
            path: {
                'eventId': eventId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * cancel event
     * @param eventId
     * @returns void
     * @throws ApiError
     */
    public static putV1EventCancel(
        eventId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/event/{eventId}/cancel',
            path: {
                'eventId': eventId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Invite new invite member
     * @param eventId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1EventInvite(
        eventId: number,
        requestBody?: InviteEventMemberModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/event/{eventId}/invite',
            path: {
                'eventId': eventId,
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
     * Ability for accept or decline your pending invites
     * @param eventId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1EventUserManagementInvites(
        eventId: number,
        requestBody?: ManagementInviteEventMemberModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/event/{eventId}/user/management/invites',
            path: {
                'eventId': eventId,
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
     * Ability to CNCT admin to accept or decline event creations before they go on line.
     * @param eventId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postV1EventAdminApprove(
        eventId: number,
        requestBody?: AdminApproveEventModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/event/{eventId}/admin/approve',
            path: {
                'eventId': eventId,
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
