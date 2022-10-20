/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OfficeIdNameQueryPagedListResult } from '../models/OfficeIdNameQueryPagedListResult';
import type { RegisterReportModel } from '../models/RegisterReportModel';
import type { ReportUserQueryResult } from '../models/ReportUserQueryResult';
import type { ReportUsersListQueryPagedListResult } from '../models/ReportUsersListQueryPagedListResult';
import type { UpdateReportModel } from '../models/UpdateReportModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportUserService {

    /**
     * Get all reasons to report a user
     * @param page
     * @param pageSize
     * @param search
     * @returns OfficeIdNameQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1ReportReasons(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<OfficeIdNameQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/report/reasons',
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
     * Report a user
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postV1Report(
        requestBody?: RegisterReportModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/report',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get all Reports
     * @param page
     * @param pageSize
     * @param search
     * @returns ReportUsersListQueryPagedListResult Success
     * @throws ApiError
     */
    public static getV1Report(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<ReportUsersListQueryPagedListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/report',
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
     * Update a report
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putV1Report(
        id: number,
        requestBody?: UpdateReportModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/report/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get single report
     * @param id
     * @returns ReportUserQueryResult Success
     * @throws ApiError
     */
    public static getV1Report1(
        id: number,
    ): CancelablePromise<ReportUserQueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/report/{id}',
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
