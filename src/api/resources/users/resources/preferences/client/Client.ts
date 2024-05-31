/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Courier from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Preferences {
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

export class Preferences {
    constructor(protected readonly _options: Preferences.Options = {}) {}

    /**
     * Fetch all user preferences.
     *
     * @param {string} userId - A unique identifier associated with the user whose preferences you wish to retrieve.
     * @param {Preferences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.users.preferences.list("string")
     */
    public async list(
        userId: string,
        requestOptions?: Preferences.RequestOptions
    ): Promise<Courier.users.UserPreferencesListResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/preferences`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "v6.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.users.UserPreferencesListResponse;
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
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetch user preferences for a specific subscription topic.
     *
     * @param {string} userId - A unique identifier associated with the user whose preferences you wish to retrieve.
     * @param {string} topicId - A unique identifier associated with a subscription topic.
     * @param {Preferences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await courier.users.preferences.get("string", "string")
     */
    public async get(
        userId: string,
        topicId: string,
        requestOptions?: Preferences.RequestOptions
    ): Promise<Courier.users.UserPreferencesGetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/preferences/${encodeURIComponent(topicId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "v6.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.users.UserPreferencesGetResponse;
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
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update or Create user preferences for a specific subscription topic.
     *
     * @param {string} userId - A unique identifier associated with the user whose preferences you wish to retrieve.
     * @param {string} topicId - A unique identifier associated with a subscription topic.
     * @param {Courier.users.UserPreferencesUpdateParams} request
     * @param {Preferences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.users.preferences.update("abc-123", "74Q4QGFBEX481DP6JRPMV751H4XT", {
     *         topic: {
     *             status: Courier.PreferenceStatus.OptedIn,
     *             has_custom_routing: true,
     *             custom_routing: [Courier.ChannelClassification.Inbox, Courier.ChannelClassification.Email]
     *         }
     *     })
     */
    public async update(
        userId: string,
        topicId: string,
        request: Courier.users.UserPreferencesUpdateParams,
        requestOptions?: Preferences.RequestOptions
    ): Promise<Courier.users.UserPreferencesUpdateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/users/${encodeURIComponent(userId)}/preferences/${encodeURIComponent(topicId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "v6.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.users.UserPreferencesUpdateResponse;
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
