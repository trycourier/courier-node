/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Courier from "../../..";

export class NotFoundError extends errors.CourierError {
    constructor(body: Courier.NotFound) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
