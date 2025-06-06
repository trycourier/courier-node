/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Automations {
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

export class Automations {
    constructor(protected readonly _options: Automations.Options = {}) {}

    /**
     * Invoke an automation run from an automation template.
     *
     * @param {string} templateId - A unique identifier representing the automation template to be invoked. This could be the Automation Template ID or the Automation Template Alias.
     * @param {Courier.AutomationInvokeParams} request
     * @param {Automations.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.automations.invokeAutomationTemplate("templateId", {
     *         brand: undefined,
     *         data: undefined,
     *         profile: undefined,
     *         recipient: undefined,
     *         template: undefined
     *     })
     */
    public invokeAutomationTemplate(
        templateId: string,
        request: Courier.AutomationInvokeParams,
        requestOptions?: Automations.IdempotentRequestOptions,
    ): core.HttpResponsePromise<Courier.AutomationInvokeResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__invokeAutomationTemplate(templateId, request, requestOptions),
        );
    }

    private async __invokeAutomationTemplate(
        templateId: string,
        request: Courier.AutomationInvokeParams,
        requestOptions?: Automations.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<Courier.AutomationInvokeResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                `/automations/${encodeURIComponent(templateId)}/invoke`,
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
            return { data: _response.body as Courier.AutomationInvokeResponse, rawResponse: _response.rawResponse };
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
                    "Timeout exceeded when calling POST /automations/{templateId}/invoke.",
                );
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Invoke an ad hoc automation run. This endpoint accepts a JSON payload with a series of automation steps. For information about what steps are available, checkout the ad hoc automation guide [here](https://www.courier.com/docs/automations/steps/).
     *
     * @param {Courier.AutomationAdHocInvokeParams} request
     * @param {Automations.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.automations.invokeAdHocAutomation({
     *         data: {
     *             "name": "Foo"
     *         },
     *         profile: {
     *             "tenant_id": "abc-123"
     *         },
     *         recipient: "user-yes",
     *         automation: {
     *             cancelation_token: "delay-send--user-yes--abc-123",
     *             steps: [{
     *                     action: "delay",
     *                     until: "20240408T080910.123"
     *                 }, {
     *                     action: "send",
     *                     template: "64TP5HKPFTM8VTK1Y75SJDQX9JK0"
     *                 }]
     *         }
     *     })
     */
    public invokeAdHocAutomation(
        request: Courier.AutomationAdHocInvokeParams,
        requestOptions?: Automations.IdempotentRequestOptions,
    ): core.HttpResponsePromise<Courier.AutomationInvokeResponse> {
        return core.HttpResponsePromise.fromPromise(this.__invokeAdHocAutomation(request, requestOptions));
    }

    private async __invokeAdHocAutomation(
        request: Courier.AutomationAdHocInvokeParams,
        requestOptions?: Automations.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<Courier.AutomationInvokeResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                "/automations/invoke",
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
            return { data: _response.body as Courier.AutomationInvokeResponse, rawResponse: _response.rawResponse };
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling POST /automations/invoke.");
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
