// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarkAsRead extends APIResource {
  /**
   * Mark all chats as read.
   *
   * @example
   * ```ts
   * const response = await client.chats.markAsRead.all(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  all(account: string, options?: RequestOptions): APIPromise<MarkAsReadAllResponse> {
    return this._client.post(path`/api/${account}/chats/mark-as-read`, options);
  }
}

export interface MarkAsReadAllResponse {
  _meta?: MarkAsReadAllResponse._Meta;

  data?: MarkAsReadAllResponse.Data;
}

export namespace MarkAsReadAllResponse {
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

export declare namespace MarkAsRead {
  export { type MarkAsReadAllResponse as MarkAsReadAllResponse };
}
