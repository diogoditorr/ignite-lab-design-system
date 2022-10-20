/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultCode } from './ResultCode';
import type { UserSyncListQuery } from './UserSyncListQuery';

export type UserSyncListQueryIEnumerableResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: Array<UserSyncListQuery> | null;
};

