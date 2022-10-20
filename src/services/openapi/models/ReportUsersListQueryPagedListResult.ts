/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportUsersListQueryPagedList } from './ReportUsersListQueryPagedList';
import type { ResultCode } from './ResultCode';

export type ReportUsersListQueryPagedListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: ReportUsersListQueryPagedList;
};

