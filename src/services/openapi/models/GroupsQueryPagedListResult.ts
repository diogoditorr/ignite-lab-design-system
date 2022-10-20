/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupsQueryPagedList } from './GroupsQueryPagedList';
import type { ResultCode } from './ResultCode';

export type GroupsQueryPagedListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: GroupsQueryPagedList;
};

