// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages/messages';
import {
  MessageGetMessageBuyersParams,
  MessageGetMessageBuyersResponse,
  MessageGetTopMessageParams,
  MessageGetTopMessageResponse,
  Messages,
} from './messages/messages';

export class Engagement extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

Engagement.Messages = Messages;

export declare namespace Engagement {
  export {
    Messages as Messages,
    type MessageGetMessageBuyersResponse as MessageGetMessageBuyersResponse,
    type MessageGetTopMessageResponse as MessageGetTopMessageResponse,
    type MessageGetMessageBuyersParams as MessageGetMessageBuyersParams,
    type MessageGetTopMessageParams as MessageGetTopMessageParams,
  };
}
