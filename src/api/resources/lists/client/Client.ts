/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Lists {
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

    export interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey?: string | undefined;
        idempotencyExpiry?: string | undefined;
    }
}

export class Lists {
    constructor(protected readonly _options: Lists.Options = {}) {}

    /**
     * Returns all of the lists, with the ability to filter based on a pattern.
     *
     * @param {Courier.GetAllListsRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.lists.list()
     */
    public async list(
        request: Courier.GetAllListsRequest = {},
        requestOptions?: Lists.RequestOptions,
    ): Promise<Courier.ListGetAllResponse> {
        const { cursor, pattern } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (pattern != null) {
            _queryParams["pattern"] = pattern;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                "/lists",
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Courier.ListGetAllResponse;
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /lists.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list based on the list ID provided.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await client.lists.get("list_id")
     */
    public async get(listId: string, requestOptions?: Lists.RequestOptions): Promise<Courier.List> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}`,
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
            return _response.body as Courier.List;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Courier.NotFoundError(_response.error.body as Courier.NotFound);
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /lists/{list_id}.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create or replace an existing list with the supplied values.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.ListPutParams} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.lists.update("list_id", {
     *         name: "name",
     *         preferences: undefined
     *     })
     */
    public async update(
        listId: string,
        request: Courier.ListPutParams,
        requestOptions?: Lists.RequestOptions,
    ): Promise<Courier.List> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}`,
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
            return _response.body as Courier.List;
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling PUT /lists/{list_id}.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a list by list ID.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.lists.delete("list_id")
     */
    public async delete(listId: string, requestOptions?: Lists.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}`,
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling DELETE /lists/{list_id}.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Restore a previously deleted list.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.lists.restore("list_id")
     */
    public async restore(listId: string, requestOptions?: Lists.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/restore`,
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling PUT /lists/{list_id}/restore.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the list's subscriptions.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.GetSubscriptionForListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await client.lists.getSubscribers("list_id")
     */
    public async getSubscribers(
        listId: string,
        request: Courier.GetSubscriptionForListRequest = {},
        requestOptions?: Lists.RequestOptions,
    ): Promise<Courier.ListGetSubscriptionsResponse> {
        const { cursor } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/subscriptions`,
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Courier.ListGetSubscriptionsResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Courier.NotFoundError(_response.error.body as Courier.NotFound);
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
                    "Timeout exceeded when calling GET /lists/{list_id}/subscriptions.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Subscribes the users to the list, overwriting existing subscriptions. If the list does not exist, it will be automatically created.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.SubscribeUsersToListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.lists.updateSubscribers("list_id", {
     *         recipients: [{
     *                 recipientId: "recipientId",
     *                 preferences: undefined
     *             }, {
     *                 recipientId: "recipientId",
     *                 preferences: undefined
     *             }]
     *     })
     */
    public async updateSubscribers(
        listId: string,
        request: Courier.SubscribeUsersToListRequest,
        requestOptions?: Lists.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/subscriptions`,
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
                    "Timeout exceeded when calling PUT /lists/{list_id}/subscriptions.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Subscribes additional users to the list, without modifying existing subscriptions. If the list does not exist, it will be automatically created.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.AddSubscribersToList} request
     * @param {Lists.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.lists.addSubscribers("list_id", {
     *         recipients: [{
     *                 recipientId: "recipientId",
     *                 preferences: undefined
     *             }, {
     *                 recipientId: "recipientId",
     *                 preferences: undefined
     *             }]
     *     })
     */
    public async addSubscribers(
        listId: string,
        request: Courier.AddSubscribersToList,
        requestOptions?: Lists.IdempotentRequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/subscriptions`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "@trycourier/courier/6.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null ? requestOptions?.idempotencyExpiry : undefined,
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
                    "Timeout exceeded when calling POST /lists/{list_id}/subscriptions.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Subscribe a user to an existing list (note: if the List does not exist, it will be automatically created).
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {string} userId - A unique identifier representing the recipient associated with the list
     * @param {Courier.SubscribeUserToListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.lists.subscribe("list_id", "user_id", {
     *         preferences: undefined
     *     })
     */
    public async subscribe(
        listId: string,
        userId: string,
        request: Courier.SubscribeUserToListRequest = {},
        requestOptions?: Lists.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/subscriptions/${encodeURIComponent(userId)}`,
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
                    "Timeout exceeded when calling PUT /lists/{list_id}/subscriptions/{user_id}.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a subscription to a list by list ID and user ID.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {string} userId - A unique identifier representing the recipient associated with the list
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await client.lists.unsubscribe("list_id", "user_id")
     */
    public async unsubscribe(listId: string, userId: string, requestOptions?: Lists.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/lists/${encodeURIComponent(listId)}/subscriptions/${encodeURIComponent(userId)}`,
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
            switch (_response.error.statusCode) {
                case 404:
                    throw new Courier.NotFoundError(_response.error.body as Courier.NotFound);
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
                    "Timeout exceeded when calling DELETE /lists/{list_id}/subscriptions/{user_id}.",
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
