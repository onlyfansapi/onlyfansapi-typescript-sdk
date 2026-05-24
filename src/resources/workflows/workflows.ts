// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountPerformanceAPI from './account-performance';
import { AccountPerformance } from './account-performance';

export class Workflows extends APIResource {
  accountPerformance: AccountPerformanceAPI.AccountPerformance = new AccountPerformanceAPI.AccountPerformance(
    this._client,
  );
}

Workflows.AccountPerformance = AccountPerformance;

export declare namespace Workflows {
  export { AccountPerformance as AccountPerformance };
}
