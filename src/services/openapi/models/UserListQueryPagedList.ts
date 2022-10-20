/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserListQuery } from './UserListQuery';

export type UserListQueryPagedList = {
    values?: Array<UserListQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

