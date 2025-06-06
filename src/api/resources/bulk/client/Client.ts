/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Bulk {
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

export class Bulk {
    constructor(protected readonly _options: Bulk.Options = {}) {}

    /**
     * @param {Courier.BulkCreateJobParams} request
     * @param {Bulk.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.bulk.createJob({
     *         message: {
     *             brand: undefined,
     *             data: undefined,
     *             event: undefined,
     *             locale: undefined,
     *             override: undefined,
     *             message: undefined
     *         }
     *     })
     */
    public createJob(
        request: Courier.BulkCreateJobParams,
        requestOptions?: Bulk.IdempotentRequestOptions,
    ): core.HttpResponsePromise<Courier.BulkCreateJobResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createJob(request, requestOptions));
    }

    private async __createJob(
        request: Courier.BulkCreateJobParams,
        requestOptions?: Bulk.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<Courier.BulkCreateJobResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                "/bulk",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.2",
                "User-Agent": "@trycourier/courier/6.4.2",
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
            return { data: _response.body as Courier.BulkCreateJobResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(
                        _response.error.body as Courier.BadRequest,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling POST /bulk.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Ingest user data into a Bulk Job
     *
     * @param {string} jobId - A unique identifier representing the bulk job
     * @param {Courier.BulkIngestUsersParams} request
     * @param {Bulk.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.bulk.ingestUsers("job_id", {
     *         users: [{
     *                 preferences: undefined,
     *                 profile: undefined,
     *                 recipient: undefined,
     *                 data: undefined,
     *                 to: undefined
     *             }, {
     *                 preferences: undefined,
     *                 profile: undefined,
     *                 recipient: undefined,
     *                 data: undefined,
     *                 to: undefined
     *             }]
     *     })
     */
    public ingestUsers(
        jobId: string,
        request: Courier.BulkIngestUsersParams,
        requestOptions?: Bulk.IdempotentRequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__ingestUsers(jobId, request, requestOptions));
    }

    private async __ingestUsers(
        jobId: string,
        request: Courier.BulkIngestUsersParams,
        requestOptions?: Bulk.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/bulk/${encodeURIComponent(jobId)}`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.2",
                "User-Agent": "@trycourier/courier/6.4.2",
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
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CourierError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling POST /bulk/{job_id}.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Run a bulk job
     *
     * @param {string} jobId - A unique identifier representing the bulk job
     * @param {Bulk.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.bulk.runJob("job_id")
     */
    public runJob(jobId: string, requestOptions?: Bulk.IdempotentRequestOptions): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__runJob(jobId, requestOptions));
    }

    private async __runJob(
        jobId: string,
        requestOptions?: Bulk.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/bulk/${encodeURIComponent(jobId)}/run`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.2",
                "User-Agent": "@trycourier/courier/6.4.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null ? requestOptions?.idempotencyExpiry : undefined,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(
                        _response.error.body as Courier.BadRequest,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling POST /bulk/{job_id}/run.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get a bulk job
     *
     * @param {string} jobId - A unique identifier representing the bulk job
     * @param {Bulk.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.bulk.getJob("job_id")
     */
    public getJob(
        jobId: string,
        requestOptions?: Bulk.RequestOptions,
    ): core.HttpResponsePromise<Courier.BulkGetJobResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getJob(jobId, requestOptions));
    }

    private async __getJob(
        jobId: string,
        requestOptions?: Bulk.RequestOptions,
    ): Promise<core.WithRawResponse<Courier.BulkGetJobResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/bulk/${encodeURIComponent(jobId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.2",
                "User-Agent": "@trycourier/courier/6.4.2",
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
            return { data: _response.body as Courier.BulkGetJobResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(
                        _response.error.body as Courier.BadRequest,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /bulk/{job_id}.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get Bulk Job Users
     *
     * @param {string} jobId - A unique identifier representing the bulk job
     * @param {Courier.BulkGetUsersParams} request
     * @param {Bulk.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await client.bulk.getUsers("job_id")
     */
    public getUsers(
        jobId: string,
        request: Courier.BulkGetUsersParams = {},
        requestOptions?: Bulk.RequestOptions,
    ): core.HttpResponsePromise<Courier.BulkGetJobUsersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getUsers(jobId, request, requestOptions));
    }

    private async __getUsers(
        jobId: string,
        request: Courier.BulkGetUsersParams = {},
        requestOptions?: Bulk.RequestOptions,
    ): Promise<core.WithRawResponse<Courier.BulkGetJobUsersResponse>> {
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
                `/bulk/${encodeURIComponent(jobId)}/users`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.2",
                "User-Agent": "@trycourier/courier/6.4.2",
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
            return { data: _response.body as Courier.BulkGetJobUsersResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(
                        _response.error.body as Courier.BadRequest,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /bulk/{job_id}/users.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
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
