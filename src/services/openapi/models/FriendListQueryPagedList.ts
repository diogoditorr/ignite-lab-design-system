/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FriendListQuery } from './FriendListQuery';

export type FriendListQueryPagedList = {
    values?: Array<FriendListQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

