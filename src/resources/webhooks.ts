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
   * Delete an existing webhook
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete('wh_abc123');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/api/webhooks/${webhookID}`, options);
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

export type WebhookDeleteResponse = unknown;

export interface WebhookCreateParams {
  /**
   * The account scope for the webhook. Use "global" for all accounts, "inclusive"
   * for only selected accounts, or "exclusive" for all except selected accounts.
   */
  account_scope: string;

  /**
   * The URL of your webhook endpoint.
   */
  endpoint_url: string;

  /**
   * An array of webhook events to subscribe to. For all options, refer to our **List
   * Available Events** endpoint.
   */
  events: Array<string>;

  /**
   * An array of account IDs to apply the scope to. Required unless account_scope is
   * "global".
   */
  account_ids?: Array<string>;

  /**
   * Optionally, add a signing secret to protect your webhook.
   */
  signing_secret?: string | null;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookCreateParams as WebhookCreateParams,
  };
}
