/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventTypeEnumResult } from './EventTypeEnumResult';
import type { ResultCode } from './ResultCode';

export type EventTypeEnumResultListResult = {
    readonly isFailure?: boolean;
    readonly isSuccess?: boolean;
    code?: ResultCode;
    readonly errors?: Array<string> | null;
    readonly singleError?: string | null;
    value?: Array<EventTypeEnumResult> | null;
};

