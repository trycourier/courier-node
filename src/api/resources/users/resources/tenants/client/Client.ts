/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Courier from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Tenants {
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

export class Tenants {
    constructor(protected readonly _options: Tenants.Options = {}) {}

    /**
     * This endpoint is used to add a user to
     * multiple tenants in one call.
     * A custom profile can also be supplied for each tenant.
     * This profile will be merged with the user's main
     * profile when sending to the user with that tenant.
     *
     * @param {string} userId - The user's ID. This can be any uniquely identifiable string.
     * @param {Courier.users.AddUserToMultipleTenantsParams} request
     * @param {Tenants.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tenants.addMultple("user_id", {
     *         tenants: [{
     *                 user_id: undefined,
     *                 type: undefined,
     *                 tenant_id: "tenant_id",
     *                 profile: undefined
     *             }, {
     *                 user_id: undefined,
     *                 type: undefined,
     *                 tenant_id: "tenant_id",
     *                 profile: undefined
     *             }]
     *     })
     */
    public async addMultple(
        userId: string,
        request: Courier.users.AddUserToMultipleTenantsParams,
        requestOptions?: Tenants.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `users/${encodeURIComponent(userId)}/tenants`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling PUT /users/{user_id}/tenants.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint is used to add a single tenant.
     *
     * A custom profile can also be supplied with the tenant.
     * This profile will be merged with the user's main profile
     * when sending to the user with that tenant.
     *
     * @param {string} userId - Id of the user to be added to the supplied tenant.
     * @param {string} tenantId - Id of the tenant the user should be added to.
     * @param {Courier.users.AddUserToSingleTenantsParams} request
     * @param {Tenants.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tenants.add("user_id", "tenant_id", {
     *         profile: undefined
     *     })
     */
    public async add(
        userId: string,
        tenantId: string,
        request: Courier.users.AddUserToSingleTenantsParams = {},
        requestOptions?: Tenants.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `users/${encodeURIComponent(userId)}/tenants/${encodeURIComponent(tenantId)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
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
                    "Timeout exceeded when calling PUT /users/{user_id}/tenants/{tenant_id}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Removes a user from any tenants they may have been associated with.
     *
     * @param {string} userId - Id of the user to be removed from the supplied tenant.
     * @param {Tenants.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tenants.removeAll("user_id")
     */
    public async removeAll(userId: string, requestOptions?: Tenants.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `users/${encodeURIComponent(userId)}/tenants`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling DELETE /users/{user_id}/tenants.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Removes a user from the supplied tenant.
     *
     * @param {string} userId - Id of the user to be removed from the supplied tenant.
     * @param {string} tenantId - Id of the tenant the user should be removed from.
     * @param {Tenants.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tenants.remove("user_id", "tenant_id")
     */
    public async remove(userId: string, tenantId: string, requestOptions?: Tenants.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `users/${encodeURIComponent(userId)}/tenants/${encodeURIComponent(tenantId)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
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
                    "Timeout exceeded when calling DELETE /users/{user_id}/tenants/{tenant_id}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a paginated list of user tenant associations.
     *
     * @param {string} userId - Id of the user to retrieve all associated tenants for.
     * @param {Courier.users.ListTenantsForUserParams} request
     * @param {Tenants.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.users.tenants.list("user_id")
     */
    public async list(
        userId: string,
        request: Courier.users.ListTenantsForUserParams = {},
        requestOptions?: Tenants.RequestOptions,
    ): Promise<Courier.users.ListTenantsForUserResponse> {
        const { limit, cursor } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `users/${encodeURIComponent(userId)}/tenants`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Courier.users.ListTenantsForUserResponse;
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /users/{user_id}/tenants.");
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
