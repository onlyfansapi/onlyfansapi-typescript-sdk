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
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Media extends APIResource {
  vault: VaultAPI.Vault = new VaultAPI.Vault(this._client);

  /**
   * **⚠️ This is a deprecated endpoint. Please use the new "Download media from the
   * OnlyFans CDN" endpoint!** Scrapes a `https://cdn*.onlyfans.com/*` URL _or_ Vault
   * Media ID, and uploads it to the OnlyFans API CDN, where you can view or download
   * the file. **Max file size is 500MB**
   *
   * @example
   * ```ts
   * const response = await client.media.scrape(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  scrape(
    account: string,
    body: MediaScrapeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaScrapeResponse> {
    return this._client.post(path`/api/${account}/media/scrape`, { body, ...options });
  }

  /**
   * The response can be used **only once** to manually include media in a post or
   * message. This endpoint does not upload media to the Vault. You must provide
   * either `file` or `file_url`.
   *
   * @example
   * ```ts
   * const response = await client.media.upload(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  upload(
    account: string,
    body: MediaUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaUploadResponse> {
    return this._client.post(
      path`/api/${account}/media/upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
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

  note?: string;

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
   * The expiration date of our returned `temporary_url`. Default of 5 minutes. Must
   * be null if `public` is true.
   */
  expiration_date?: string | null;

  /**
   * The file type to scrape. Only allowed when using `media_id`.
   */
  file_type?: 'full' | 'thumb' | 'preview' | 'squarePreview' | null;

  /**
   * The OnlyFans Vault Media ID. **Can be used instead of the `url`.**
   */
  media_id?: number | null;

  /**
   * Set to true if you want to have the file uploaded to our public CDN (no signed
   * URL needed to access). Default is false. Must be null if `expiration_date` is
   * set.
   */
  public?: boolean | null;

  /**
   * The CDN URL to scrape. **Keep in mind that these URLs expire fast.**
   */
  url?: string | null;
}

export interface MediaUploadParams {
  /**
   * Set to `true` to process uploads in the background. Returns a `polling_url` to
   * check status. Recommended for large files.
   */
  async?: boolean;

  /**
   * The file to upload. Required if `file_url` is not provided. Maximum file size:
   * 100 MB (limited by Cloudflare).
   */
  file?: Uploadable;

  /**
   * A URL to download the file from. Required if `file` is not provided. Maximum
   * file size depends on the subscription configuration.
   */
  file_url?: string;

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
