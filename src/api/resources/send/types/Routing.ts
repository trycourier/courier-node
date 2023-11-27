/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

/**
 * Allows you to customize which channel(s) Courier will potentially deliver the message.
 * If no routing key is specified, Courier will use the default routing configuration or
 * routing defined by the template.
 *
 */
export interface Routing {
    method: Courier.RoutingMethod;
    /**
     * A list of channels or providers to send the message through. Can also recursively define
     * sub-routing methods, which can be useful for defining advanced push notification
     * delivery strategies.
     *
     */
    channels: Courier.RoutingChannel[];
}
