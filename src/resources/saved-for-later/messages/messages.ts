// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import {
  SettingDisableAutomaticMessagingResponse,
  SettingEnableOrUpdateAutomaticMessagingParams,
  SettingEnableOrUpdateAutomaticMessagingResponse,
  SettingRetrieveResponse,
  Settings,
} from './settings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * List all messages that are marked as "Save For Later".
   *
   * @example
   * ```ts
   * const messages = await client.savedForLater.messages.list(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { limit: 10, offset: 0 },
   * );
   * ```
   */
  list(account: string, query: MessageListParams, options?: RequestOptions): APIPromise<MessageListResponse> {
    return this._client.get(path`/api/${account}/saved-for-later/messages`, { query, ...options });
  }
}

export interface MessageListResponse {
  _meta?: MessageListResponse._Meta;

  data?: MessageListResponse.Data;
}

export namespace MessageListResponse {
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
    hasMore?: boolean;

    list?: Array<Data.List>;

    syncInProcess?: boolean;
  }

  export namespace Data {
    export interface List {
      id?: number;

      createdDateTime?: string;

      entity?: List.Entity;

      publishDateTime?: string | null;

      type?: string;
    }

    export namespace List {
      export interface Entity {
        id?: number;

        cancelSeconds?: number;

        canPurchase?: boolean;

        canUnsendQueue?: boolean;

        changedAt?: string;

        createdAt?: string;

        giphyId?: string | null;

        isFree?: boolean;

        isFromQueue?: boolean;

        isLiked?: boolean;

        isMarkdownDisabled?: boolean;

        isMediaReady?: boolean;

        isNew?: boolean;

        isOpened?: boolean;

        isTip?: boolean;

        lockedText?: boolean;

        media?: Array<unknown>;

        mediaCount?: number;

        previews?: Array<unknown>;

        price?: number;

        queueId?: number;

        rawText?: string;

        releaseForms?: Array<unknown>;

        responseType?: string;

        scheduledAt?: string | null;

        sentRulesExtra?: string;

        sentRulesType?: string;

        text?: string;

        unsendSecondsQueue?: number;

        userIds?: Array<string>;
      }
    }
  }
}

export interface MessageListParams {
  /**
   * Maximum number of messages to return (default = 10)
   */
  limit: number;

  /**
   * Offset for pagination (default = 0)
   */
  offset: number;
}

Messages.Settings = Settings;

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse, type MessageListParams as MessageListParams };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingDisableAutomaticMessagingResponse as SettingDisableAutomaticMessagingResponse,
    type SettingEnableOrUpdateAutomaticMessagingResponse as SettingEnableOrUpdateAutomaticMessagingResponse,
    type SettingEnableOrUpdateAutomaticMessagingParams as SettingEnableOrUpdateAutomaticMessagingParams,
  };
}
