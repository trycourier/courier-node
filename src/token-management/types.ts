export interface UserToken {
  token: string;

  provider_key: "firebase-fcm" | "apn" | "expo" | "onesignal";

  /** ISO 8601 Date. Set to false to disable expiration */
  expiry_date?: string | false;

  /** Additional properties to be passed to provider or to be generically associated with the token */
  properties?: { [key: string]: any };

  device?: {
    app_id?: string;
    ad_id?: string;
    device_id?: string;
    platform?: string;
    manufacturer?: string;
    model?: string;
  };

  tracking?: {
    os_version?: string;
    ip?: string;
    lat?: string;
    long?: string;
  };
}

export interface GetUserTokenResponse extends UserToken {
  status: "active" | "unknown" | "failed" | "revoked";
  status_reason?: string;
}

export interface PutUserTokensOpts {
  user_id: string;
  tokens: UserToken[];
}

export interface PutUserTokenOpts {
  user_id: string;
  token: UserToken;
}

export interface PatchUserTokenOpts {
  user_id: string;
  token: string;
  patch: {
    op: "replace" | "add" | "remove" | "copy" | "move" | "test";
    path: string;
    value?: string;
  }[];
}

export interface GetUserTokenOpts {
  user_id: string;
  token: string;
}

export interface GetUserTokensOpts {
  user_id: string;
}

export interface DeleteUserTokenOpts {
  user_id: string;
  token: string;
}
