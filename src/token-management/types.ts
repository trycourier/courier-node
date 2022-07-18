export interface IUserToken {
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

export interface IGetUserTokenResponse extends IUserToken {
  status: "active" | "unknown" | "failed" | "revoked";
  status_reason?: string;
}

export interface IPutUserTokensOpts {
  user_id: string;
  tokens: IUserToken[];
}

export interface IPutUserTokenOpts {
  user_id: string;
  token: IUserToken;
}

export interface IPatchUserTokenOpts {
  user_id: string;
  token: string;
  patch: Array<{
    op: "replace" | "add" | "remove" | "copy" | "move" | "test";
    path: string;
    value?: string;
  }>;
}

export interface IGetUserTokenOpts {
  user_id: string;
  token: string;
}

export interface IGetUserTokensOpts {
  user_id: string;
}

export interface IDeleteUserTokenOpts {
  user_id: string;
  token: string;
}
