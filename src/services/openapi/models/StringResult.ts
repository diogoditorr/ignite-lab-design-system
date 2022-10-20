/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultCode } from './ResultCode';

export type StringResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: string | null;
};

