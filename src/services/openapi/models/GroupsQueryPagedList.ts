/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupsQuery } from './GroupsQuery';

export type GroupsQueryPagedList = {
    values?: Array<GroupsQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

