/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserReportQuery } from './UserReportQuery';

export type ReportUserQuery = {
    id?: number;
    reason?: string | null;
    status?: string | null;
    reportedAt?: string;
    description?: string | null;
    reportedUser?: UserReportQuery;
    reportedByUser?: UserReportQuery;
};

