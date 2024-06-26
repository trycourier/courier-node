/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

/**
 * Allows you to group elements together. This can be useful when used in combination with "if" or "loop". See [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/) for more details.
 */
export interface ElementalGroupNode extends Courier.ElementalBaseNode {
    /** Sub elements to render. */
    elements: Courier.ElementalNode[];
}
