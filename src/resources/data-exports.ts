// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing data exports
 */
export class DataExports extends APIResource {
  /**
   * Create a new data export request. This will calculate the required credits and
   * prepare the export for starting.
   *
   * @example
   * ```ts
   * const dataExport = await client.dataExports.create({
   *   end_date: '2024-12-31T23:59:59Z',
   *   file_type: 'csv',
   *   start_date: '2024-01-01T00:00:00Z',
   *   type: 'transactions',
   * });
   * ```
   */
  create(body: DataExportCreateParams, options?: RequestOptions): APIPromise<DataExportCreateResponse> {
    return this._client.post('/api/data-exports', { body, ...options });
  }

  /**
   * Get the current status and progress of a data export
   *
   * @example
   * ```ts
   * const dataExport = await client.dataExports.retrieve(
   *   'data_export_abc123',
   * );
   * ```
   */
  retrieve(
    dataExportID: string,
    query: DataExportRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataExportRetrieveResponse> {
    return this._client.get(path`/api/data-exports/${dataExportID}`, { query, ...options });
  }

  /**
   * Get a paginated list of data exports for the team
   *
   * @example
   * ```ts
   * const dataExports = await client.dataExports.list();
   * ```
   */
  list(
    query: DataExportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataExportListResponse> {
    return this._client.get('/api/data-exports', { query, ...options });
  }

  /**
   * Cancel a running data export. Only exports with status `pending` or
   * `in_progress` can be cancelled.
   *
   * @example
   * ```ts
   * const response = await client.dataExports.cancel(
   *   'data_export_abc123',
   * );
   * ```
   */
  cancel(dataExportID: string, options?: RequestOptions): APIPromise<DataExportCancelResponse> {
    return this._client.delete(path`/api/data-exports/${dataExportID}`, options);
  }

  /**
   * Create a new data export with the same parameters as a failed export and
   * automatically start it.
   *
   * @example
   * ```ts
   * const response = await client.dataExports.retry(
   *   'data_export_abc123',
   * );
   * ```
   */
  retry(dataExportID: string, options?: RequestOptions): APIPromise<DataExportRetryResponse> {
    return this._client.post(path`/api/data-exports/${dataExportID}/retry`, options);
  }

  /**
   * Start processing a data export that has completed credit calculation. This will
   * begin the actual export process and charge credits.
   *
   * @example
   * ```ts
   * const response = await client.dataExports.start(
   *   'data_export_abc123',
   * );
   * ```
   */
  start(dataExportID: string, options?: RequestOptions): APIPromise<DataExportStartResponse> {
    return this._client.post(path`/api/data-exports/${dataExportID}/start`, options);
  }
}

export interface DataExportCreateResponse {
  _meta?: DataExportCreateResponse._Meta;

  data?: DataExportCreateResponse.Data;
}

export namespace DataExportCreateResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: string;

    created_at?: string;

    credit_calculation_note?: string;

    end_date?: string;

    file_type?: string;

    requires_scraping?: boolean;

    start_date?: string;

    status?: string;

    type?: string;
  }
}

export interface DataExportRetrieveResponse {
  _meta?: DataExportRetrieveResponse._Meta;

  data?: DataExportRetrieveResponse.Data;
}

export namespace DataExportRetrieveResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: string;

    accounts?: Array<Data.Account>;

    completed_at?: string | null;

    created_at?: string;

    credit_cost?: number;

    end_date?: string;

    export_columns?: Array<string>;

    failed_at?: string | null;

    failed_downloads?: number;

    failed_reason?: string | null;

    file_type?: string;

    progress_percentage?: number;

    rows_processed?: number;

    start_date?: string;

    status?: string;

    total_rows?: number;

    type?: string;
  }

  export namespace Data {
    export interface Account {
      id?: string;

      display_name?: string;
    }
  }
}

export interface DataExportListResponse {
  _meta?: DataExportListResponse._Meta;

  data?: DataExportListResponse.Data;
}

export namespace DataExportListResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    data?: Array<Data.Data>;

    meta?: Data.Meta;
  }

  export namespace Data {
    export interface Data {
      id?: string;

      accounts?: Array<Data.Account>;

      completed_at?: string;

      created_at?: string;

      credit_cost?: number;

      download_url?: string;

      download_url_expires_at?: string;

      end_date?: string;

      export_columns?: Array<string>;

      failed_at?: string | null;

      failed_downloads?: number;

      failed_reason?: string | null;

      file_type?: string;

      progress_percentage?: number;

      rows_processed?: number;

      start_date?: string;

      status?: string;

      total_rows?: number;

      type?: string;
    }

    export namespace Data {
      export interface Account {
        id?: string;

        display_name?: string;
      }
    }

    export interface Meta {
      current_page?: number;

      last_page?: number;

      per_page?: number;

      total?: number;
    }
  }
}

export interface DataExportCancelResponse {
  _meta?: DataExportCancelResponse._Meta;

  data?: DataExportCancelResponse.Data;
}

export namespace DataExportCancelResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: string;

    message?: string;

    status?: string;
  }
}

export interface DataExportRetryResponse {
  _meta?: DataExportRetryResponse._Meta;

  data?: DataExportRetryResponse.Data;
}

export namespace DataExportRetryResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: string;

    message?: string;

    original_id?: string;

    status?: string;

    type?: string;
  }
}

export interface DataExportStartResponse {
  _meta?: DataExportStartResponse._Meta;

  data?: DataExportStartResponse.Data;
}

export namespace DataExportStartResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: string;

    message?: string;

    status?: string;
  }
}

export interface DataExportCreateParams {
  /**
   * The end date for the export (ISO 8601 format).
   */
  end_date: string;

  /**
   * The output file format. Supported formats vary by export type: `csv` or `xlsx`
   * for transactions, chat_messages, trial_links, tracking_links, smart_links,
   * payouts, chargebacks, public_profiles, fans, followings; `zip` for media_vault.
   */
  file_type: 'csv' | 'xlsx' | 'zip';

  /**
   * The start date for the export (ISO 8601 format).
   */
  start_date: string;

  /**
   * The type of data to export
   */
  type:
    | 'transactions'
    | 'chat_messages'
    | 'media_vault'
    | 'trial_links'
    | 'tracking_links'
    | 'smart_links'
    | 'payouts'
    | 'chargebacks'
    | 'public_profiles'
    | 'fans'
    | 'followings';

  /**
   * Array of account prefixed IDs to export data from. Not required for
   * `public_profiles` type.
   */
  account_ids?: Array<string>;

  /**
   * When true, automatically starts the export after creation.
   */
  auto_start?: boolean;

  /**
   * Array of column names to include in the export (optional, defaults to all
   * columns for the export type)
   */
  export_columns?: Array<string>;

  /**
   * Type-specific export options. For `chat_messages`: `maxMessages` (required per
   * account, max 10,000,000), `maxChats` (optional per-account chat scrape limit),
   * `skipMassMessages` (optional, bool), `chatIds` (optional array of numeric
   * fan/chat IDs; filters output and can drastically reduce totals). For
   * `media_vault`: `mediaType` (required, one of: `all`, `photo`, `gif`, `video`,
   * `audio`). For `fans`: `type` (required, one of: `all`, `active`, `expired`,
   * `latest`). For `followings`: `type` (required, one of: `all`, `active`,
   * `expired`). For `public_profiles`: `query` (optional, full-text search),
   * `gender` (optional, filter: male, female, trans, couple), `minSubscribePrice`
   * (optional, USD), `maxSubscribePrice` (optional, USD), `location` (optional),
   * `minPostsCount` (optional, minimum posts), `minPhotosCount` (optional, minimum
   * photos), `minVideosCount` (optional, minimum videos), `minSubscribersCount`
   * (optional, minimum subscribers), `minJoinDate` (optional, ISO 8601 date),
   * `minLastSeenAt` (optional, ISO 8601 date), `createdAtFrom` (optional, ISO 8601
   * date, profile added to DB after), `createdAtTo` (optional, ISO 8601 date,
   * profile added to DB before), `instagram` (optional), `twitter` (optional),
   * `tiktok` (optional), `maxResults` (optional, limit results).
   */
  options?: { [key: string]: unknown };
}

export interface DataExportRetrieveParams {
  /**
   * Number of minutes until the download URL expires. Min `1`, max `60`, default
   * `5`.
   */
  download_url_expires_in?: number;
}

export interface DataExportListParams {
  /**
   * Number of minutes until download URLs expire. Min `1`, max `60`, default `5`.
   */
  download_url_expires_in?: number;

  /**
   * Page number for pagination. Default `1`
   */
  page?: number;

  /**
   * Number of results per page. Default `15`, max `100`
   */
  per_page?: number;

  /**
   * Filter by status
   */
  status?:
    | 'calculating_credits'
    | 'calculating_credits_failed'
    | 'calculating_credits_completed'
    | 'pending'
    | 'in_progress'
    | 'completed'
    | 'failed';

  /**
   * Filter by export type
   */
  type?:
    | 'transactions'
    | 'chat_messages'
    | 'media_vault'
    | 'trial_links'
    | 'tracking_links'
    | 'payouts'
    | 'chargebacks'
    | 'public_profiles';
}

export declare namespace DataExports {
  export {
    type DataExportCreateResponse as DataExportCreateResponse,
    type DataExportRetrieveResponse as DataExportRetrieveResponse,
    type DataExportListResponse as DataExportListResponse,
    type DataExportCancelResponse as DataExportCancelResponse,
    type DataExportRetryResponse as DataExportRetryResponse,
    type DataExportStartResponse as DataExportStartResponse,
    type DataExportCreateParams as DataExportCreateParams,
    type DataExportRetrieveParams as DataExportRetrieveParams,
    type DataExportListParams as DataExportListParams,
  };
}
