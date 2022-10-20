/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserStatusEnumResult } from './UserStatusEnumResult';

export type UserListQuery = {
    id?: number;
    name?: string | null;
    status?: UserStatusEnumResult;
    currentCity?: string | null;
    createdDate?: string;
    isStaffer?: boolean;
    email?: string | null;
    phoneNumber?: string | null;
};

