/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDetailQuery } from './GroupDetailQuery';

export type GroupDetailQueryPagedList = {
    values?: Array<GroupDetailQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

