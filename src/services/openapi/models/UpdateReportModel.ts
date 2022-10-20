/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportedUserStatus } from './ReportedUserStatus';

export type UpdateReportModel = {
    analyse: string;
    action: string;
    status?: ReportedUserStatus;
};

