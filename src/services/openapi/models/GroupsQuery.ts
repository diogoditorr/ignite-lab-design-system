/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupOwnerQuery } from './GroupOwnerQuery';

export type GroupsQuery = {
    groupId?: number;
    name?: string | null;
    description?: string | null;
    image?: string | null;
    isPublic?: boolean;
    owner?: GroupOwnerQuery;
};

