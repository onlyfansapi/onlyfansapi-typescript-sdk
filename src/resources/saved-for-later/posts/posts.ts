// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import {
  SettingDisableAutomaticPostingResponse,
  SettingEnableOrUpdateAutomaticPostingParams,
  SettingEnableOrUpdateAutomaticPostingResponse,
  SettingRetrieveResponse,
  Settings,
} from './settings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Posts extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * List all posts that are marked as "Save For Later".
   *
   * @example
   * ```ts
   * const posts = await client.savedForLater.posts.list(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { limit: 10, offset: 0 },
   * );
   * ```
   */
  list(account: string, query: PostListParams, options?: RequestOptions): APIPromise<PostListResponse> {
    return this._client.get(path`/api/${account}/saved-for-later/posts`, { query, ...options });
  }
}

export interface PostListResponse {
  _meta?: PostListResponse._Meta;

  data?: PostListResponse.Data;
}

export namespace PostListResponse {
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

        canDelete?: boolean;

        canEdit?: boolean;

        canToggleFavorite?: boolean;

        canViewMedia?: boolean;

        isMarkdownDisabled?: boolean;

        isMediaReady?: boolean;

        isOpened?: boolean;

        isPublishedWithPeriod?: boolean;

        postedAt?: string;

        postedAtPrecise?: string;

        rawText?: string;

        responseType?: string;

        text?: string;

        tipsAmount?: string;
      }
    }
  }
}

export interface PostListParams {
  /**
   * Maximum number of posts to return (default = 10)
   */
  limit: number;

  /**
   * Offset for pagination (default = 0)
   */
  offset: number;
}

Posts.Settings = Settings;

export declare namespace Posts {
  export { type PostListResponse as PostListResponse, type PostListParams as PostListParams };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingDisableAutomaticPostingResponse as SettingDisableAutomaticPostingResponse,
    type SettingEnableOrUpdateAutomaticPostingResponse as SettingEnableOrUpdateAutomaticPostingResponse,
    type SettingEnableOrUpdateAutomaticPostingParams as SettingEnableOrUpdateAutomaticPostingParams,
  };
}
