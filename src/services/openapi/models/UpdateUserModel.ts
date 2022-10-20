/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';

export type UpdateUserModel = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: AddressModel;
    privateOffice?: boolean;
    hillSince: string;
    openWork?: boolean;
    purple?: boolean;
    partyId: number;
    collegeId: number;
    affiliationId: number;
    officeId: number;
    fromState?: string | null;
    birthDate?: string | null;
};

