// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { MessageRestoreParams, Messages } from './messages';

export class Inbox extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

Inbox.Messages = Messages;

export declare namespace Inbox {
  export { Messages as Messages, type MessageRestoreParams as MessageRestoreParams };
}
