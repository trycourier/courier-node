/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

export interface TemplateMessage extends Courier.BaseMessage, Courier.BaseMessageSendTo {
    /**
     * The id of the notification template to be rendered and sent to the recipient(s).
     * This field or the content field must be supplied.
     */
    template: string;
}
