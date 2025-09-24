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
  id?: string;

  created_at?: string;

  events?: Array<string>;

  has_signing_secret?: boolean;

  url?: string;
}

export type WebhookDeleteResponse = unknown;

export interface WebhookCreateParams {
  /**
   * The URL of your webhook endpoint.
   */
  endpoint_url: string;

  /**
   * An array of webhook events to subscribe to. Options: `messages.received`,
   * `messages.sent`, `messages.ppv.unlocked`, `subscriptions.new`, `users.typing`,
   * `posts.liked`, `accounts.connected`, `accounts.reconnected`,
   * `accounts.session_expired`, `accounts.authentication_failed`,
   * `accounts.otp_code_required`, `accounts.face_otp_required`
   */
  events: Array<string>;

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
