/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AddUserToSingleTenantsParamsProfile {
    title: string;
    /** Email Address */
    email: string;
    /** A valid phone number */
    phone_number: string;
    /** The user's preferred ISO 639-1 language code. */
    locale: string;
    /** Additional provider specific fields may be specified. */
    additional_fields: Record<string, any>;
}