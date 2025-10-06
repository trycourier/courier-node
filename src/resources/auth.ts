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
  token: string;
}

export interface AuthIssueTokenParams {
  expires_in: string;

  scope: string;
}

export declare namespace Auth {
  export {
    type AuthIssueTokenResponse as AuthIssueTokenResponse,
    type AuthIssueTokenParams as AuthIssueTokenParams,
  };
}
