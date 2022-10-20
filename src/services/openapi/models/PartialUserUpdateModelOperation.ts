/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperationType } from './OperationType';

export type PartialUserUpdateModelOperation = {
    operationType?: OperationType;
    path?: string | null;
    op?: string | null;
    from?: string | null;
    value?: any;
};

