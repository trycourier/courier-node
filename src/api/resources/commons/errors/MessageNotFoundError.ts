/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Courier from "../../..";

export class MessageNotFoundError extends errors.CourierError {
    constructor(body: Courier.MessageNotFound) {
        super({
            message: "MessageNotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, MessageNotFoundError.prototype);
    }
}
