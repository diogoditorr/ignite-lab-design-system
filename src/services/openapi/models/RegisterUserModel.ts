/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';

export type RegisterUserModel = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: AddressModel;
    email: string;
    phoneNumber: string;
};

