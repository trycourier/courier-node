export type ComparisonOperator =
  | "EQ"
  | "GT"
  | "GTE"
  | "INCLUDES"
  | "LT"
  | "LTE"
  | "NEQ"
  | "OMIT";

export type LogicalOperator = "AND" | "OR";

export type Operator = ComparisonOperator | LogicalOperator;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

interface IBaseFilterConfig {
  operator: Operator;
}

interface ISingleFilterConfig extends IBaseFilterConfig {
  path: string;
  value: string;
}

interface INestedFilterConfig extends IBaseFilterConfig {
  rules: FilterConfig[];
}

export type FilterConfig = XOR<ISingleFilterConfig, INestedFilterConfig>;

export interface IAudience {
  created_at: string;
  description?: string;
  id: string;
  name?: string;
  filter: FilterConfig;
  updated_at: string;
}

export interface IAudienceMember {
  added_at: string;
  audience_id: string;
  audience_version: number;
  member_id: string;
  reason: string;
}

export interface IAudienceListResponse {
  items: IAudience[];
  paging: {
    cursor: string;
    more: boolean;
  };
}

export interface IAudienceMemberGetResponse {
  audienceMember: IAudienceMember;
}

export interface IAudienceMemberListResponse {
  items: IAudienceMember[];
  paging: {
    cursor: string;
    more: boolean;
  };
}

export interface IAudiencePutResponse {
  audience: IAudience;
}

export interface ICourierClientAudiences {
  delete: (id: string) => Promise<void>;
  get: (id: string) => Promise<IAudience>;
  listAudiences: () => Promise<IAudienceListResponse>;
  listMembers: (id: string) => Promise<IAudienceMemberListResponse>;
  put: (
    audience: Omit<IAudience, "created_at" | "updated_at">
  ) => Promise<IAudience>;
}
