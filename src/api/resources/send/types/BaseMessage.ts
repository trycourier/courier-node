/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface BaseMessage {
    /**
     * An arbitrary object that includes any data you want to pass to the message.
     * The data will populate the corresponding template or elements variables.
     */
    data?: Courier.MessageData;
    brand_id?: string;
    /** "Define run-time configuration for one or more channels. If you don't specify channels, the default configuration for each channel will be used. Valid ChannelId's are: email, sms, push, inbox, direct_message, banner, and webhook." */
    channels?: Courier.MessageChannels;
    /** Context to load with this recipient. Will override any context set on message.context. */
    context?: Courier.MessageContext;
    /** Metadata such as utm tracking attached with the notification through this channel. */
    metadata?: Courier.MessageMetadata;
    /** An object whose keys are valid provider identifiers which map to an object. */
    providers?: Courier.MessageProviders;
    routing?: Courier.Routing;
    /** Time in ms to attempt the channel before failing over to the next available channel. */
    timeout?: Courier.Timeout;
    /** Defines the time to wait before delivering the message. */
    delay?: Courier.Delay;
    /**
     * "Expiry allows you to set an absolute or relative time in which a message expires.
     * Note: This is only valid for the Courier Inbox channel as of 12-08-2022."
     */
    expiry?: Courier.Expiry;
}