/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface AutomationV2SendStep extends Courier.AutomationStep {
    action: "send";
    message: Courier.Message;
}