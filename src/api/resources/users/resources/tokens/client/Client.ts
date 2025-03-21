/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Courier from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Tokens {
    export interface Options {
        environment?: core.Supplier<environments.CourierEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        authorizationToken?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Tokens {
    constructor(protected readonly _options: Tokens.Options = {}) {}

    /**
     * Adds multiple tokens to a user and overwrites matching existing tokens.
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.users.tokens.addMultiple("user_id")
     */
    public async addMultiple(userId: string, requestOptions?: Tokens.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling PUT /users/{user_id}/tokens.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Adds a single token to a user and overwrites a matching existing token.
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {string} token - The full token string.
     * @param {Courier.users.UserToken} request
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.users.tokens.add("user_id", "token", {
     *         token: undefined,
     *         provider_key: "firebase-fcm",
     *         expiry_date: undefined,
     *         properties: undefined,
     *         device: undefined,
     *         tracking: undefined
     *     })
     */
    public async add(
        userId: string,
        token: string,
        request: Courier.users.UserToken,
        requestOptions?: Tokens.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens/${encodeURIComponent(token)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError(
                    "Timeout exceeded when calling PUT /users/{user_id}/tokens/{token}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Apply a JSON Patch (RFC 6902) to the specified token.
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {string} token - The full token string.
     * @param {Courier.users.PatchUserTokenOpts} request
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.users.tokens.update("user_id", "token", {
     *         patch: [{
     *                 op: "op",
     *                 path: "path",
     *                 value: undefined
     *             }, {
     *                 op: "op",
     *                 path: "path",
     *                 value: undefined
     *             }]
     *     })
     */
    public async update(
        userId: string,
        token: string,
        request: Courier.users.PatchUserTokenOpts,
        requestOptions?: Tokens.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens/${encodeURIComponent(token)}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError(
                    "Timeout exceeded when calling PATCH /users/{user_id}/tokens/{token}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get single token available for a `:token`
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {string} token - The full token string.
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.users.tokens.get("user_id", "token")
     */
    public async get(
        userId: string,
        token: string,
        requestOptions?: Tokens.RequestOptions,
    ): Promise<Courier.users.GetUserTokenResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens/${encodeURIComponent(token)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Courier.users.GetUserTokenResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError(
                    "Timeout exceeded when calling GET /users/{user_id}/tokens/{token}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets all tokens available for a :user_id
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.users.tokens.list("user_id")
     */
    public async list(
        userId: string,
        requestOptions?: Tokens.RequestOptions,
    ): Promise<Courier.users.GetAllTokensResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Courier.users.GetAllTokensResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /users/{user_id}/tokens.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {string} token - The full token string.
     * @param {Tokens.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tokens.delete("user_id", "token")
     */
    public async delete(userId: string, token: string, requestOptions?: Tokens.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/tokens/${encodeURIComponent(token)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CourierError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError(
                    "Timeout exceeded when calling DELETE /users/{user_id}/tokens/{token}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer =
            (await core.Supplier.get(this._options.authorizationToken)) ?? process?.env["COURIER_AUTH_TOKEN"];
        if (bearer == null) {
            throw new errors.CourierError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a COURIER_AUTH_TOKEN environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
