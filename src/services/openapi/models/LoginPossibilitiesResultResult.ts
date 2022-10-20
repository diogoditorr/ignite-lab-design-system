/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginPossibilitiesResult } from './LoginPossibilitiesResult';
import type { ResultCode } from './ResultCode';

export type LoginPossibilitiesResultResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: LoginPossibilitiesResult;
};

