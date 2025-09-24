// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VaultAPI from './vault/vault';
import {
  Vault,
  VaultDeleteParams,
  VaultDeleteResponse,
  VaultListParams,
  VaultListResponse,
} from './vault/vault';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Media extends APIResource {
  vault: VaultAPI.Vault = new VaultAPI.Vault(this._client);

  /**
   * Scrapes a `https://cdn*.onlyfans.com/*` URL and uploads it to the OnlyFans API
   * CDN, so that you can view or download the file. **Max file size is 500MB**
   *
   * @example
   * ```ts
   * const response = await client.media.scrape(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     url: 'https://cdn2.onlyfans.com/files/e/e5/123/600x400_123.jpg?Tag=2&u=123&Policy=123&Signature=signature&Key-Pair-Id=123',
   *   },
   * );
   * ```
   */
  scrape(
    account: string,
    body: MediaScrapeParams,
    options?: RequestOptions,
  ): APIPromise<MediaScrapeResponse> {
    return this._client.post(path`/api/${account}/media/scrape`, { body, ...options });
  }

  /**
   * The response can be used **only once** to manually include media in a post or
   * message. This endpoint does not upload media to the Vault.
   *
   * @example
   * ```ts
   * const response = await client.media.upload(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { file: 'file.jpg' },
   * );
   * ```
   */
  upload(
    account: string,
    body: MediaUploadParams,
    options?: RequestOptions,
  ): APIPromise<MediaUploadResponse> {
    return this._client.post(path`/api/${account}/media/upload`, { body, ...options });
  }
}

export interface MediaScrapeResponse {
  expiration_date?: string;

  temporary_url?: string;
}

export interface MediaUploadResponse {
  additional?: MediaUploadResponse.Additional;

  extra?: string;

  file_name?: string;

  host?: string;

  prefixed_id?: string;

  processId?: string;

  sourceUrl?: string;

  thumbs?: Array<MediaUploadResponse.Thumb>;
}

export namespace MediaUploadResponse {
  export interface Additional {
    user?: string;
  }

  export interface Thumb {
    id?: number;

    url?: string;
  }
}

export interface MediaScrapeParams {
  /**
   * The CDN URL to scrape. **Keep in mind that these URLs expire fast.**
   */
  url: string;

  /**
   * The expiration date of our returned `temporary_url`. Default of 5 minutes.
   */
  expiration_date?: string | null;
}

export interface MediaUploadParams {
  /**
   * The file to upload.
   */
  file: string;

  /**
   * Set to `avatar` if this file will be used as a profile picture, `header` for a
   * profile banner, or keep empty if this file will be for anything else.
   */
  type?: 'default' | 'avatar' | 'header';
}

Media.Vault = Vault;

export declare namespace Media {
  export {
    type MediaScrapeResponse as MediaScrapeResponse,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaScrapeParams as MediaScrapeParams,
    type MediaUploadParams as MediaUploadParams,
  };

  export {
    Vault as Vault,
    type VaultListResponse as VaultListResponse,
    type VaultDeleteResponse as VaultDeleteResponse,
    type VaultListParams as VaultListParams,
    type VaultDeleteParams as VaultDeleteParams,
  };
}
