/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../index";

/**
 * @example
 *     {
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
 *     }
 */
export interface SendMessageRequest {
    /** Defines the message to be delivered */
    message: Courier.Message;
}
