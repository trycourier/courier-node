/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Inbound {
    interface Options {
        environment?: core.Supplier<environments.CourierEnvironment | string>;
        authorizationToken?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Inbound {
    constructor(protected readonly _options: Inbound.Options = {}) {}

    /**
     * @param {Courier.InboundTrackEvent} request
     * @param {Inbound.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     * @throws {@link Courier.ConflictError}
     *
     * @example
     *     await courier.inbound.track({
     *         event: "New Order Placed",
     *         messageId: "4c62c457-b329-4bea-9bfc-17bba86c393f",
     *         userId: "1234",
     *         type: "track",
     *         properties: {
     *             "order_id": 123,
     *             "total_orders": 5,
     *             "last_order_id": 122
     *         }
     *     })
     */
    public async track(
        request: Courier.InboundTrackEvent,
        requestOptions?: Inbound.RequestOptions
    ): Promise<Courier.TrackAcceptedResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                "/inbound/courier"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "v6.2.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.TrackAcceptedResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                case 409:
                    throw new Courier.ConflictError(_response.error.body as Courier.Conflict);
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
                throw new errors.CourierTimeoutError();
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
                message: "Please specify COURIER_AUTH_TOKEN when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
