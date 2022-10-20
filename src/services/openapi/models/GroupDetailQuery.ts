/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupAdminQuery } from './GroupAdminQuery';
import type { GroupMembersQuery } from './GroupMembersQuery';
import type { GroupMutualFriendsQuery } from './GroupMutualFriendsQuery';
import type { IdAndNameResult } from './IdAndNameResult';

export type GroupDetailQuery = {
    groupId?: number;
    name?: string | null;
    description?: string | null;
    image?: string | null;
    isPublic?: boolean;
    quantityMembers?: number;
    admins?: Array<GroupAdminQuery> | null;
    members?: Array<GroupMembersQuery> | null;
    mutualFriends?: Array<GroupMutualFriendsQuery> | null;
    tags?: Array<IdAndNameResult> | null;
};

