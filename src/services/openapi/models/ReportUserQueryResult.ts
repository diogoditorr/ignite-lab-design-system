/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportUserQuery } from './ReportUserQuery';
import type { ResultCode } from './ResultCode';

export type ReportUserQueryResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: ReportUserQuery;
};

