/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

/**
 * The message property has the following primary top-level properties. They define the destination and content of the message.
 * Additional advanced configuration fields [are defined below](https://www.courier.com/docs/reference/send/message/#other-message-properties).
 */
export interface InboundBulkContentMessage extends Courier.BaseMessage {
    /**
     * Describes the content of the message in a way that will work for email, push,
     * chat, or any channel. Either this or template must be specified.
     */
    content: Courier.Content;
}
