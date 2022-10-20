/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDetailQueryPagedList } from './GroupDetailQueryPagedList';
import type { ResultCode } from './ResultCode';

export type GroupDetailQueryPagedListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: GroupDetailQueryPagedList;
};

