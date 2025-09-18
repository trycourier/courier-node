// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Returns a new access token.
   */
  issueToken(body: AuthIssueTokenParams, options?: RequestOptions): APIPromise<AuthIssueTokenResponse> {
    return this._client.post('/auth/issue-token', { body, ...options });
  }
}

export interface AuthIssueTokenResponse {
  token?: string | null;
}

export interface AuthIssueTokenParams {
  expires_in: string;

  scope:
    | 'read:preferences'
    | 'write:preferences'
    | 'read:user-tokens'
    | 'write:user-tokens'
    | 'read:brands'
    | 'write:brands'
    | 'read:brands{:id}'
    | 'write:brands{:id}'
    | 'write:track'
    | 'inbox:read:messages'
    | 'inbox:write:messages'
    | 'inbox:write:event'
    | 'inbox:write:events'
    | 'user_id:$YOUR_USER_ID';
}

export declare namespace Auth {
  export {
    type AuthIssueTokenResponse as AuthIssueTokenResponse,
    type AuthIssueTokenParams as AuthIssueTokenParams,
  };
}
