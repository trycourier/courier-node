// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ChecksAPI from './checks';
import {
  CheckDeleteParams,
  CheckListParams,
  CheckListResponse,
  CheckUpdateParams,
  CheckUpdateResponse,
  Checks,
} from './checks';
import * as DraftAPI from './draft';
import { Draft } from './draft';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notifications extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);
  checks: ChecksAPI.Checks = new ChecksAPI.Checks(this._client);

  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationListResponse> {
    return this._client.get('/notifications', { query, ...options });
  }

  retrieveContent(id: string, options?: RequestOptions): APIPromise<NotificationGetContent> {
    return this._client.get(path`/notifications/${id}/content`, options);
  }
}

export interface BaseCheck {
  id: string;

  status: 'RESOLVED' | 'FAILED' | 'PENDING';

  type: 'custom';
}

export interface Check extends BaseCheck {
  updated: number;
}

export interface NotificationGetContent {
  blocks?: Array<NotificationGetContent.Block> | null;

  channels?: Array<NotificationGetContent.Channel> | null;

  checksum?: string | null;
}

export namespace NotificationGetContent {
  export interface Block {
    id: string;

    type: 'action' | 'divider' | 'image' | 'jsonnet' | 'list' | 'markdown' | 'quote' | 'template' | 'text';

    alias?: string | null;

    checksum?: string | null;

    content?: string | Block.NotificationContentHierarchy | null;

    context?: string | null;

    locales?: { [key: string]: string | Block.NotificationContentHierarchy } | null;
  }

  export namespace Block {
    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }

    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }
  }

  export interface Channel {
    id: string;

    checksum?: string | null;

    content?: Channel.Content | null;

    locales?: { [key: string]: Channel.Locales } | null;

    type?: string | null;
  }

  export namespace Channel {
    export interface Content {
      subject?: string | null;

      title?: string | null;
    }

    export interface Locales {
      subject?: string | null;

      title?: string | null;
    }
  }
}

export interface NotificationListResponse {
  paging: Shared.Paging;

  results: Array<NotificationListResponse.Result>;
}

export namespace NotificationListResponse {
  export interface Result {
    id: string;

    created_at: number;

    note: string;

    routing: Shared.MessageRouting;

    topic_id: string;

    updated_at: number;

    tags?: Result.Tags | null;

    title?: string | null;
  }

  export namespace Result {
    export interface Tags {
      data: Array<Tags.Data>;
    }

    export namespace Tags {
      export interface Data {
        id: string;

        name: string;
      }
    }
  }
}

export interface NotificationListParams {
  cursor?: string | null;

  /**
   * Retrieve the notes from the Notification template settings.
   */
  notes?: boolean | null;
}

Notifications.Draft = Draft;
Notifications.Checks = Checks;

export declare namespace Notifications {
  export {
    type BaseCheck as BaseCheck,
    type Check as Check,
    type NotificationGetContent as NotificationGetContent,
    type NotificationListResponse as NotificationListResponse,
    type NotificationListParams as NotificationListParams,
  };

  export { Draft as Draft };

  export {
    Checks as Checks,
    type CheckUpdateResponse as CheckUpdateResponse,
    type CheckListResponse as CheckListResponse,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
    type CheckDeleteParams as CheckDeleteParams,
  };
}
