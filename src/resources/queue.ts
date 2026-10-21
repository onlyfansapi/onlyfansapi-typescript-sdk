// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Queue extends APIResource {
  /**
   * List scheduled posts and mass messages for a date range. Use the type filter to
   * return only posts, messages, or both.
   *
   * @example
   * ```ts
   * const queues = await client.queue.list(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     publishDateEnd: '2025-01-01',
   *     publishDateStart: '2025-01-01',
   *     timezone: 'Europe/Prague',
   *   },
   * );
   * ```
   */
  list(account: string, query: QueueListParams, options?: RequestOptions): APIPromise<QueueListResponse> {
    return this._client.get(path`/api/${account}/queue`, { query, ...options });
  }

  /**
   * Count posts and messages in the queue.
   *
   * @example
   * ```ts
   * const response = await client.queue.count(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     publishDateEnd: '2025-01-01',
   *     publishDateStart: '2025-01-01',
   *     timezone: 'Europe/Prague',
   *   },
   * );
   * ```
   */
  count(account: string, query: QueueCountParams, options?: RequestOptions): APIPromise<QueueCountResponse> {
    return this._client.get(path`/api/${account}/queue/counts`, { query, ...options });
  }

  /**
   * Publish a queue item or "saved for later" item (post or mass message). This
   * means that the item will be sent immediately, regardless of its scheduled date.
   *
   * @example
   * ```ts
   * const response = await client.queue.publish('queue_id', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  publish(
    queueID: string,
    params: QueuePublishParams,
    options?: RequestOptions,
  ): APIPromise<QueuePublishResponse> {
    const { account } = params;
    return this._client.put(path`/api/${account}/queue/${queueID}/publish`, options);
  }
}

export interface QueueListResponse {
  _meta?: QueueListResponse._Meta;

  data?: QueueListResponse.Data;
}

export namespace QueueListResponse {
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
    list?: Array<Data.List>;

    syncInProcess?: boolean;
  }

  export namespace Data {
    export interface List {
      id?: number;

      createdDateTime?: string;

      entity?: List.Entity;

      publishDateTime?: string;

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

        scheduledAt?: string;

        sentRulesExtra?: string;

        sentRulesType?: string;

        text?: string;

        unsendSecondsQueue?: number;

        userLists?: Array<string>;
      }
    }
  }
}

export interface QueueCountResponse {
  _meta?: QueueCountResponse._Meta;

  data?: QueueCountResponse.Data;
}

export namespace QueueCountResponse {
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
    list?: Data.List;

    syncInProcess?: boolean;
  }

  export namespace Data {
    export interface List {
      '2025-01-01'?: List._2025_01_01;

      '2025-01-02'?: List._2025_01_02;
    }

    export namespace List {
      export interface _2025_01_01 {
        post?: number;
      }

      export interface _2025_01_02 {
        chat?: number;

        post?: number;
      }
    }
  }
}

export interface QueuePublishResponse {
  _meta?: QueuePublishResponse._Meta;

  data?: QueuePublishResponse.Data;
}

export namespace QueuePublishResponse {
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

export interface QueueListParams {
  /**
   * Latest publish date to return. Must be a valid date. Must be a valid date. Must
   * be a date after or equal to <code>publishDateStart</code>.
   */
  publishDateEnd: string;

  /**
   * Earliest publish date to return (must be at least today). Must be a valid date.
   * Must be a valid date. Must be a date after or equal to <code>today</code>.
   */
  publishDateStart: string;

  /**
   * Timezone of the provided dates.
   * [View available timezone values](https://www.php.net/manual/en/timezones.php).
   * Must be a valid time zone, such as <code>Africa/Accra</code>.
   */
  timezone: string;

  /**
   * Maximum number of queue items to return (default 20). Must be at least 1. Must
   * not be greater than 100.
   */
  limit?: number;

  type?: Array<'chat' | 'post'>;
}

export interface QueueCountParams {
  /**
   * Latest publish date to count to
   */
  publishDateEnd: string;

  /**
   * Earliest publish date to count from (must be at least today)
   */
  publishDateStart: string;

  /**
   * Time timezone of the provided dates.
   * [View available timezone values](https://www.php.net/manual/en/timezones.php)
   */
  timezone: string;
}

export interface QueuePublishParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Queue {
  export {
    type QueueListResponse as QueueListResponse,
    type QueueCountResponse as QueueCountResponse,
    type QueuePublishResponse as QueuePublishResponse,
    type QueueListParams as QueueListParams,
    type QueueCountParams as QueueCountParams,
    type QueuePublishParams as QueuePublishParams,
  };
}
