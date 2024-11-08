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
    interface Options {
        environment?: core.Supplier<environments.CourierEnvironment | string>;
        authorizationToken?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }

    interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey?: string | undefined;
        idempotencyExpiry?: string | undefined;
    }
}

export class CourierClient {
    constructor(protected readonly _options: CourierClient.Options = {}) {}

    /**
     * Use the send API to send a message to one or more recipients.
     *
     * @param {Courier.SendMessageRequest} request
     * @param {CourierClient.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.send({
     *         message: {
     *             content: {
     *                 version: "string",
     *                 brand: {
     *                     "key": "value"
     *                 },
     *                 elements: [{
     *                         type: "text"
     *                     }]
     *             },
     *             data: {
     *                 "string": {
     *                     "key": "value"
     *                 }
     *             },
     *             brand_id: "string",
     *             channels: {
     *                 "string": {
     *                     brand_id: undefined,
     *                     providers: undefined,
     *                     routing_method: undefined,
     *                     if: undefined,
     *                     timeouts: undefined,
     *                     override: undefined,
     *                     metadata: undefined
     *                 }
     *             },
     *             context: {
     *                 tenant_id: "string"
     *             },
     *             metadata: {
     *                 event: "string",
     *                 tags: [],
     *                 utm: {
     *                     source: undefined,
     *                     medium: undefined,
     *                     campaign: undefined,
     *                     term: undefined,
     *                     content: undefined
     *                 },
     *                 trace_id: "string"
     *             },
     *             preferences: {
     *                 subscription_topic_id: "string"
     *             },
     *             providers: {
     *                 "string": {
     *                     override: undefined,
     *                     if: undefined,
     *                     timeouts: undefined,
     *                     metadata: undefined
     *                 }
     *             },
     *             routing: {
     *                 method: Courier.RoutingMethod.All,
     *                 channels: [{
     *                         channel: "string",
     *                         config: undefined,
     *                         method: undefined,
     *                         providers: undefined,
     *                         if: undefined
     *                     }]
     *             },
     *             timeout: {
     *                 provider: {},
     *                 channel: {},
     *                 message: 1,
     *                 escalation: 1,
     *                 criteria: Courier.Criteria.NoEscalation
     *             },
     *             delay: {
     *                 duration: 1,
     *                 until: "string"
     *             },
     *             expiry: {
     *                 expires_at: "string",
     *                 expires_in: "string"
     *             },
     *             to: {
     *                 audience_id: "string",
     *                 data: {},
     *                 filters: []
     *             }
     *         }
     *     })
     */
    public async send(
        request: Courier.SendMessageRequest,
        requestOptions?: CourierClient.IdempotentRequestOptions
    ): Promise<Courier.SendMessageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                "/send"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "v6.3.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null ? requestOptions?.idempotencyExpiry : undefined,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _audiences: Audiences | undefined;

    public get audiences(): Audiences {
        return (this._audiences ??= new Audiences(this._options));
    }

    protected _auditEvents: AuditEvents | undefined;

    public get auditEvents(): AuditEvents {
        return (this._auditEvents ??= new AuditEvents(this._options));
    }

    protected _authTokens: AuthTokens | undefined;

    public get authTokens(): AuthTokens {
        return (this._authTokens ??= new AuthTokens(this._options));
    }

    protected _automations: Automations | undefined;

    public get automations(): Automations {
        return (this._automations ??= new Automations(this._options));
    }

    protected _brands: Brands | undefined;

    public get brands(): Brands {
        return (this._brands ??= new Brands(this._options));
    }

    protected _bulk: Bulk | undefined;

    public get bulk(): Bulk {
        return (this._bulk ??= new Bulk(this._options));
    }

    protected _inbound: Inbound | undefined;

    public get inbound(): Inbound {
        return (this._inbound ??= new Inbound(this._options));
    }

    protected _lists: Lists | undefined;

    public get lists(): Lists {
        return (this._lists ??= new Lists(this._options));
    }

    protected _messages: Messages | undefined;

    public get messages(): Messages {
        return (this._messages ??= new Messages(this._options));
    }

    protected _notifications: Notifications | undefined;

    public get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this._options));
    }

    protected _profiles: Profiles | undefined;

    public get profiles(): Profiles {
        return (this._profiles ??= new Profiles(this._options));
    }

    protected _templates: Templates | undefined;

    public get templates(): Templates {
        return (this._templates ??= new Templates(this._options));
    }

    protected _tenants: Tenants | undefined;

    public get tenants(): Tenants {
        return (this._tenants ??= new Tenants(this._options));
    }

    protected _translations: Translations | undefined;

    public get translations(): Translations {
        return (this._translations ??= new Translations(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
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
