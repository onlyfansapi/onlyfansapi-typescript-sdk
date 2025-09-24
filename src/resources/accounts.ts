// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * List all connected OnlyFans accounts.
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/api/accounts', { query, ...options });
  }

  /**
   * Disconnect an OnlyFans account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.disconnect('aut');
   * ```
   */
  disconnect(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/api/accounts/${id}`, options);
  }
}

export type AccountListResponse = Array<unknown>;

export type AccountDisconnectResponse = unknown;

export interface AccountListParams {
  /**
   * Optionally, filter by the OnlyFans email
   */
  onlyfans_email?: string | null;

  /**
   * Optionally, filter by the OnlyFans ID
   */
  onlyfans_id?: string | null;

  /**
   * Optionally, filter by the OnlyFans username
   */
  onlyfans_username?: string | null;
}

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountDisconnectResponse as AccountDisconnectResponse,
    type AccountListParams as AccountListParams,
  };
}
