/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

export type ElementalNode =
    | Courier.ElementalNode.Text
    | Courier.ElementalNode.Meta
    | Courier.ElementalNode.Channel
    | Courier.ElementalNode.Image
    | Courier.ElementalNode.Action
    | Courier.ElementalNode.Divider
    | Courier.ElementalNode.Group
    | Courier.ElementalNode.Quote;

export declare namespace ElementalNode {
    interface Text extends Courier.ElementalTextNode {
        type: "text";
    }

    interface Meta extends Courier.ElementalMetaNode {
        type: "meta";
    }

    interface Channel extends Courier.ElementalChannelNode {
        type: "channel";
    }

    interface Image extends Courier.ElementalImageNode {
        type: "image";
    }

    interface Action extends Courier.ElementalActionNode {
        type: "action";
    }

    interface Divider extends Courier.ElementalDividerNode {
        type: "divider";
    }

    interface Group extends Courier.ElementalGroupNode {
        type: "group";
    }

    interface Quote extends Courier.ElementalQuoteNode {
        type: "quote";
    }
}
