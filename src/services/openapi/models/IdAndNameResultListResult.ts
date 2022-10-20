/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdAndNameResult } from './IdAndNameResult';
import type { ResultCode } from './ResultCode';

export type IdAndNameResultListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: Array<IdAndNameResult> | null;
};

