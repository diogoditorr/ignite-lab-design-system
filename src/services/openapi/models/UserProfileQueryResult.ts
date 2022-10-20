/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultCode } from './ResultCode';
import type { UserProfileQuery } from './UserProfileQuery';

export type UserProfileQueryResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: UserProfileQuery;
};

