/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Reason =
    /**
     * The recipient did not receive the notification because of a condition that passed. */
    | "FILTERED"
    /**
     * The notification did not contain any valid channels. */
    | "NO_CHANNELS"
    /**
     * The notification did not contain a configured provider for a channel. */
    | "NO_PROVIDERS"
    /**
     * The Integration provider had an error when sending a notification. */
    | "PROVIDER_ERROR"
    /**
     * The notification hasn't been published yet. */
    | "UNPUBLISHED"
    /**
     * The recipient did not receive the notification because they chose to unsubscribe from it. */
    | "UNSUBSCRIBED";
export const Reason = {
    Filtered: "FILTERED",
    NoChannels: "NO_CHANNELS",
    NoProviders: "NO_PROVIDERS",
    ProviderError: "PROVIDER_ERROR",
    Unpublished: "UNPUBLISHED",
    Unsubscribed: "UNSUBSCRIBED",
} as const;
