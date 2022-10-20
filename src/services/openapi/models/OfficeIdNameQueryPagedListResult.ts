/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OfficeIdNameQueryPagedList } from './OfficeIdNameQueryPagedList';
import type { ResultCode } from './ResultCode';

export type OfficeIdNameQueryPagedListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: OfficeIdNameQueryPagedList;
};

