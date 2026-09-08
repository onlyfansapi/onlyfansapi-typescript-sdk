// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create a new webhook for your Team
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   account_scope: 'global',
   *   endpoint_url: 'https://example.com',
   *   events: ['accounts.connected', 'subscriptions.new'],
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/api/webhooks', { body, ...options });
  }

  /**
   * Retrieve details about a specific webhook
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve('wh_abc123');
   * ```
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/api/webhooks/${webhookID}`, options);
  }

  /**
   * Update an existing webhook
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update('wh_abc123', {
   *   account_scope: 'global',
   *   endpoint_url: 'https://example.com',
   *   events: ['accounts.connected', 'subscriptions.new'],
   * });
   * ```
   */
  update(
    webhookID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.put(path`/api/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Retrieve a list of webhooks for your Team
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/api/webhooks', options);
  }

  /**
   * Delete an existing webhook
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete('wh_abc123');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse | null> {
    return this._client.delete(path`/api/webhooks/${webhookID}`, options);
  }

  /**
   * Retrieve a list of all available webhook event types
   *
   * @example
   * ```ts
   * const response = await client.webhooks.listEvents();
   * ```
   */
  listEvents(options?: RequestOptions): APIPromise<WebhookListEventsResponse> {
    return this._client.get('/api/webhooks/events', options);
  }
}

export interface WebhookCreateResponse {
  _meta?: WebhookCreateResponse._Meta;

  data?: WebhookCreateResponse.Data;
}

export namespace WebhookCreateResponse {
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
    id?: string;

    created_at?: string;

    enabled?: boolean;

    events?: Array<string>;

    has_signing_secret?: boolean;

    url?: string;
  }
}

export interface WebhookRetrieveResponse {
  _meta?: WebhookRetrieveResponse._Meta;

  data?: WebhookRetrieveResponse.Data;
}

export namespace WebhookRetrieveResponse {
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
    id?: string;

    created_at?: string;

    enabled?: boolean;

    events?: Array<string>;

    has_signing_secret?: boolean;

    url?: string;
  }
}

export interface WebhookUpdateResponse {
  _meta?: WebhookUpdateResponse._Meta;

  data?: WebhookUpdateResponse.Data;
}

export namespace WebhookUpdateResponse {
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
    id?: string;

    created_at?: string;

    enabled?: boolean;

    events?: Array<string>;

    has_signing_secret?: boolean;

    url?: string;
  }
}

export interface WebhookListResponse {
  _meta?: WebhookListResponse._Meta;

  data?: Array<WebhookListResponse.Data>;
}

export namespace WebhookListResponse {
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
    id?: string;

    created_at?: string;

    enabled?: boolean;

    events?: Array<string>;

    has_signing_secret?: boolean;

    url?: string;
  }
}

export type WebhookDeleteResponse = { [key: string]: unknown };

export interface WebhookListEventsResponse {
  _meta?: WebhookListEventsResponse._Meta;

  data?: Array<WebhookListEventsResponse.Data>;
}

export namespace WebhookListEventsResponse {
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
    description?: string;

    value?: string;
  }
}

export interface WebhookCreateParams {
  /**
   * The account scope for the webhook (OnlyFans and Fansly webhooks alike). Use
   * "global" for all accounts, "inclusive" for only selected accounts, or
   * "exclusive" for all except selected accounts.
   */
  account_scope: string;

  /**
   * The URL of your webhook endpoint.
   */
  endpoint_url: string;

  /**
   * An array of webhook events to subscribe to. For all options, refer to our **List
   * Available Events** endpoint. A webhook is single-platform: subscribe to either
   * OnlyFans events or Fansly (`fansly.*`) events, never both in one webhook.
   */
  events: Array<string>;

  /**
   * An array of account IDs to apply the scope to. Use OnlyFans account IDs
   * (`acct_...`) for OnlyFans webhooks and Fansly account IDs (`fansly_acct_...`)
   * for Fansly webhooks. Required unless account_scope is "global".
   */
  account_ids?: Array<string>;

  /**
   * Optionally, add a signing secret to protect your webhook.
   */
  signing_secret?: string | null;
}

export interface WebhookUpdateParams {
  /**
   * The account scope for the webhook (OnlyFans and Fansly webhooks alike). Use
   * "global" for all accounts, "inclusive" for only selected accounts, or
   * "exclusive" for all except selected accounts.
   */
  account_scope: string;

  /**
   * The URL of your webhook endpoint.
   */
  endpoint_url: string;

  /**
   * An array of webhook events to subscribe to. For all options, refer to our **List
   * Available Events** endpoint. A webhook is single-platform: subscribe to either
   * OnlyFans events or Fansly (`fansly.*`) events, never both in one webhook.
   */
  events: Array<string>;

  /**
   * An array of account IDs to apply the scope to. Use OnlyFans account IDs
   * (`acct_...`) for OnlyFans webhooks and Fansly account IDs (`fansly_acct_...`)
   * for Fansly webhooks. Required unless account_scope is "global".
   */
  account_ids?: Array<string>;

  /**
   * Optionally, enabled/disable the webhook. This will stop/resume the sending of
   * events, without having to delete the webhook.
   */
  enabled?: boolean | null;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookListEventsResponse as WebhookListEventsResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
