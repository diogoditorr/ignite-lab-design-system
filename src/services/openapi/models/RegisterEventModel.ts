/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';
import type { EventType } from './EventType';

export type RegisterEventModel = {
    name: string;
    image?: string | null;
    description: string;
    address: AddressModel;
    type?: EventType;
    public?: boolean;
    timeZone: string;
    startDate: string;
    endDate: string;
};

