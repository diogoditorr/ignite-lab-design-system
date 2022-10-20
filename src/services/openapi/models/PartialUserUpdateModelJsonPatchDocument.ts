/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IContractResolver } from './IContractResolver';
import type { PartialUserUpdateModelOperation } from './PartialUserUpdateModelOperation';

export type PartialUserUpdateModelJsonPatchDocument = {
    readonly operations?: Array<PartialUserUpdateModelOperation> | null;
    contractResolver?: IContractResolver;
};

