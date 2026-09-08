// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MediaAPI from './media';
import {
  Media as MediaAPIMedia,
  MediaAddParams,
  MediaAddResponse,
  MediaRemoveParams,
  MediaRemoveResponse,
} from './media';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Lists extends APIResource {
  media: MediaAPI.Media = new MediaAPI.Media(this._client);

  /**
   * Create a new Vault list.
   *
   * @example
   * ```ts
   * const list = await client.media.vault.lists.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { name: 'My new list' },
   * );
   * ```
   */
  create(account: string, body: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    return this._client.post(path`/api/${account}/media/vault/lists`, { body, ...options });
  }

  /**
   * Show a Vault list.
   *
   * @example
   * ```ts
   * const list = await client.media.vault.lists.retrieve(
   *   '123',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    listID: string,
    params: ListRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ListRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/media/vault/lists/${listID}`, options);
  }

  /**
   * Rename a Vault list.
   *
   * @example
   * ```ts
   * const list = await client.media.vault.lists.update('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   name: 'My renamed list',
   * });
   * ```
   */
  update(listID: string, params: ListUpdateParams, options?: RequestOptions): APIPromise<ListUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/media/vault/lists/${listID}`, { body, ...options });
  }

  /**
   * List your Vault lists (categories).
   *
   * Every response carries an `ETag` computed over the `data` payload. Send it back
   * as `If-None-Match` on your next call and you will get a `304 Not Modified` with
   * an empty body when nothing changed, so you can keep serving your cached copy
   * instead of re-parsing the full list. Credits are debited either way — we still
   * have to ask OnlyFans for the current state to know whether it changed.
   *
   * The `ETag` covers `data` only, never `_meta` — your credits balance changes on
   * every call, so including it would mean the `ETag` never matches. Because a `304`
   * has no body, it also has no `_meta`: read the current credits and rate-limit
   * counters from the `X-OFAPI-Credits-Used`, `X-OFAPI-Credits-Balance`,
   * `X-Rate-Limit-Limit-Minute` and `X-Rate-Limit-Remaining-Minute` response
   * headers, which are sent on `304` responses too. The `_meta` inside a body you
   * cached earlier is stale by definition.
   *
   * @example
   * ```ts
   * const lists = await client.media.vault.lists.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    return this._client.get(path`/api/${account}/media/vault/lists`, { query, ...options });
  }

  /**
   * Delete a Vault list.
   *
   * @example
   * ```ts
   * const list = await client.media.vault.lists.delete('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(listID: string, params: ListDeleteParams, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/media/vault/lists/${listID}`, options);
  }
}

export interface ListCreateResponse {
  _meta?: ListCreateResponse._Meta;

  data?: ListCreateResponse.Data;
}

export namespace ListCreateResponse {
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
    id?: number;

    audiosCount?: number;

    canDelete?: boolean;

    canUpdate?: boolean;

    gifsCount?: number;

    hasMedia?: boolean;

    medias?: Array<unknown>;

    name?: string;

    photosCount?: number;

    type?: string;

    videosCount?: number;
  }
}

export interface ListRetrieveResponse {
  _meta?: ListRetrieveResponse._Meta;

  data?: ListRetrieveResponse.Data;
}

export namespace ListRetrieveResponse {
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
    id?: number;

    audiosCount?: number;

    canDelete?: boolean;

    canUpdate?: boolean;

    gifsCount?: number;

    hasMedia?: boolean;

    medias?: Array<unknown>;

    name?: string;

    photosCount?: number;

    type?: string;

    videosCount?: number;
  }
}

export interface ListUpdateResponse {
  _meta?: ListUpdateResponse._Meta;

  data?: ListUpdateResponse.Data;
}

export namespace ListUpdateResponse {
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
    id?: number;

    audiosCount?: number;

    canDelete?: boolean;

    canUpdate?: boolean;

    gifsCount?: number;

    hasMedia?: boolean;

    medias?: Array<unknown>;

    name?: string;

    photosCount?: number;

    type?: string;

    videosCount?: number;
  }
}

/**
 * Success
 */
export type ListListResponse = ListListResponse.UnionMember0 | ListListResponse.UnionMember1;

export namespace ListListResponse {
  /**
   * Success
   */
  export interface UnionMember0 {
    _meta?: UnionMember0._Meta;

    data?: UnionMember0.Data;
  }

  export namespace UnionMember0 {
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
      all?: Data.All;

      canCreateVaultLists?: boolean;

      hasMore?: boolean;

      list?: Array<Data.List>;

      order?: string;

      sort?: string;
    }

    export namespace Data {
      export interface All {
        audiosCount?: number;

        gifsCount?: number;

        medias?: Array<All.Media>;

        photosCount?: number;

        videosCount?: number;
      }

      export namespace All {
        export interface Media {
          type?: string;

          url?: string;
        }
      }

      export interface List {
        id?: number;

        audiosCount?: number;

        canDelete?: boolean;

        canUpdate?: boolean;

        gifsCount?: number;

        hasMedia?: boolean;

        medias?: Array<unknown>;

        name?: string;

        photosCount?: number;

        type?: string;

        videosCount?: number;
      }
    }
  }

  /**
   * Success (lightweight=true)
   */
  export interface UnionMember1 {
    _meta?: UnionMember1._Meta;

    data?: UnionMember1.Data;
  }

  export namespace UnionMember1 {
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
      all?: Data.All;

      canCreateVaultLists?: boolean;

      hasMore?: boolean;

      list?: Array<Data.List>;

      order?: string;

      sort?: string;
    }

    export namespace Data {
      export interface All {
        mediaCount?: number;
      }

      export interface List {
        id?: number;

        canUpdate?: boolean;

        mediaCount?: number;

        name?: string;

        type?: string;
      }
    }
  }
}

export interface ListDeleteResponse {
  _meta?: ListDeleteResponse._Meta;

  data?: ListDeleteResponse.Data;
}

export namespace ListDeleteResponse {
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

export interface ListCreateParams {
  /**
   * The name of your new list
   */
  name: string;
}

export interface ListRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ListUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The new name for the vault list. Must not be greater than 255
   * characters.
   */
  name: string;
}

export interface ListListParams {
  /**
   * Set to `true` to return only `id`, `name`, `type`, `canUpdate` and a rolled-up
   * `mediaCount` per list, dropping the `medias` previews. Much smaller payload —
   * ideal for rendering a folder picker. Default: `false`
   */
  lightweight?: boolean;

  /**
   * Number of media to return per page. Default: `24`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;

  /**
   * Optionally, find a list by its name.
   */
  query?: string;
}

export interface ListDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

Lists.Media = MediaAPIMedia;

export declare namespace Lists {
  export {
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

  export {
    MediaAPIMedia as Media,
    type MediaAddResponse as MediaAddResponse,
    type MediaRemoveResponse as MediaRemoveResponse,
    type MediaAddParams as MediaAddParams,
    type MediaRemoveParams as MediaRemoveParams,
  };
}
