// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListsAPI from './lists/lists';
import {
  ListCreateParams,
  ListCreateResponse,
  ListDeleteParams,
  ListDeleteResponse,
  ListListParams,
  ListListResponse,
  ListRetrieveParams,
  ListRetrieveResponse,
  ListUpdateParams,
  ListUpdateResponse,
  Lists,
} from './lists/lists';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Vault extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);

  /**
   * List media items stored in your vault. See how many likes and how much tips did
   * they get.
   *
   * @example
   * ```ts
   * const vaults = await client.media.vault.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: VaultListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VaultListResponse> {
    return this._client.get(path`/api/${account}/media/vault`, { query, ...options });
  }

  /**
   * Delete one or multiple media from your vault.
   *
   * @example
   * ```ts
   * const vault = await client.media.vault.delete(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { mediaIds: ['string'] },
   * );
   * ```
   */
  delete(
    account: string,
    body: VaultDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VaultDeleteResponse> {
    return this._client.delete(path`/api/${account}/media/vault/delete-media`, { body, ...options });
  }
}

export interface VaultListResponse {
  _meta?: VaultListResponse._Meta;

  data?: VaultListResponse.Data;
}

export namespace VaultListResponse {
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
  }

  export namespace Data {
    export interface List {
      id?: number;

      canView?: boolean;

      convertedToVideo?: boolean;

      counters?: List.Counters;

      createdAt?: string;

      duration?: number;

      files?: List.Files;

      hasCustomPreview?: boolean;

      hasError?: boolean;

      hasPosts?: boolean;

      isReady?: boolean;

      listStates?: Array<List.ListState>;

      releaseForms?: Array<unknown>;

      type?: string;

      videoSources?: List.VideoSources;
    }

    export namespace List {
      export interface Counters {
        likesCount?: number;

        tipsSumm?: number;
      }

      export interface Files {
        full?: Files.Full;

        preview?: string | null;

        squarePreview?: string | null;

        thumb?: string | null;
      }

      export namespace Files {
        export interface Full {
          height?: number;

          size?: number;

          sources?: Array<unknown>;

          url?: string;

          width?: number;
        }
      }

      export interface ListState {
        id?: number;

        canAddMedia?: boolean;

        hasMedia?: boolean;

        name?: string;

        type?: string;
      }

      export interface VideoSources {
        '240'?: string | null;

        '720'?: string | null;
      }
    }
  }
}

export interface VaultDeleteResponse {
  _meta?: VaultDeleteResponse._Meta;

  data?: VaultDeleteResponse.Data;
}

export namespace VaultDeleteResponse {
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

export interface VaultListParams {
  /**
   * Sort the results by a field. Default `recent`
   */
  field?: 'recent' | 'most-liked' | 'highest-tips';

  /**
   * Number of media to return per page (10 - 100). Default: `24`
   */
  limit?: number;

  /**
   * Only show media items from a specific list (category). **Refer to our Media
   * Vault Lists endpoints.**
   */
  list?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;

  /**
   * Optionally, search for a text query.
   */
  query?: string | null;

  /**
   * Sort the results. Default `desc`
   */
  sort?: 'desc' | 'asc';

  /**
   * Filter the results by a media type. Keep empty to show all media.
   */
  type?: 'photo' | 'gif' | 'video' | 'audio';
}

export interface VaultDeleteParams {
  /**
   * Array of media IDs to delete.
   */
  mediaIds: Array<string>;
}

Vault.Lists = Lists;

export declare namespace Vault {
  export {
    type VaultListResponse as VaultListResponse,
    type VaultDeleteResponse as VaultDeleteResponse,
    type VaultListParams as VaultListParams,
    type VaultDeleteParams as VaultDeleteParams,
  };

  export {
    Lists as Lists,
    type ListCreateResponse as ListCreateResponse,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListListResponse as ListListResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListCreateParams as ListCreateParams,
    type ListRetrieveParams as ListRetrieveParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
  };
}
