/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

/**
 * Renders a quote block.
 */
export interface ElementalQuoteNode extends Courier.ElementalBaseNode {
    /** The text value of the quote. */
    content: string;
    /** Alignment of the quote. */
    align?: Courier.IAlignment;
    /** CSS border color property. For example, `#fff` */
    borderColor?: string;
    text_style: Courier.TextStyle;
    /** Region specific content. See [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/) for more details. */
    locales?: Courier.Locales;
}
