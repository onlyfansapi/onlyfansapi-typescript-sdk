// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Media extends APIResource {
  /**
   * Add one or multiple media to a list.
   *
   * @example
   * ```ts
   * const response = await client.media.vault.lists.media.add(
   *   'beatae',
   *   { account: 'acct_XXXXXXXXXXXXXXX', mediaIds: ['string'] },
   * );
   * ```
   */
  add(listID: string, params: MediaAddParams, options?: RequestOptions): APIPromise<MediaAddResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/media/vault/lists/${listID}/media`, { body, ...options });
  }

  /**
   * Remove one or multiple media from a list.
   *
   * @example
   * ```ts
   * const media = await client.media.vault.lists.media.remove(
   *   'beatae',
   *   { account: 'acct_XXXXXXXXXXXXXXX', mediaIds: ['string'] },
   * );
   * ```
   */
  remove(
    listID: string,
    params: MediaRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MediaRemoveResponse> {
    const { account, ...body } = params;
    return this._client.delete(path`/api/${account}/media/vault/lists/${listID}/media`, { body, ...options });
  }
}

export interface MediaAddResponse {
  _meta?: MediaAddResponse._Meta;

  data?: MediaAddResponse.Data;
}

export namespace MediaAddResponse {
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

    medias?: Array<Data.Media>;

    name?: string;

    photosCount?: number;

    type?: string;

    videosCount?: number;
  }

  export namespace Data {
    export interface Media {
      type?: string;

      url?: string;
    }
  }
}

export interface MediaRemoveResponse {
  _meta?: MediaRemoveResponse._Meta;

  data?: MediaRemoveResponse.Data;
}

export namespace MediaRemoveResponse {
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

export interface MediaAddParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of media IDs to add.
   */
  mediaIds: Array<string>;
}

export interface MediaRemoveParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of media IDs to delete.
   */
  mediaIds: Array<string>;
}

export declare namespace Media {
  export {
    type MediaAddResponse as MediaAddResponse,
    type MediaRemoveResponse as MediaRemoveResponse,
    type MediaAddParams as MediaAddParams,
    type MediaRemoveParams as MediaRemoveParams,
  };
}
