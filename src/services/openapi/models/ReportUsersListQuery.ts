/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportedUserStatus } from './ReportedUserStatus';

export type ReportUsersListQuery = {
    id?: number;
    reported?: string | null;
    reportedBy?: string | null;
    status?: ReportedUserStatus;
    reportedAt?: string;
    reason?: string | null;
};

