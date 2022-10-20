/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupUserStatusEnumResult } from './GroupUserStatusEnumResult';

export type UserGroupQuery = {
    id?: number;
    name?: string | null;
    image?: string | null;
    description?: string | null;
    isAdmin?: boolean;
    status?: GroupUserStatusEnumResult;
};

