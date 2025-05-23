/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace AuditEvents {
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

export class AuditEvents {
    constructor(protected readonly _options: AuditEvents.Options = {}) {}

    /**
     * Fetch the list of audit events
     *
     * @param {Courier.ListAuditEventsRequest} request
     * @param {AuditEvents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auditEvents.list()
     */
    public list(
        request: Courier.ListAuditEventsRequest = {},
        requestOptions?: AuditEvents.RequestOptions,
    ): core.HttpResponsePromise<Courier.ListAuditEventsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Courier.ListAuditEventsRequest = {},
        requestOptions?: AuditEvents.RequestOptions,
    ): Promise<core.WithRawResponse<Courier.ListAuditEventsResponse>> {
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
                "/audit-events",
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
            return { data: _response.body as Courier.ListAuditEventsResponse, rawResponse: _response.rawResponse };
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling GET /audit-events.");
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Fetch a specific audit event by ID.
     *
     * @param {string} auditEventId - A unique identifier associated with the audit event you wish to retrieve
     * @param {AuditEvents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auditEvents.get("audit-event-id")
     */
    public get(
        auditEventId: string,
        requestOptions?: AuditEvents.RequestOptions,
    ): core.HttpResponsePromise<Courier.AuditEvent> {
        return core.HttpResponsePromise.fromPromise(this.__get(auditEventId, requestOptions));
    }

    private async __get(
        auditEventId: string,
        requestOptions?: AuditEvents.RequestOptions,
    ): Promise<core.WithRawResponse<Courier.AuditEvent>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/audit-events/${encodeURIComponent(auditEventId)}`,
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
            return { data: _response.body as Courier.AuditEvent, rawResponse: _response.rawResponse };
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
                throw new errors.CourierTimeoutError(
                    "Timeout exceeded when calling GET /audit-events/{audit-event-id}.",
                );
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
