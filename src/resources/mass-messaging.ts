// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MassMessaging extends APIResource {
  /**
   * Get the content of a mass message.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.retrieve(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    id: string,
    params: MassMessagingRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/mass-messaging/${id}`, options);
  }

  /**
   * Update a mass message.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.update(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX', text: 'Hello!' },
   * );
   * ```
   */
  update(
    id: string,
    params: MassMessagingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/mass-messaging/${id}`, { body, ...options });
  }

  /**
   * Unsend a recently sent mass message, or delete a scheduled/saved message. When
   * unsending, purchased content will continue to be able to viewable.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.delete(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    id: string,
    params: MassMessagingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/mass-messaging/${id}`, options);
  }

  /**
   * List the pending or recently sent mass messages in the message queue.
   *
   * @example
   * ```ts
   * const response = await client.massMessaging.listQueue(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listQueue(account: string, options?: RequestOptions): APIPromise<MassMessagingListQueueResponse> {
    return this._client.get(path`/api/${account}/mass-messaging`, options);
  }

  /**
   * Send a mass message to lists and/or users. You may use both the `userLists` and
   * `userIds` parameters to send the same message to both lists and individual
   * users.
   *
   * @example
   * ```ts
   * const response = await client.massMessaging.send(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { text: 'Hello!' },
   * );
   * ```
   */
  send(
    account: string,
    body: MassMessagingSendParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingSendResponse> {
    return this._client.post(path`/api/${account}/mass-messaging`, { body, ...options });
  }
}

export interface MassMessagingRetrieveResponse {
  _meta?: MassMessagingRetrieveResponse._Meta;

  data?: MassMessagingRetrieveResponse.Data;
}

export namespace MassMessagingRetrieveResponse {
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
    queue?: Data.Queue;

    success?: boolean;
  }

  export namespace Data {
    export interface Queue {
      id?: number;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      hasError?: boolean;

      isCanceled?: boolean;

      isFree?: boolean;

      mediaTypes?: string | null;

      releaseForms?: Array<unknown>;

      sentCount?: number;

      text?: string;

      textCropped?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }
  }
}

export interface MassMessagingUpdateResponse {
  _meta?: MassMessagingUpdateResponse._Meta;

  data?: MassMessagingUpdateResponse.Data;
}

export namespace MassMessagingUpdateResponse {
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

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingDeleteResponse {
  _meta?: MassMessagingDeleteResponse._Meta;

  data?: MassMessagingDeleteResponse.Data;
}

export namespace MassMessagingDeleteResponse {
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
    queue?: Data.Queue;

    success?: boolean;
  }

  export namespace Data {
    export interface Queue {
      id?: number;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      hasError?: boolean;

      isCanceled?: boolean;

      isFree?: boolean;

      mediaTypes?: string | null;

      releaseForms?: Array<unknown>;

      sentCount?: number;

      text?: string;

      textCropped?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }
  }
}

export interface MassMessagingListQueueResponse {
  _meta?: MassMessagingListQueueResponse._Meta;

  data?: Array<MassMessagingListQueueResponse.Data>;
}

export namespace MassMessagingListQueueResponse {
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

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingSendResponse {
  _meta?: MassMessagingSendResponse._Meta;

  data?: MassMessagingSendResponse.Data;
}

export namespace MassMessagingSendResponse {
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

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface MassMessagingUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The message text content
   */
  text: string;

  /**
   * Body param: The ID of the Giphy GIF to attach to the message. Get IDs from the
   * Giphy listing endpoints (`/giphy/trending`, `/giphy/search`).
   */
  giphyId?: string;

  /**
   * Body param: Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be hidden if `price` is provided.
   */
  mediaFiles?: Array<string>;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be shown if `price` is provided. All `previews` values
   * must also exist in the `mediaFiles` array.
   */
  previews?: Array<string>;

  /**
   * Body param: Price for paid content (0 or between 3-200). In case this is not
   * zero, **mediaFiles** is required
   */
  price?: number;

  /**
   * Body param: Schedule the chat message in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * Body param: Array of user IDs that the mass message will be sent to.
   */
  userIds?: Array<string>;

  /**
   * Body param: Array of user list IDs that the mass message will be sent to.
   */
  userLists?: Array<string>;
}

export interface MassMessagingDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface MassMessagingSendParams {
  /**
   * The message text content
   */
  text: string;

  /**
   * Array of user list IDs that the mass message will NOT be sent to.
   */
  excludedLists?: Array<string>;

  /**
   * The ID of the Giphy GIF to attach to the message. Get IDs from the Giphy listing
   * endpoints (`/giphy/trending`, `/giphy/search`).
   */
  giphyId?: string;

  /**
   * Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, or OF vault IDs. Will be hidden
   * if `price` is provided.
   */
  mediaFiles?: Array<unknown>;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, OF vault IDs, or integer indices
   * referencing uploaded files in `mediaFiles`. Will be shown if `price` is
   * provided.
   */
  previews?: Array<unknown>;

  /**
   * Price for paid content (0 or between 3-200). In case this is not zero,
   * **mediaFiles** is required
   */
  price?: number;

  /**
   * Array of OnlyFans Release Form Guest IDs to tag in your mass message
   */
  rfGuest?: string;

  /**
   * Array of OnlyFans Release Form Partners IDs to tag in your mass message
   */
  rfPartner?: string;

  /**
   * Array of OnlyFans Creator User IDs to tag in your mass message
   */
  rfTag?: string;

  /**
   * Add your message to the "Saved for later" queue.
   */
  saveForLater?: boolean;

  /**
   * Schedule the chat message in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * Array of user IDs that the mass message will be sent to.
   */
  userIds?: Array<string>;

  /**
   * Array of user list IDs that the mass message will be sent to.
   */
  userLists?: Array<string>;
}

export declare namespace MassMessaging {
  export {
    type MassMessagingRetrieveResponse as MassMessagingRetrieveResponse,
    type MassMessagingUpdateResponse as MassMessagingUpdateResponse,
    type MassMessagingDeleteResponse as MassMessagingDeleteResponse,
    type MassMessagingListQueueResponse as MassMessagingListQueueResponse,
    type MassMessagingSendResponse as MassMessagingSendResponse,
    type MassMessagingRetrieveParams as MassMessagingRetrieveParams,
    type MassMessagingUpdateParams as MassMessagingUpdateParams,
    type MassMessagingDeleteParams as MassMessagingDeleteParams,
    type MassMessagingSendParams as MassMessagingSendParams,
  };
}
