/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupUserStatusEnumResult } from './GroupUserStatusEnumResult';

export type GroupMembersQuery = {
    memberId?: number;
    firstName?: string | null;
    lastName?: string | null;
    status?: GroupUserStatusEnumResult;
};

