/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeEmailModel } from '../models/ChangeEmailModel';
import type { Result } from '../models/Result';
import type { SendEmailTokenModel } from '../models/SendEmailTokenModel';
import type { SendPhoneNumberTokenModel } from '../models/SendPhoneNumberTokenModel';
import type { ValidateEmailTokenModel } from '../models/ValidateEmailTokenModel';
import type { ValidatePhoneNumberTokenModel } from '../models/ValidatePhoneNumberTokenModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserBeforeRegisterService {

    /**
     * Send a sms token to start register an user
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static postV1UserBeforeRegisterSendPhoneNumberToken(
        requestBody?: SendPhoneNumberTokenModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user-before-register/send/phone-number/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate sms token
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static postV1UserBeforeRegisterValidatePhoneNumberToken(
        requestBody?: ValidatePhoneNumberTokenModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user-before-register/validate/phone-number/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Send a email token to finish register an user
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static postV1UserBeforeRegisterSendEmailToken(
        requestBody?: SendEmailTokenModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user-before-register/send/email/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate email token
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static postV1UserBeforeRegisterValidateEmailToken(
        requestBody?: ValidateEmailTokenModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user-before-register/validate/email/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Change email after phone number confirmed
     * @param requestBody
     * @returns Result Success
     * @throws ApiError
     */
    public static postV1UserBeforeRegisterChangeEmail(
        requestBody?: ChangeEmailModel,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/user-before-register/change/email',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
