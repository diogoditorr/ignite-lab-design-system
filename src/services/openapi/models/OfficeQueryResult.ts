/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OfficeQuery } from './OfficeQuery';
import type { ResultCode } from './ResultCode';

export type OfficeQueryResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: OfficeQuery;
};

