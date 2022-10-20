/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateGroupModel = {
    name: string;
    description: string;
    image?: string | null;
    isPublic?: boolean;
    tagIds?: Array<number> | null;
};

