/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagsQuery } from './TagsQuery';

export type TagsQueryPagedList = {
    values?: Array<TagsQuery> | null;
    total?: number;
    totalOfPages?: number;
    currentPage?: number;
};

