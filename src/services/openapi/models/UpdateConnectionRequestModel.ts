/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionStatus } from './ConnectionStatus';

export type UpdateConnectionRequestModel = {
    action: string;
    connectionStatus?: ConnectionStatus;
};

