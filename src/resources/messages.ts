// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Attach Tags (Release Forms) to a message that has already been sent. Please
   * note, that this is a "sync" operation - for example, if you provide empty
   * `rfTag` it will remove all existing tags already attached to the message.
   *
   * @example
   * ```ts
   * const response = await client.messages.attachTags(
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  attachTags(
    messageID: string,
    params: MessageAttachTagsParams,
    options?: RequestOptions,
  ): APIPromise<MessageAttachTagsResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/messages/${messageID}/attach-tags`, { body, ...options });
  }
}

export interface MessageAttachTagsResponse {
  _meta?: MessageAttachTagsResponse._Meta;

  data?: MessageAttachTagsResponse.Data;
}

export namespace MessageAttachTagsResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;

    _rate_limits?: _Meta._RateLimits;
  }

  export namespace _Meta {
    export interface _Cache {
      is_cached?: boolean;

      note?: string;
    }

    export interface _Credits {
      balance?: number;

      note?: string;

      used?: number;
    }

    export interface _RateLimits {
      limit_day?: number;

      limit_minute?: number;

      remaining_day?: number;

      remaining_minute?: number;
    }
  }

  export interface Data {
    success?: boolean;
  }
}

export interface MessageAttachTagsParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of OnlyFans Release Form Guest IDs to tag in your message
   */
  rfGuest?: string;

  /**
   * Body param: Array of OnlyFans Release Form Partners IDs to tag in your message
   */
  rfPartner?: string;

  /**
   * Body param: Array of OnlyFans Creator User IDs to tag in your message
   */
  rfTag?: string;
}

export declare namespace Messages {
  export {
    type MessageAttachTagsResponse as MessageAttachTagsResponse,
    type MessageAttachTagsParams as MessageAttachTagsParams,
  };
}
