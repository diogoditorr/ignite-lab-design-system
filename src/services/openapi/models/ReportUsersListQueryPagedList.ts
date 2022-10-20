/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportUsersListQuery } from './ReportUsersListQuery';

export type ReportUsersListQueryPagedList = {
    values?: Array<ReportUsersListQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

