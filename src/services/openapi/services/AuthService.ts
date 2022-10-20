/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginData } from '../models/LoginData';
import type { LoginPossibilitiesResultResult } from '../models/LoginPossibilitiesResultResult';
import type { StringResult } from '../models/StringResult';
import type { TokenValidate } from '../models/TokenValidate';
import type { TwoFactorAuthSendToken } from '../models/TwoFactorAuthSendToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login
     * @param requestBody
     * @returns StringResult Success
     * @throws ApiError
     */
    public static postV1AuthLogin(
        requestBody?: LoginData,
    ): CancelablePromise<StringResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get login possibilities
     * @param email
     * @returns LoginPossibilitiesResultResult Success
     * @throws ApiError
     */
    public static getV1AuthLoginPossibilities(
        email: string,
    ): CancelablePromise<LoginPossibilitiesResultResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth/login/possibilities/{email}',
            path: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Send token by email or sms
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postV1AuthSendToken(
        requestBody?: TwoFactorAuthSendToken,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/send/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate if a valida token
     * @param requestBody
     * @returns string Success
     * @throws ApiError
     */
    public static postV1AuthValidateToken(
        requestBody?: TokenValidate,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/validate/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Request Token to change Password
     * @param email
     * @returns any Success
     * @throws ApiError
     */
    public static getV1AuthRequestTokenChangePassword(
        email?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth/request/token/change/password',
            query: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Reset Password
     * @param token
     * @param password
     * @param confirmPassword
     * @returns any Success
     * @throws ApiError
     */
    public static postV1AuthChange(
        token: string,
        password: string,
        confirmPassword: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/change',
            query: {
                'token': token,
                'password': password,
                'confirmPassword': confirmPassword,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
