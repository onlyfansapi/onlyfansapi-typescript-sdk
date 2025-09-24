// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AccountPerformance extends APIResource {
  /**
   * @example
   * ```ts
   * await client.workflows.accountPerformance.retrieveStartingRevenues(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  retrieveStartingRevenues(
    account: string,
    query: AccountPerformanceRetrieveStartingRevenuesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/${account}/workflows/account-performance/starting-revenues`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AccountPerformanceRetrieveStartingRevenuesParams {}

export declare namespace AccountPerformance {
  export { type AccountPerformanceRetrieveStartingRevenuesParams as AccountPerformanceRetrieveStartingRevenuesParams };
}
