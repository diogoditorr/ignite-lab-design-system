/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressQuery } from './AddressQuery';
import type { IdAndNameResult } from './IdAndNameResult';
import type { UserGroupQuery } from './UserGroupQuery';
import type { UserStatusEnumResult } from './UserStatusEnumResult';

export type UserDetailQuery = {
    id?: number;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    profilePicture?: string | null;
    readonly profilePictureUrl?: string | null;
    profileBackgroud?: string | null;
    readonly profileBackgroudUrl?: string | null;
    status?: UserStatusEnumResult;
    email?: string | null;
    phoneNumber?: string | null;
    address?: AddressQuery;
    jobTitle?: string | null;
    affiliation?: IdAndNameResult;
    office?: IdAndNameResult;
    party?: IdAndNameResult;
    college?: IdAndNameResult;
    openWork?: boolean;
    fromState?: string | null;
    hillSince?: string | null;
    purple?: boolean;
    wasPurple?: boolean;
    privateOffice?: boolean;
    groups?: Array<UserGroupQuery> | null;
};

