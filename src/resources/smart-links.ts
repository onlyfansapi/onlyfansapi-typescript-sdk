// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing Smart Links (Free Trial Links and Tracking Links with pooled inventory)
 */
export class SmartLinks extends APIResource {
  /**
   * Create a new Smart Link for the account. Smart Links are pooled Free Trial or
   * Tracking links that rotate inventory automatically.
   *
   * @example
   * ```ts
   * const smartLink = await client.smartLinks.create({
   *   account_id: 'acct_XXXXXXXX',
   *   link_type: 'free_trial',
   *   name: 'Instagram Bio Link',
   * });
   * ```
   */
  create(body: SmartLinkCreateParams, options?: RequestOptions): APIPromise<SmartLinkCreateResponse> {
    return this._client.post('/api/smart-links', { body, ...options });
  }

  /**
   * Get a specific Smart Link by its ID
   *
   * @example
   * ```ts
   * const smartLink = await client.smartLinks.retrieve(
   *   '01JCZWQJZXQJZXQJZXQJZXQJZX',
   * );
   * ```
   */
  retrieve(smartLinkID: string, options?: RequestOptions): APIPromise<SmartLinkRetrieveResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}`, options);
  }

  /**
   * List all Smart Links
   *
   * @example
   * ```ts
   * const smartLinks = await client.smartLinks.list();
   * ```
   */
  list(
    query: SmartLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkListResponse> {
    return this._client.get('/api/smart-links', { query, ...options });
  }

  /**
   * Delete a Smart Link by its ID
   *
   * @example
   * ```ts
   * const smartLink = await client.smartLinks.delete(
   *   '01JCZWQJZXQJZXQJZXQJZXQJZX',
   * );
   * ```
   */
  delete(smartLinkID: string, options?: RequestOptions): APIPromise<SmartLinkDeleteResponse> {
    return this._client.delete(path`/api/smart-links/${smartLinkID}`, options);
  }

  /**
   * Query smart link clicks in a date range with optional bot/duplicate filtering
   *
   * @example
   * ```ts
   * const response = await client.smartLinks.listClicks('qui');
   * ```
   */
  listClicks(
    smartLinkID: string,
    query: SmartLinkListClicksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkListClicksResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/clicks`, { query, ...options });
  }

  /**
   * Query smart link conversions in a date range with optional bot/duplicate and
   * conversion type filtering
   *
   * @example
   * ```ts
   * const response = await client.smartLinks.listConversions(
   *   'voluptatum',
   * );
   * ```
   */
  listConversions(
    smartLinkID: string,
    query: SmartLinkListConversionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkListConversionsResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/conversions`, { query, ...options });
  }

  /**
   * Query attributed Smart Link fans with aggregate fan metrics and subscriber
   * attribution metadata
   *
   * @example
   * ```ts
   * const response = await client.smartLinks.listFans('nulla');
   * ```
   */
  listFans(
    smartLinkID: string,
    query: SmartLinkListFansParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkListFansResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/fans`, { query, ...options });
  }

  /**
   * Compatibility endpoint returning fans with attributed spend through a Smart Link
   *
   * @example
   * ```ts
   * const response = await client.smartLinks.listSpenders(
   *   'soluta',
   * );
   * ```
   */
  listSpenders(
    smartLinkID: string,
    query: SmartLinkListSpendersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkListSpendersResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/spenders`, { query, ...options });
  }

  /**
   * Get per-link time-to-profit cohort ARPS windows for a specific Smart Link
   *
   * @example
   * ```ts
   * await client.smartLinks.retrieveCohortArps('qui');
   * ```
   */
  retrieveCohortArps(
    smartLinkID: string,
    query: SmartLinkRetrieveCohortArpsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/cohort-arps`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get dashboard-style summary plus daily and monthly metrics for a specific Smart
   * Link on the current team
   *
   * @example
   * ```ts
   * const response = await client.smartLinks.retrieveStats(
   *   'velit',
   * );
   * ```
   */
  retrieveStats(
    smartLinkID: string,
    query: SmartLinkRetrieveStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartLinkRetrieveStatsResponse> {
    return this._client.get(path`/api/smart-links/${smartLinkID}/stats`, { query, ...options });
  }
}

export interface SmartLinkCreateResponse {
  _meta?: SmartLinkCreateResponse._Meta;

  data?: SmartLinkCreateResponse.Data;
}

export namespace SmartLinkCreateResponse {
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

    account?: Data.Account;

    clicks_count?: number;

    conversions_count?: number;

    cost?: Data.Cost;

    created_at?: string;

    free_trial_days?: number;

    link_type?: string;

    name?: string;

    revenue?: string;

    subscribers_count?: number;

    traffic_redirect_url?: string;

    updated_at?: string;
  }

  export namespace Data {
    export interface Account {
      id?: string;

      display_name?: string;

      username?: string;
    }

    export interface Cost {
      clickSourceCount?: number;

      inputMode?: string | null;

      inputValue?: string | null;

      perClick?: string | null;

      perPromo?: string | null;

      perSub?: string | null;

      subscriberSourceCount?: number;
    }
  }
}

export interface SmartLinkRetrieveResponse {
  _meta?: SmartLinkRetrieveResponse._Meta;

  data?: SmartLinkRetrieveResponse.Data;
}

export namespace SmartLinkRetrieveResponse {
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

    account?: Data.Account;

    clicks_count?: number;

    conversions_count?: number;

    cost?: Data.Cost;

    created_at?: string;

    free_trial_days?: number;

    link_type?: string;

    name?: string;

    revenue?: string;

    subscribers_count?: number;

    traffic_redirect_url?: string;

    updated_at?: string;
  }

  export namespace Data {
    export interface Account {
      id?: string;

      display_name?: string;

      username?: string;
    }

    export interface Cost {
      clickSourceCount?: number;

      inputMode?: string | null;

      inputValue?: string | null;

      perClick?: string | null;

      perPromo?: string | null;

      perSub?: string | null;

      subscriberSourceCount?: number;
    }
  }
}

export interface SmartLinkListResponse {
  _meta?: SmartLinkListResponse._Meta;

  data?: Array<SmartLinkListResponse.Data>;
}

export namespace SmartLinkListResponse {
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

    account?: Data.Account;

    clicks_count?: number;

    conversions_count?: number;

    cost?: Data.Cost;

    created_at?: string;

    free_trial_days?: number;

    link_type?: string;

    name?: string;

    revenue?: string;

    spenders_count?: number;

    subscribers_count?: number;

    traffic_redirect_url?: string;

    updated_at?: string;
  }

  export namespace Data {
    export interface Account {
      id?: string;

      display_name?: string;

      username?: string;
    }

    export interface Cost {
      clickSourceCount?: number;

      inputMode?: string | null;

      inputValue?: string | null;

      perClick?: string | null;

      perPromo?: string | null;

      perSub?: string | null;

      subscriberSourceCount?: number;
    }
  }
}

export interface SmartLinkDeleteResponse {
  _meta?: SmartLinkDeleteResponse._Meta;

  data?: SmartLinkDeleteResponse.Data;
}

export namespace SmartLinkDeleteResponse {
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

export interface SmartLinkListClicksResponse {
  _meta?: SmartLinkListClicksResponse._Meta;

  data?: SmartLinkListClicksResponse.Data;
}

export namespace SmartLinkListClicksResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    chart?: Array<Data.Chart>;

    filters?: Data.Filters;

    rows?: Array<Data.Row>;

    summary?: Data.Summary;
  }

  export namespace Data {
    export interface Chart {
      clicks?: number;

      timestamp?: string;
    }

    export interface Filters {
      date_end?: string;

      date_start?: string;

      include_bots?: boolean;

      include_duplicates?: boolean;

      limit?: number;

      offset?: number;
    }

    export interface Row {
      id?: string;

      aff_s1?: string;

      aff_s2?: string | null;

      aff_s3?: string | null;

      aff_s4?: string | null;

      aff_s5?: string | null;

      browser_device_type?: string;

      browser_family?: string;

      browser_name?: string;

      browser_platform?: string;

      country_code?: string;

      created_at?: string;

      external_click_id?: string;

      fbclid?: string | null;

      gclid?: string;

      gross_clicks?: number;

      ip_address?: string;

      is_bot?: boolean;

      is_duplicate?: boolean;

      referrer?: string;

      ttclid?: string;

      user_agent?: string;

      utm_campaign?: string;

      utm_content?: string;

      utm_medium?: string;

      utm_source?: string;

      utm_term?: string;
    }

    export interface Summary {
      clicks_total?: number;
    }
  }
}

export interface SmartLinkListConversionsResponse {
  _meta?: SmartLinkListConversionsResponse._Meta;

  data?: SmartLinkListConversionsResponse.Data;
}

export namespace SmartLinkListConversionsResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    chart?: Array<Data.Chart>;

    filters?: Data.Filters;

    rows?: Array<Data.Row>;

    summary?: Data.Summary;
  }

  export namespace Data {
    export interface Chart {
      conversions?: number;

      timestamp?: string;
    }

    export interface Filters {
      conversion_type?: string;

      date_end?: string;

      date_start?: string;

      include_bots?: boolean;

      include_duplicates?: boolean;

      limit?: number;

      offset?: number;
    }

    export interface Row {
      id?: string;

      amount_gross?: number;

      amount_net?: number;

      click?: Row.Click;

      conversion_at?: string;

      conversion_type?: string;

      fan?: Row.Fan;

      fan_onlyfans_id?: string;
    }

    export namespace Row {
      export interface Click {
        id?: string;

        aff_s1?: string;

        aff_s2?: string | null;

        aff_s3?: string | null;

        aff_s4?: string | null;

        aff_s5?: string | null;

        browser_device_type?: string;

        browser_family?: string;

        browser_name?: string;

        browser_platform?: string;

        country_code?: string;

        created_at?: string;

        external_click_id?: string;

        fbclid?: string | null;

        gclid?: string;

        gross_clicks?: number;

        ip_address?: string;

        is_bot?: boolean;

        is_duplicate?: boolean;

        referrer?: string;

        ttclid?: string;

        user_agent?: string;

        utm_campaign?: string;

        utm_content?: string;

        utm_medium?: string;

        utm_source?: string;

        utm_term?: string;
      }

      export interface Fan {
        avatar_url?: string;

        name?: string;

        onlyfans_id?: string;

        onlyfans_url?: string;

        username?: string;
      }
    }

    export interface Summary {
      conversions_total?: number;

      revenue_total?: number;

      subscribers_total?: number;
    }
  }
}

export interface SmartLinkListFansResponse {
  _meta?: SmartLinkListFansResponse._Meta;

  data?: SmartLinkListFansResponse.Data;
}

export namespace SmartLinkListFansResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    filters?: Data.Filters;

    rows?: Array<Data.Row>;

    summary?: Data.Summary;
  }

  export namespace Data {
    export interface Filters {
      has_messages?: string | null;

      limit?: number;

      min_messages_sent_by_fan?: string | null;

      min_revenue_net?: string | null;

      min_tips_net?: string | null;

      offset?: number;

      previously_subscribed?: string | null;

      sort?: string;

      subscribed_using_promo?: string | null;
    }

    export interface Row {
      avatar_url?: string;

      click_id?: string;

      conversion_id?: number;

      converted_at?: string;

      external_click_id?: string;

      fan_id?: number;

      messages_sent_by_fan?: number;

      name?: string;

      onlyfans_id?: string;

      revenue_net?: number;

      subscription_insights?: Row.SubscriptionInsights;

      tips_net?: number;

      username?: string;
    }

    export namespace Row {
      export interface SubscriptionInsights {
        current_subscription?: SubscriptionInsights.CurrentSubscription;

        current_subscription_from_smart_link?: boolean;

        has_subscription_data?: boolean;

        previously_subscribed?: boolean;

        subscribed_using_promo?: boolean;
      }

      export namespace SubscriptionInsights {
        export interface CurrentSubscription {
          action?: string;

          is_free?: boolean;

          price?: number;

          regular_price?: number;

          type?: string;
        }
      }
    }

    export interface Summary {
      fans_total?: number;

      fans_with_1_plus_messages_total?: number;

      fans_with_3_plus_messages_total?: number;

      revenue_net_total?: number;

      tips_net_total?: number;
    }
  }
}

export interface SmartLinkListSpendersResponse {
  _meta?: SmartLinkListSpendersResponse._Meta;

  data?: Array<SmartLinkListSpendersResponse.Data>;
}

export namespace SmartLinkListSpendersResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    onlyfans_id?: string;

    revenue?: Data.Revenue;

    username?: string;
  }

  export namespace Data {
    export interface Revenue {
      calculated_at?: string;

      total?: number;
    }
  }
}

export interface SmartLinkRetrieveStatsResponse {
  _meta?: SmartLinkRetrieveStatsResponse._Meta;

  data?: SmartLinkRetrieveStatsResponse.Data;
}

export namespace SmartLinkRetrieveStatsResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    daily_metrics?: Array<Data.DailyMetric>;

    monthly_metrics?: Array<Data.MonthlyMetric>;

    summary?: Data.Summary;
  }

  export namespace Data {
    export interface DailyMetric {
      clicks?: number;

      revenue?: number;

      spenders?: number;

      subs?: number;

      timestamp?: string;
    }

    export interface MonthlyMetric {
      clicks?: number;

      revenue?: number;

      spenders?: number;

      subs?: number;

      timestamp?: string;
    }

    export interface Summary {
      clicks_total?: number;

      revenue_total?: number;

      spenders_total?: number;

      subs_total?: number;
    }
  }
}

export interface SmartLinkCreateParams {
  /**
   * The prefixed ID of the account to create the Smart Link for
   */
  account_id: string;

  /**
   * The type of Smart Link to create
   */
  link_type: 'free_trial' | 'tracking_link';

  /**
   * The name of the Smart Link
   */
  name: string;

  /**
   * The number of free trial days (required if `link_type` is `free_trial`). Must be
   * between 1 and 360.
   */
  free_trial_days?: number;
}

export interface SmartLinkListParams {
  /**
   * Comma-separated account prefixed IDs to include.
   */
  account_ids?: string | null;

  filter?: SmartLinkListParams.Filter;

  /**
   * The number of Smart Links to return. Default `50`. Must be at least 1. Must not
   * be greater than 1000.
   */
  limit?: number;

  /**
   * Filter Smart Links by name. Must not be greater than 255 characters.
   */
  name?: string | null;

  /**
   * The offset used for pagination. Default `0`. Must be at least 0.
   */
  offset?: number;

  /**
   * Comma-separated ad platform Pixel IDs to include.
   */
  pixel_ids?: string | null;
}

export namespace SmartLinkListParams {
  export interface Filter {
    /**
     * Must not be greater than 50 characters.
     */
    tags?: Array<string>;
  }
}

export interface SmartLinkListClicksParams {
  /**
   * Optional report range end date
   */
  date_end?: string;

  /**
   * Optional report range start date
   */
  date_start?: string;

  /**
   * Include clicks marked as bots. Default `true`
   */
  include_bots?: boolean;

  /**
   * Include duplicate clicks. Default `true`
   */
  include_duplicates?: boolean;

  /**
   * Rows per page. Default `100`
   */
  limit?: number;

  /**
   * Offset for pagination. Default `0`
   */
  offset?: number;
}

export interface SmartLinkListConversionsParams {
  /**
   * Optional conversion type filter
   */
  conversion_type?:
    | 'new_subscriber'
    | 'new_transaction'
    | 'message_received'
    | 'fan_sent_1_message'
    | 'fan_sent_3_messages';

  /**
   * Optional report range end date
   */
  date_end?: string;

  /**
   * Optional report range start date
   */
  date_start?: string;

  /**
   * Include conversions from clicks marked as bots. Default `true`
   */
  include_bots?: boolean;

  /**
   * Include conversions from duplicate clicks. Default `true`
   */
  include_duplicates?: boolean;

  /**
   * Rows per page. Default `100`
   */
  limit?: number;

  /**
   * Offset for pagination. Default `0`
   */
  offset?: number;

  /**
   * Optional - Search for conversions by OnlyFans User ID
   */
  onlyfans_user_id?: string;
}

export interface SmartLinkListFansParams {
  /**
   * Optional - Filter to fans with or without fan-sent messages
   */
  has_messages?: boolean;

  /**
   * Rows per page. Default `100`
   */
  limit?: number;

  /**
   * Optional minimum number of messages sent by fan
   */
  min_messages_sent_by_fan?: number;

  /**
   * Optional minimum net revenue
   */
  min_revenue_net?: number;

  /**
   * Optional minimum net tips
   */
  min_tips_net?: number;

  /**
   * Offset for pagination. Default `0`
   */
  offset?: number;

  /**
   * Optional - Filter to returning subscribers (fans previously subscribed before
   * this subscription)
   */
  previously_subscribed?: boolean;

  /**
   * Optional sort field. Default `-revenue_net`
   */
  sort?:
    | 'revenue_net'
    | '-revenue_net'
    | 'tips_net'
    | '-tips_net'
    | 'messages_sent_by_fan'
    | '-messages_sent_by_fan'
    | 'converted_at'
    | '-converted_at';

  /**
   * Optional - Filter to fans who subscribed via a promotion/offer
   */
  subscribed_using_promo?: boolean;
}

export interface SmartLinkListSpendersParams {
  /**
   * The number of spenders to return per page. Default `50`
   */
  limit?: number;

  /**
   * Minimal spend of a fan. Default `1`
   */
  minSpend?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export interface SmartLinkRetrieveCohortArpsParams {
  /**
   * Optional acquisition range end date
   */
  acquisition_end?: string;

  /**
   * Optional acquisition range start date
   */
  acquisition_start?: string;

  /**
   * Revenue basis. Defaults to `net`.
   */
  revenue_basis?: 'net' | 'gross';
}

export interface SmartLinkRetrieveStatsParams {
  /**
   * Optional stats range end date
   */
  date_end?: string;

  /**
   * Optional stats range start date
   */
  date_start?: string;
}

export declare namespace SmartLinks {
  export {
    type SmartLinkCreateResponse as SmartLinkCreateResponse,
    type SmartLinkRetrieveResponse as SmartLinkRetrieveResponse,
    type SmartLinkListResponse as SmartLinkListResponse,
    type SmartLinkDeleteResponse as SmartLinkDeleteResponse,
    type SmartLinkListClicksResponse as SmartLinkListClicksResponse,
    type SmartLinkListConversionsResponse as SmartLinkListConversionsResponse,
    type SmartLinkListFansResponse as SmartLinkListFansResponse,
    type SmartLinkListSpendersResponse as SmartLinkListSpendersResponse,
    type SmartLinkRetrieveStatsResponse as SmartLinkRetrieveStatsResponse,
    type SmartLinkCreateParams as SmartLinkCreateParams,
    type SmartLinkListParams as SmartLinkListParams,
    type SmartLinkListClicksParams as SmartLinkListClicksParams,
    type SmartLinkListConversionsParams as SmartLinkListConversionsParams,
    type SmartLinkListFansParams as SmartLinkListFansParams,
    type SmartLinkListSpendersParams as SmartLinkListSpendersParams,
    type SmartLinkRetrieveCohortArpsParams as SmartLinkRetrieveCohortArpsParams,
    type SmartLinkRetrieveStatsParams as SmartLinkRetrieveStatsParams,
  };
}
