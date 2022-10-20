/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddressModel = {
    addressDescription: string;
    state: string;
    city: string;
    county?: string | null;
    country: string;
    neighborhood?: string | null;
    latitude?: number;
    longitude?: number;
    zipCode: string;
};

