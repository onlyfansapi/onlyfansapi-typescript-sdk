// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Uploads extends APIResource {
  /**
   * Check the status of a media upload. Poll this endpoint until status is
   * `completed` or `failed`. This endpoint is free and does not cost any credits.
   *
   * **Possible statuses:**
   *
   * - `pending` — Upload is queued
   * - `processing` — Download/upload in progress
   * - `completed` — Upload finished, `media` and `credits_used` are included
   * - `failed` — Upload failed, `error` is included
   *
   * Instead of polling, you can subscribe to the `media_uploads.completed` and
   * `media_uploads.failed` webhook events. They carry the same fields as this
   * endpoint and are only sent for async (`async=true`) uploads — synchronous
   * uploads return their result directly.
   *
   * @example
   * ```ts
   * const response = await client.media.uploads.getStatus(
   *   'ofapi_media_01JR1234',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  getStatus(
    upload: string,
    params: UploadGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<UploadGetStatusResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/media/uploads/${upload}/status`, options);
  }
}

/**
 * Upload still processing
 */
export type UploadGetStatusResponse =
  | UploadGetStatusResponse.UnionMember0
  | UploadGetStatusResponse.UnionMember1
  | UploadGetStatusResponse.UnionMember2
  | UploadGetStatusResponse.UnionMember3;

export namespace UploadGetStatusResponse {
  /**
   * Upload still processing
   */
  export interface UnionMember0 {
    prefixed_id?: string;

    status?: string;
  }

  /**
   * Upload failed
   */
  export interface UnionMember1 {
    error?: string;

    prefixed_id?: string;

    status?: string;
  }

  /**
   * Completed POST /media/vault upload
   */
  export interface UnionMember2 {
    credits_used?: number;

    media?: UnionMember2.Media;

    prefixed_id?: string;

    status?: string;
  }

  export namespace UnionMember2 {
    export interface Media {
      id?: number;

      canView?: boolean;

      convertedToVideo?: boolean;

      createdAt?: string;

      duration?: number;

      files?: Media.Files;

      hasCustomPreview?: boolean;

      hasError?: boolean;

      isReady?: boolean;

      releaseForms?: Array<unknown>;

      type?: string;
    }

    export namespace Media {
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

          url?: string | null;

          width?: number;
        }
      }
    }
  }

  /**
   * Completed POST /media/upload upload
   */
  export interface UnionMember3 {
    credits_used?: number;

    media?: UnionMember3.Media;

    prefixed_id?: string;

    status?: string;
  }

  export namespace UnionMember3 {
    export interface Media {
      additional?: Media.Additional;

      extra?: string;

      file_name?: string;

      host?: string;

      prefixed_id?: string;

      processId?: string;

      sourceUrl?: string;

      thumbs?: Array<Media.Thumb>;
    }

    export namespace Media {
      export interface Additional {
        user?: string;
      }

      export interface Thumb {
        id?: number;

        url?: string;
      }
    }
  }
}

export interface UploadGetStatusParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Uploads {
  export {
    type UploadGetStatusResponse as UploadGetStatusResponse,
    type UploadGetStatusParams as UploadGetStatusParams,
  };
}
