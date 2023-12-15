/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface BrandSettingsInApp {
    borderRadius?: string;
    disableMessageIcon?: boolean;
    fontFamily?: string;
    placement?: Courier.InAppPlacement;
    widgetBackground: Courier.WidgetBackground;
    colors: Courier.BrandColors;
    icons: Courier.Icons;
    preferences: Courier.Preferences;
}