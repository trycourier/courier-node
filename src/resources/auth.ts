// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Returns a new access token.
   *
   * @example
   * ```ts
   * const response = await client.auth.issueToken({
   *   expires_in: '$YOUR_NUMBER days',
   *   scope:
   *     'user_id:$YOUR_USER_ID write:user-tokens inbox:read:messages inbox:write:events read:preferences write:preferences read:brands',
   * });
   * ```
   */
  issueToken(body: AuthIssueTokenParams, options?: RequestOptions): APIPromise<AuthIssueTokenResponse> {
    return this._client.post('/auth/issue-token', { body, ...options });
  }
}

export interface AuthIssueTokenResponse {
  token: string;
}

export interface AuthIssueTokenParams {
  /**
   * Duration for token expiration. Accepts various time formats:
   *
   * - "2 hours" - 2 hours from now
   * - "1d" - 1 day
   * - "3 days" - 3 days
   * - "10h" - 10 hours
   * - "2.5 hrs" - 2.5 hours
   * - "1m" - 1 minute
   * - "5s" - 5 seconds
   * - "1y" - 1 year
   */
  expires_in: string;

  /**
   * Available scopes:
   *
   * - `user_id:<user-id>` - Defines which user the token will be scoped to. Multiple
   *   can be listed if needed. Ex `user_id:pigeon user_id:bluebird`.
   * - `read:messages` - Read messages.
   * - `read:user-tokens` - Read user push tokens.
   * - `write:user-tokens` - Write user push tokens.
   * - `read:brands[:<brand_id>]` - Read brands, optionally restricted to a specific
   *   brand_id. Examples `read:brands`, `read:brands:my_brand`.
   * - `write:brands[:<brand_id>]` - Write brands, optionally restricted to a
   *   specific brand_id. Examples `write:brands`, `write:brands:my_brand`.
   * - `inbox:read:messages` - Read inbox messages.
   * - `inbox:write:events` - Write inbox events, such as mark message as read.
   * - `read:preferences` - Read user preferences.
   * - `write:preferences` - Write user preferences. Example:
   *   `user_id:user123 write:user-tokens inbox:read:messages inbox:write:events read:preferences write:preferences read:brands`
   */
  scope: string;
}

export declare namespace Auth {
  export {
    type AuthIssueTokenResponse as AuthIssueTokenResponse,
    type AuthIssueTokenParams as AuthIssueTokenParams,
  };
}
