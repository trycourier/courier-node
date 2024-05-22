/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

/**
 * Allows the user to execute an action. Can be a button or a link.
 */
export interface ElementalActionNode extends Courier.ElementalBaseNode {
    /** The text content of the action shown to the user. */
    content: string;
    /** The target URL of the action. */
    href: string;
    /** A unique id used to identify the action when it is executed. */
    action_id?: string;
    /** The alignment of the action button. Defaults to "center". */
    align?: Courier.IAlignment;
    /** The background color of the action button. */
    background_color?: string;
    /** Defaults to `button`. */
    style?: Courier.IActionButtonStyle;
    /** Region specific content. See [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/) for more details. */
    locales?: Courier.Locales;
}
