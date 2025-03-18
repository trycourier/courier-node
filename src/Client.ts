/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Courier from "./api/index";
import urlJoin from "url-join";
import * as errors from "./errors/index";
import { Audiences } from "./api/resources/audiences/client/Client";
import { AuditEvents } from "./api/resources/auditEvents/client/Client";
import { AuthTokens } from "./api/resources/authTokens/client/Client";
import { Automations } from "./api/resources/automations/client/Client";
import { Brands } from "./api/resources/brands/client/Client";
import { Bulk } from "./api/resources/bulk/client/Client";
import { Inbound } from "./api/resources/inbound/client/Client";
import { Lists } from "./api/resources/lists/client/Client";
import { Messages } from "./api/resources/messages/client/Client";
import { Notifications } from "./api/resources/notifications/client/Client";
import { Profiles } from "./api/resources/profiles/client/Client";
import { Templates } from "./api/resources/templates/client/Client";
import { Tenants } from "./api/resources/tenants/client/Client";
import { Translations } from "./api/resources/translations/client/Client";
import { Users } from "./api/resources/users/client/Client";

export declare namespace CourierClient {
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

export class CourierClient {
    protected _audiences: Audiences | undefined;
    protected _auditEvents: AuditEvents | undefined;
    protected _authTokens: AuthTokens | undefined;
    protected _automations: Automations | undefined;
    protected _brands: Brands | undefined;
    protected _bulk: Bulk | undefined;
    protected _inbound: Inbound | undefined;
    protected _lists: Lists | undefined;
    protected _messages: Messages | undefined;
    protected _notifications: Notifications | undefined;
    protected _profiles: Profiles | undefined;
    protected _templates: Templates | undefined;
    protected _tenants: Tenants | undefined;
    protected _translations: Translations | undefined;
    protected _users: Users | undefined;

    constructor(protected readonly _options: CourierClient.Options = {}) {}

    public get audiences(): Audiences {
        return (this._audiences ??= new Audiences(this._options));
    }

    public get auditEvents(): AuditEvents {
        return (this._auditEvents ??= new AuditEvents(this._options));
    }

    public get authTokens(): AuthTokens {
        return (this._authTokens ??= new AuthTokens(this._options));
    }

    public get automations(): Automations {
        return (this._automations ??= new Automations(this._options));
    }

    public get brands(): Brands {
        return (this._brands ??= new Brands(this._options));
    }

    public get bulk(): Bulk {
        return (this._bulk ??= new Bulk(this._options));
    }

    public get inbound(): Inbound {
        return (this._inbound ??= new Inbound(this._options));
    }

    public get lists(): Lists {
        return (this._lists ??= new Lists(this._options));
    }

    public get messages(): Messages {
        return (this._messages ??= new Messages(this._options));
    }

    public get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this._options));
    }

    public get profiles(): Profiles {
        return (this._profiles ??= new Profiles(this._options));
    }

    public get templates(): Templates {
        return (this._templates ??= new Templates(this._options));
    }

    public get tenants(): Tenants {
        return (this._tenants ??= new Tenants(this._options));
    }

    public get translations(): Translations {
        return (this._translations ??= new Translations(this._options));
    }

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    /**
     * Use the send API to send a message to one or more recipients.
     *
     * @param {Courier.SendMessageRequest} request
     * @param {CourierClient.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.send({
     *         message: {
     *             data: undefined,
     *             brand_id: undefined,
     *             channels: undefined,
     *             context: undefined,
     *             metadata: undefined,
     *             preferences: undefined,
     *             providers: undefined,
     *             routing: undefined,
     *             timeout: undefined,
     *             delay: undefined,
     *             expiry: undefined,
     *             to: undefined,
     *             content: {
     *                 version: "version",
     *                 brand: undefined,
     *                 elements: [{
     *                         type: "text",
     *                         channels: undefined,
     *                         ref: undefined,
     *                         if: undefined,
     *                         loop: undefined,
     *                         content: "content",
     *                         align: "left",
     *                         text_style: undefined,
     *                         color: undefined,
     *                         bold: undefined,
     *                         italic: undefined,
     *                         strikethrough: undefined,
     *                         underline: undefined,
     *                         locales: undefined,
     *                         format: undefined
     *                     }, {
     *                         type: "text",
     *                         channels: undefined,
     *                         ref: undefined,
     *                         if: undefined,
     *                         loop: undefined,
     *                         content: "content",
     *                         align: "left",
     *                         text_style: undefined,
     *                         color: undefined,
     *                         bold: undefined,
     *                         italic: undefined,
     *                         strikethrough: undefined,
     *                         underline: undefined,
     *                         locales: undefined,
     *                         format: undefined
     *                     }]
     *             }
     *         }
     *     })
     */
    public async send(
        request: Courier.SendMessageRequest,
        requestOptions?: CourierClient.IdempotentRequestOptions,
    ): Promise<Courier.SendMessageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CourierEnvironment.Production,
                "/send",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.4.0-alpha0",
                "User-Agent": "@trycourier/courier/6.4.0-alpha0",
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
            return _response.body as Courier.SendMessageResponse;
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
                throw new errors.CourierTimeoutError("Timeout exceeded when calling POST /send.");
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
