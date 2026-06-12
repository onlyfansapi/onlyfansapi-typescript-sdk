// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { stringifyQuery } from './internal/utils/query';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AccountDisconnectResponse,
  AccountListParams,
  AccountListResponse,
  Accounts,
} from './resources/accounts';
import {
  Authenticate,
  AuthenticatePollStatusResponse,
  AuthenticateReauthenticateResponse,
  AuthenticateSend2faEmailResponse,
  AuthenticateStartParams,
  AuthenticateStartResponse,
  AuthenticateSubmit2faParams,
  AuthenticateSubmit2faResponse,
} from './resources/authenticate';
import {
  BundleCreateParams,
  BundleCreateResponse,
  BundleDeleteParams,
  BundleDeleteResponse,
  BundleListResponse,
  Bundles,
} from './resources/bundles';
import {
  ChargebackCalculateRatioParams,
  ChargebackCalculateRatioResponse,
  ChargebackListParams,
  ChargebackListResponse,
  ChargebackListStatisticsParams,
  ChargebackListStatisticsResponse,
  Chargebacks,
} from './resources/chargebacks';
import {
  ClientSessionCreateParams,
  ClientSessionCreateResponse,
  ClientSessions,
} from './resources/client-sessions';
import {
  DataExportCancelResponse,
  DataExportCreateParams,
  DataExportCreateResponse,
  DataExportListParams,
  DataExportListResponse,
  DataExportRetrieveParams,
  DataExportRetrieveResponse,
  DataExportRetryResponse,
  DataExportStartResponse,
  DataExports,
} from './resources/data-exports';
import {
  Following,
  FollowingListActiveParams,
  FollowingListActiveResponse,
  FollowingListAllParams,
  FollowingListAllResponse,
  FollowingListExpiredParams,
  FollowingListExpiredResponse,
} from './resources/following';
import {
  Giphy,
  GiphyListTrendingParams,
  GiphyListTrendingResponse,
  GiphySearchParams,
  GiphySearchResponse,
} from './resources/giphy';
import { LinkTagListParams, LinkTagListResponse, LinkTags } from './resources/link-tags';
import {
  MassMessaging,
  MassMessagingDeleteParams,
  MassMessagingDeleteResponse,
  MassMessagingListResponse,
  MassMessagingRetrieveOverviewParams,
  MassMessagingRetrieveOverviewResponse,
  MassMessagingRetrieveParams,
  MassMessagingRetrieveResponse,
  MassMessagingSendParams,
  MassMessagingSendResponse,
  MassMessagingUpdateParams,
  MassMessagingUpdateResponse,
} from './resources/mass-messaging';
import {
  Me,
  MeGetModelStartDateResponse,
  MeGetTopPercentageResponse,
  MeRetrieveResponse,
} from './resources/me';
import { MessageAttachTagsParams, MessageAttachTagsResponse, Messages } from './resources/messages';
import {
  PayoutListRequestsParams,
  PayoutListRequestsResponse,
  PayoutRequestManualWithdrawalParams,
  PayoutRequestManualWithdrawalResponse,
  PayoutRetrieveBalancesResponse,
  PayoutRetrieveEarningStatisticsParams,
  PayoutRetrieveEarningStatisticsResponse,
  PayoutRetrieveEligibilityResponse,
  PayoutUpdateFrequencyParams,
  PayoutUpdateFrequencyResponse,
  Payouts,
} from './resources/payouts';
import { ProfileRetrieveParams, ProfileRetrieveResponse, Profiles } from './resources/profiles';
import {
  PromotionCreateParams,
  PromotionCreateResponse,
  PromotionDeleteParams,
  PromotionDeleteResponse,
  PromotionListParams,
  PromotionListResponse,
  PromotionStopParams,
  PromotionStopResponse,
  Promotions,
} from './resources/promotions';
import {
  Queue,
  QueueCountParams,
  QueueCountResponse,
  QueueListParams,
  QueueListResponse,
  QueuePublishParams,
  QueuePublishResponse,
} from './resources/queue';
import {
  ReleaseFormCreateInvitationLinkParams,
  ReleaseFormCreateInvitationLinkResponse,
  ReleaseFormCreateReleaseFormParams,
  ReleaseFormCreateReleaseFormResponse,
  ReleaseFormListTaggableUsersParams,
  ReleaseFormListTaggableUsersResponse,
  ReleaseForms,
} from './resources/release-forms';
import { Search, SearchProfilesParams, SearchProfilesResponse } from './resources/search';
import {
  SmartLinkPostbackCreateParams,
  SmartLinkPostbackCreateResponse,
  SmartLinkPostbackDeleteResponse,
  SmartLinkPostbackListResponse,
  SmartLinkPostbackRetrieveResponse,
  SmartLinkPostbackUpdateParams,
  SmartLinkPostbackUpdateResponse,
  SmartLinkPostbacks,
} from './resources/smart-link-postbacks';
import {
  SmartLinkCreateParams,
  SmartLinkCreateResponse,
  SmartLinkDeleteResponse,
  SmartLinkListClicksParams,
  SmartLinkListClicksResponse,
  SmartLinkListConversionsParams,
  SmartLinkListConversionsResponse,
  SmartLinkListFansParams,
  SmartLinkListFansResponse,
  SmartLinkListParams,
  SmartLinkListResponse,
  SmartLinkListSpendersParams,
  SmartLinkListSpendersResponse,
  SmartLinkRetrieveCohortArpsParams,
  SmartLinkRetrieveResponse,
  SmartLinkRetrieveStatsParams,
  SmartLinkRetrieveStatsResponse,
  SmartLinks,
} from './resources/smart-links';
import {
  Stored,
  StoredListSharedTrackingLinksParams,
  StoredListSharedTrackingLinksResponse,
  StoredListSharedTrialLinksParams,
  StoredListSharedTrialLinksResponse,
  StoredListTrackingLinksParams,
  StoredListTrackingLinksResponse,
  StoredListTrialLinksParams,
  StoredListTrialLinksResponse,
} from './resources/stored';
import {
  SubscriberRetrieveStatisticsParams,
  SubscriberRetrieveStatisticsResponse,
  Subscribers,
} from './resources/subscribers';
import { TransactionListParams, TransactionListResponse, Transactions } from './resources/transactions';
import {
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteResponse,
  WebhookListEventsResponse,
  WebhookListResponse,
  WebhookRetrieveResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './resources/webhooks';
import { Whoami, WhoamiRetrieveResponse } from './resources/whoami';
import { Analytics } from './resources/analytics/analytics';
import {
  Banking,
  BankingListAvailablePayoutSystemsResponse,
  BankingListCountriesResponse,
} from './resources/banking/banking';
import {
  ChatDeleteParams,
  ChatDeleteResponse,
  ChatHideParams,
  ChatHideResponse,
  ChatListMediaParams,
  ChatListMediaResponse,
  ChatListParams,
  ChatListResponse,
  ChatMarkAsReadParams,
  ChatMarkAsReadResponse,
  ChatMarkAsUnreadParams,
  ChatMarkAsUnreadResponse,
  ChatMuteParams,
  ChatMuteResponse,
  ChatStartTypingParams,
  ChatStartTypingResponse,
  ChatUnmuteParams,
  ChatUnmuteResponse,
  Chats,
} from './resources/chats/chats';
import { Engagement } from './resources/engagement/engagement';
import {
  FanGetSubscriptionHistoryParams,
  FanGetSubscriptionHistoryResponse,
  FanListActiveParams,
  FanListActiveResponse,
  FanListAllParams,
  FanListAllResponse,
  FanListExpiredParams,
  FanListExpiredResponse,
  FanListLatestParams,
  FanListLatestResponse,
  FanListTopParams,
  FanListTopResponse,
  FanSetCustomNameParams,
  FanSetCustomNameResponse,
  Fans,
} from './resources/fans/fans';
import {
  Media,
  MediaDownloadParams,
  MediaScrapeParams,
  MediaScrapeResponse,
  MediaUploadParams,
  MediaUploadResponse,
} from './resources/media/media';
import {
  NotificationGetCountsResponse,
  NotificationListParams,
  NotificationListResponse,
  NotificationMarkAllAsReadResponse,
  NotificationSearchUsersParams,
  NotificationSearchUsersResponse,
  Notifications,
} from './resources/notifications/notifications';
import {
  PostArchiveParams,
  PostArchiveResponse,
  PostCreateParams,
  PostCreateResponse,
  PostDeleteParams,
  PostDeleteResponse,
  PostListParams,
  PostListResponse,
  PostPinParams,
  PostPinResponse,
  PostRetrieveParams,
  PostRetrieveResponse,
  PostStatsParams,
  PostStatsResponse,
  PostUnarchiveParams,
  PostUnarchiveResponse,
  PostUpdateParams,
  PostUpdateResponse,
  Posts,
} from './resources/posts/posts';
import { SavedForLater } from './resources/saved-for-later/saved-for-later';
import {
  SettingCheckUsernameAvailabilityParams,
  SettingCheckUsernameAvailabilityResponse,
  SettingRetrieveResponse,
  SettingUpdateProfileParams,
  SettingUpdateProfileResponse,
  SettingUpdateSubscriptionPriceParams,
  SettingUpdateSubscriptionPriceResponse,
  Settings,
} from './resources/settings/settings';
import {
  SharedTrackingLinkListParams,
  SharedTrackingLinkListResponse,
  SharedTrackingLinkRevokeAccessParams,
  SharedTrackingLinkRevokeAccessResponse,
  SharedTrackingLinks,
} from './resources/shared-tracking-links/shared-tracking-links';
import {
  SharedTrialLinkListParams,
  SharedTrialLinkListResponse,
  SharedTrialLinkRevokeAccessParams,
  SharedTrialLinkRevokeAccessResponse,
  SharedTrialLinks,
} from './resources/shared-trial-links/shared-trial-links';
import {
  StatisticCalculateTotalTransactionsParams,
  StatisticCalculateTotalTransactionsResponse,
  StatisticGetOverviewParams,
  StatisticGetOverviewResponse,
  StatisticGetSubscriberMetricsParams,
  StatisticGetSubscriberMetricsResponse,
  Statistics,
} from './resources/statistics/statistics';
import {
  Stories,
  StoryCreateParams,
  StoryCreateResponse,
  StoryDeleteParams,
  StoryDeleteResponse,
  StoryListActiveResponse,
  StoryListArchiveParams,
  StoryListArchiveResponse,
  StoryListViewersParams,
  StoryListViewersResponse,
  StoryMarkAsWatchedParams,
  StoryMarkAsWatchedResponse,
  StoryRetrieveParams,
  StoryRetrieveResponse,
  StoryRetrieveStatsParams,
  StoryRetrieveStatsResponse,
} from './resources/stories/stories';
import {
  TrackingLinkCreateParams,
  TrackingLinkCreateResponse,
  TrackingLinkDeleteParams,
  TrackingLinkDeleteResponse,
  TrackingLinkGetCohortArpsParams,
  TrackingLinkGetStatsParams,
  TrackingLinkGetStatsResponse,
  TrackingLinkListParams,
  TrackingLinkListResponse,
  TrackingLinkListSpendersParams,
  TrackingLinkListSpendersResponse,
  TrackingLinkListSubscribersParams,
  TrackingLinkListSubscribersResponse,
  TrackingLinkRetrieveParams,
  TrackingLinkRetrieveResponse,
  TrackingLinks,
} from './resources/tracking-links/tracking-links';
import {
  TrialLinkCreateParams,
  TrialLinkCreateResponse,
  TrialLinkDeleteParams,
  TrialLinkDeleteResponse,
  TrialLinkListParams,
  TrialLinkListResponse,
  TrialLinkListSpendersParams,
  TrialLinkListSpendersResponse,
  TrialLinkListSubscribersParams,
  TrialLinkListSubscribersResponse,
  TrialLinkRetrieveCohortArpsParams,
  TrialLinkRetrieveParams,
  TrialLinkRetrieveResponse,
  TrialLinkRetrieveStatsParams,
  TrialLinkRetrieveStatsResponse,
  TrialLinks,
} from './resources/trial-links/trial-links';
import {
  UserListCreateParams,
  UserListCreateResponse,
  UserListDeleteParams,
  UserListDeleteResponse,
  UserListListParams,
  UserListListResponse,
  UserListRetrieveParams,
  UserListRetrieveResponse,
  UserListUpdateParams,
  UserListUpdateResponse,
  UserLists,
} from './resources/user-lists/user-lists';
import {
  UserListParams,
  UserListResponse,
  UserRetrieveParams,
  UserRetrieveResponse,
  Users,
} from './resources/users/users';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Get your API Key from OnlyFansAPI Console - https://app.onlyfansapi.com/api-keys
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['ONLY_FANS_API_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['ONLY_FANS_API_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Only Fans API API.
 */
export class OnlyFansAPI {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Only Fans API API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['ONLYFANSAPI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['ONLY_FANS_API_BASE_URL'] ?? https://app.onlyfansapi.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('ONLY_FANS_API_BASE_URL'),
    apiKey = readEnv('ONLYFANSAPI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.OnlyFansAPIError(
        "The ONLYFANSAPI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OnlyFansAPI client with an apiKey option, like new OnlyFansAPI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://app.onlyfansapi.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? OnlyFansAPI.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('ONLY_FANS_API_LOG'), "process.env['ONLY_FANS_API_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('ONLY_FANS_API_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://app.onlyfansapi.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it
    // says, but otherwise calculate a default
    if (timeoutMillis === undefined) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static OnlyFansAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static OnlyFansAPIError = Errors.OnlyFansAPIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  whoami: API.Whoami = new API.Whoami(this);
  /**
   * Endpoints for your linked accounts
   */
  accounts: API.Accounts = new API.Accounts(this);
  /**
   * Endpoints for your linked accounts
   */
  me: API.Me = new API.Me(this);
  analytics: API.Analytics = new API.Analytics(this);
  /**
   * Operations related to user banking details, payout methods, legal and tax information, and account country settings.
   */
  banking: API.Banking = new API.Banking(this);
  chargebacks: API.Chargebacks = new API.Chargebacks(this);
  chats: API.Chats = new API.Chats(this);
  messages: API.Messages = new API.Messages(this);
  clientSessions: API.ClientSessions = new API.ClientSessions(this);
  authenticate: API.Authenticate = new API.Authenticate(this);
  /**
   * APIs for managing data exports
   */
  dataExports: API.DataExports = new API.DataExports(this);
  engagement: API.Engagement = new API.Engagement(this);
  /**
   * APIs for managing OnlyFans fans (subscribers)
   */
  fans: API.Fans = new API.Fans(this);
  /**
   * APIs for managing OnlyFans followings (people you're subscribed to)
   */
  following: API.Following = new API.Following(this);
  /**
   * APIs for managing Free Trial Links
   */
  trialLinks: API.TrialLinks = new API.TrialLinks(this);
  giphy: API.Giphy = new API.Giphy(this);
  /**
   * APIs for managing tags on free trial links, tracking links, and Smart Links
   */
  linkTags: API.LinkTags = new API.LinkTags(this);
  massMessaging: API.MassMessaging = new API.MassMessaging(this);
  media: API.Media = new API.Media(this);
  /**
   * Endpoints for managingr account notifications
   */
  notifications: API.Notifications = new API.Notifications(this);
  payouts: API.Payouts = new API.Payouts(this);
  /**
   * APIs for managing OnlyFans posts
   */
  posts: API.Posts = new API.Posts(this);
  promotions: API.Promotions = new API.Promotions(this);
  profiles: API.Profiles = new API.Profiles(this);
  search: API.Search = new API.Search(this);
  queue: API.Queue = new API.Queue(this);
  /**
   * APIs for managing OnlyFans release forms
   */
  releaseForms: API.ReleaseForms = new API.ReleaseForms(this);
  savedForLater: API.SavedForLater = new API.SavedForLater(this);
  settings: API.Settings = new API.Settings(this);
  /**
   * APIs for Free Trial Links that other OF creators have shared with this account. Revenue, cost, and spender data are not available for shared links.
   */
  sharedTrialLinks: API.SharedTrialLinks = new API.SharedTrialLinks(this);
  /**
   * APIs for Tracking Links (campaigns) that other OF creators have shared with this account. Revenue, cost, and spender data are not available for shared campaigns.
   */
  sharedTrackingLinks: API.SharedTrackingLinks = new API.SharedTrackingLinks(this);
  /**
   * APIs for managing Smart Link postback destinations
   */
  smartLinkPostbacks: API.SmartLinkPostbacks = new API.SmartLinkPostbacks(this);
  /**
   * APIs for managing Smart Links (Free Trial Links and Tracking Links with pooled inventory)
   */
  smartLinks: API.SmartLinks = new API.SmartLinks(this);
  statistics: API.Statistics = new API.Statistics(this);
  subscribers: API.Subscribers = new API.Subscribers(this);
  stored: API.Stored = new API.Stored(this);
  /**
   * APIs for managing OnlyFans stories
   */
  stories: API.Stories = new API.Stories(this);
  bundles: API.Bundles = new API.Bundles(this);
  /**
   * APIs for managing tracking links
   */
  trackingLinks: API.TrackingLinks = new API.TrackingLinks(this);
  /**
   * APIs for managing OnlyFans transactions
   */
  transactions: API.Transactions = new API.Transactions(this);
  userLists: API.UserLists = new API.UserLists(this);
  /**
   * APIs for fetching OnlyFans users
   */
  users: API.Users = new API.Users(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
}

OnlyFansAPI.Whoami = Whoami;
OnlyFansAPI.Accounts = Accounts;
OnlyFansAPI.Me = Me;
OnlyFansAPI.Analytics = Analytics;
OnlyFansAPI.Banking = Banking;
OnlyFansAPI.Chargebacks = Chargebacks;
OnlyFansAPI.Chats = Chats;
OnlyFansAPI.Messages = Messages;
OnlyFansAPI.ClientSessions = ClientSessions;
OnlyFansAPI.Authenticate = Authenticate;
OnlyFansAPI.DataExports = DataExports;
OnlyFansAPI.Engagement = Engagement;
OnlyFansAPI.Fans = Fans;
OnlyFansAPI.Following = Following;
OnlyFansAPI.TrialLinks = TrialLinks;
OnlyFansAPI.Giphy = Giphy;
OnlyFansAPI.LinkTags = LinkTags;
OnlyFansAPI.MassMessaging = MassMessaging;
OnlyFansAPI.Media = Media;
OnlyFansAPI.Notifications = Notifications;
OnlyFansAPI.Payouts = Payouts;
OnlyFansAPI.Posts = Posts;
OnlyFansAPI.Promotions = Promotions;
OnlyFansAPI.Profiles = Profiles;
OnlyFansAPI.Search = Search;
OnlyFansAPI.Queue = Queue;
OnlyFansAPI.ReleaseForms = ReleaseForms;
OnlyFansAPI.SavedForLater = SavedForLater;
OnlyFansAPI.Settings = Settings;
OnlyFansAPI.SharedTrialLinks = SharedTrialLinks;
OnlyFansAPI.SharedTrackingLinks = SharedTrackingLinks;
OnlyFansAPI.SmartLinkPostbacks = SmartLinkPostbacks;
OnlyFansAPI.SmartLinks = SmartLinks;
OnlyFansAPI.Statistics = Statistics;
OnlyFansAPI.Subscribers = Subscribers;
OnlyFansAPI.Stored = Stored;
OnlyFansAPI.Stories = Stories;
OnlyFansAPI.Bundles = Bundles;
OnlyFansAPI.TrackingLinks = TrackingLinks;
OnlyFansAPI.Transactions = Transactions;
OnlyFansAPI.UserLists = UserLists;
OnlyFansAPI.Users = Users;
OnlyFansAPI.Webhooks = Webhooks;

export declare namespace OnlyFansAPI {
  export type RequestOptions = Opts.RequestOptions;

  export { Whoami as Whoami, type WhoamiRetrieveResponse as WhoamiRetrieveResponse };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountDisconnectResponse as AccountDisconnectResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeGetModelStartDateResponse as MeGetModelStartDateResponse,
    type MeGetTopPercentageResponse as MeGetTopPercentageResponse,
  };

  export { Analytics as Analytics };

  export {
    Banking as Banking,
    type BankingListAvailablePayoutSystemsResponse as BankingListAvailablePayoutSystemsResponse,
    type BankingListCountriesResponse as BankingListCountriesResponse,
  };

  export {
    Chargebacks as Chargebacks,
    type ChargebackListResponse as ChargebackListResponse,
    type ChargebackCalculateRatioResponse as ChargebackCalculateRatioResponse,
    type ChargebackListStatisticsResponse as ChargebackListStatisticsResponse,
    type ChargebackListParams as ChargebackListParams,
    type ChargebackCalculateRatioParams as ChargebackCalculateRatioParams,
    type ChargebackListStatisticsParams as ChargebackListStatisticsParams,
  };

  export {
    Chats as Chats,
    type ChatListResponse as ChatListResponse,
    type ChatDeleteResponse as ChatDeleteResponse,
    type ChatHideResponse as ChatHideResponse,
    type ChatListMediaResponse as ChatListMediaResponse,
    type ChatMarkAsReadResponse as ChatMarkAsReadResponse,
    type ChatMarkAsUnreadResponse as ChatMarkAsUnreadResponse,
    type ChatMuteResponse as ChatMuteResponse,
    type ChatStartTypingResponse as ChatStartTypingResponse,
    type ChatUnmuteResponse as ChatUnmuteResponse,
    type ChatListParams as ChatListParams,
    type ChatDeleteParams as ChatDeleteParams,
    type ChatHideParams as ChatHideParams,
    type ChatListMediaParams as ChatListMediaParams,
    type ChatMarkAsReadParams as ChatMarkAsReadParams,
    type ChatMarkAsUnreadParams as ChatMarkAsUnreadParams,
    type ChatMuteParams as ChatMuteParams,
    type ChatStartTypingParams as ChatStartTypingParams,
    type ChatUnmuteParams as ChatUnmuteParams,
  };

  export {
    Messages as Messages,
    type MessageAttachTagsResponse as MessageAttachTagsResponse,
    type MessageAttachTagsParams as MessageAttachTagsParams,
  };

  export {
    ClientSessions as ClientSessions,
    type ClientSessionCreateResponse as ClientSessionCreateResponse,
    type ClientSessionCreateParams as ClientSessionCreateParams,
  };

  export {
    Authenticate as Authenticate,
    type AuthenticatePollStatusResponse as AuthenticatePollStatusResponse,
    type AuthenticateReauthenticateResponse as AuthenticateReauthenticateResponse,
    type AuthenticateSend2faEmailResponse as AuthenticateSend2faEmailResponse,
    type AuthenticateStartResponse as AuthenticateStartResponse,
    type AuthenticateSubmit2faResponse as AuthenticateSubmit2faResponse,
    type AuthenticateStartParams as AuthenticateStartParams,
    type AuthenticateSubmit2faParams as AuthenticateSubmit2faParams,
  };

  export {
    DataExports as DataExports,
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

  export { Engagement as Engagement };

  export {
    Fans as Fans,
    type FanGetSubscriptionHistoryResponse as FanGetSubscriptionHistoryResponse,
    type FanListActiveResponse as FanListActiveResponse,
    type FanListAllResponse as FanListAllResponse,
    type FanListExpiredResponse as FanListExpiredResponse,
    type FanListLatestResponse as FanListLatestResponse,
    type FanListTopResponse as FanListTopResponse,
    type FanSetCustomNameResponse as FanSetCustomNameResponse,
    type FanGetSubscriptionHistoryParams as FanGetSubscriptionHistoryParams,
    type FanListActiveParams as FanListActiveParams,
    type FanListAllParams as FanListAllParams,
    type FanListExpiredParams as FanListExpiredParams,
    type FanListLatestParams as FanListLatestParams,
    type FanListTopParams as FanListTopParams,
    type FanSetCustomNameParams as FanSetCustomNameParams,
  };

  export {
    Following as Following,
    type FollowingListActiveResponse as FollowingListActiveResponse,
    type FollowingListAllResponse as FollowingListAllResponse,
    type FollowingListExpiredResponse as FollowingListExpiredResponse,
    type FollowingListActiveParams as FollowingListActiveParams,
    type FollowingListAllParams as FollowingListAllParams,
    type FollowingListExpiredParams as FollowingListExpiredParams,
  };

  export {
    TrialLinks as TrialLinks,
    type TrialLinkCreateResponse as TrialLinkCreateResponse,
    type TrialLinkRetrieveResponse as TrialLinkRetrieveResponse,
    type TrialLinkListResponse as TrialLinkListResponse,
    type TrialLinkDeleteResponse as TrialLinkDeleteResponse,
    type TrialLinkListSpendersResponse as TrialLinkListSpendersResponse,
    type TrialLinkListSubscribersResponse as TrialLinkListSubscribersResponse,
    type TrialLinkRetrieveStatsResponse as TrialLinkRetrieveStatsResponse,
    type TrialLinkCreateParams as TrialLinkCreateParams,
    type TrialLinkRetrieveParams as TrialLinkRetrieveParams,
    type TrialLinkListParams as TrialLinkListParams,
    type TrialLinkDeleteParams as TrialLinkDeleteParams,
    type TrialLinkListSpendersParams as TrialLinkListSpendersParams,
    type TrialLinkListSubscribersParams as TrialLinkListSubscribersParams,
    type TrialLinkRetrieveCohortArpsParams as TrialLinkRetrieveCohortArpsParams,
    type TrialLinkRetrieveStatsParams as TrialLinkRetrieveStatsParams,
  };

  export {
    Giphy as Giphy,
    type GiphyListTrendingResponse as GiphyListTrendingResponse,
    type GiphySearchResponse as GiphySearchResponse,
    type GiphyListTrendingParams as GiphyListTrendingParams,
    type GiphySearchParams as GiphySearchParams,
  };

  export {
    LinkTags as LinkTags,
    type LinkTagListResponse as LinkTagListResponse,
    type LinkTagListParams as LinkTagListParams,
  };

  export {
    MassMessaging as MassMessaging,
    type MassMessagingRetrieveResponse as MassMessagingRetrieveResponse,
    type MassMessagingUpdateResponse as MassMessagingUpdateResponse,
    type MassMessagingListResponse as MassMessagingListResponse,
    type MassMessagingDeleteResponse as MassMessagingDeleteResponse,
    type MassMessagingRetrieveOverviewResponse as MassMessagingRetrieveOverviewResponse,
    type MassMessagingSendResponse as MassMessagingSendResponse,
    type MassMessagingRetrieveParams as MassMessagingRetrieveParams,
    type MassMessagingUpdateParams as MassMessagingUpdateParams,
    type MassMessagingDeleteParams as MassMessagingDeleteParams,
    type MassMessagingRetrieveOverviewParams as MassMessagingRetrieveOverviewParams,
    type MassMessagingSendParams as MassMessagingSendParams,
  };

  export {
    Media as Media,
    type MediaScrapeResponse as MediaScrapeResponse,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaDownloadParams as MediaDownloadParams,
    type MediaScrapeParams as MediaScrapeParams,
    type MediaUploadParams as MediaUploadParams,
  };

  export {
    Notifications as Notifications,
    type NotificationListResponse as NotificationListResponse,
    type NotificationGetCountsResponse as NotificationGetCountsResponse,
    type NotificationMarkAllAsReadResponse as NotificationMarkAllAsReadResponse,
    type NotificationSearchUsersResponse as NotificationSearchUsersResponse,
    type NotificationListParams as NotificationListParams,
    type NotificationSearchUsersParams as NotificationSearchUsersParams,
  };

  export {
    Payouts as Payouts,
    type PayoutListRequestsResponse as PayoutListRequestsResponse,
    type PayoutRequestManualWithdrawalResponse as PayoutRequestManualWithdrawalResponse,
    type PayoutRetrieveBalancesResponse as PayoutRetrieveBalancesResponse,
    type PayoutRetrieveEarningStatisticsResponse as PayoutRetrieveEarningStatisticsResponse,
    type PayoutRetrieveEligibilityResponse as PayoutRetrieveEligibilityResponse,
    type PayoutUpdateFrequencyResponse as PayoutUpdateFrequencyResponse,
    type PayoutListRequestsParams as PayoutListRequestsParams,
    type PayoutRequestManualWithdrawalParams as PayoutRequestManualWithdrawalParams,
    type PayoutRetrieveEarningStatisticsParams as PayoutRetrieveEarningStatisticsParams,
    type PayoutUpdateFrequencyParams as PayoutUpdateFrequencyParams,
  };

  export {
    Posts as Posts,
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostDeleteResponse as PostDeleteResponse,
    type PostArchiveResponse as PostArchiveResponse,
    type PostPinResponse as PostPinResponse,
    type PostStatsResponse as PostStatsResponse,
    type PostUnarchiveResponse as PostUnarchiveResponse,
    type PostCreateParams as PostCreateParams,
    type PostRetrieveParams as PostRetrieveParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostArchiveParams as PostArchiveParams,
    type PostPinParams as PostPinParams,
    type PostStatsParams as PostStatsParams,
    type PostUnarchiveParams as PostUnarchiveParams,
  };

  export {
    Promotions as Promotions,
    type PromotionCreateResponse as PromotionCreateResponse,
    type PromotionListResponse as PromotionListResponse,
    type PromotionDeleteResponse as PromotionDeleteResponse,
    type PromotionStopResponse as PromotionStopResponse,
    type PromotionCreateParams as PromotionCreateParams,
    type PromotionListParams as PromotionListParams,
    type PromotionDeleteParams as PromotionDeleteParams,
    type PromotionStopParams as PromotionStopParams,
  };

  export {
    Profiles as Profiles,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileRetrieveParams as ProfileRetrieveParams,
  };

  export {
    Search as Search,
    type SearchProfilesResponse as SearchProfilesResponse,
    type SearchProfilesParams as SearchProfilesParams,
  };

  export {
    Queue as Queue,
    type QueueListResponse as QueueListResponse,
    type QueueCountResponse as QueueCountResponse,
    type QueuePublishResponse as QueuePublishResponse,
    type QueueListParams as QueueListParams,
    type QueueCountParams as QueueCountParams,
    type QueuePublishParams as QueuePublishParams,
  };

  export {
    ReleaseForms as ReleaseForms,
    type ReleaseFormCreateInvitationLinkResponse as ReleaseFormCreateInvitationLinkResponse,
    type ReleaseFormCreateReleaseFormResponse as ReleaseFormCreateReleaseFormResponse,
    type ReleaseFormListTaggableUsersResponse as ReleaseFormListTaggableUsersResponse,
    type ReleaseFormCreateInvitationLinkParams as ReleaseFormCreateInvitationLinkParams,
    type ReleaseFormCreateReleaseFormParams as ReleaseFormCreateReleaseFormParams,
    type ReleaseFormListTaggableUsersParams as ReleaseFormListTaggableUsersParams,
  };

  export { SavedForLater as SavedForLater };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingCheckUsernameAvailabilityResponse as SettingCheckUsernameAvailabilityResponse,
    type SettingUpdateProfileResponse as SettingUpdateProfileResponse,
    type SettingUpdateSubscriptionPriceResponse as SettingUpdateSubscriptionPriceResponse,
    type SettingCheckUsernameAvailabilityParams as SettingCheckUsernameAvailabilityParams,
    type SettingUpdateProfileParams as SettingUpdateProfileParams,
    type SettingUpdateSubscriptionPriceParams as SettingUpdateSubscriptionPriceParams,
  };

  export {
    SharedTrialLinks as SharedTrialLinks,
    type SharedTrialLinkListResponse as SharedTrialLinkListResponse,
    type SharedTrialLinkRevokeAccessResponse as SharedTrialLinkRevokeAccessResponse,
    type SharedTrialLinkListParams as SharedTrialLinkListParams,
    type SharedTrialLinkRevokeAccessParams as SharedTrialLinkRevokeAccessParams,
  };

  export {
    SharedTrackingLinks as SharedTrackingLinks,
    type SharedTrackingLinkListResponse as SharedTrackingLinkListResponse,
    type SharedTrackingLinkRevokeAccessResponse as SharedTrackingLinkRevokeAccessResponse,
    type SharedTrackingLinkListParams as SharedTrackingLinkListParams,
    type SharedTrackingLinkRevokeAccessParams as SharedTrackingLinkRevokeAccessParams,
  };

  export {
    SmartLinkPostbacks as SmartLinkPostbacks,
    type SmartLinkPostbackCreateResponse as SmartLinkPostbackCreateResponse,
    type SmartLinkPostbackRetrieveResponse as SmartLinkPostbackRetrieveResponse,
    type SmartLinkPostbackUpdateResponse as SmartLinkPostbackUpdateResponse,
    type SmartLinkPostbackListResponse as SmartLinkPostbackListResponse,
    type SmartLinkPostbackDeleteResponse as SmartLinkPostbackDeleteResponse,
    type SmartLinkPostbackCreateParams as SmartLinkPostbackCreateParams,
    type SmartLinkPostbackUpdateParams as SmartLinkPostbackUpdateParams,
  };

  export {
    SmartLinks as SmartLinks,
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

  export {
    Statistics as Statistics,
    type StatisticCalculateTotalTransactionsResponse as StatisticCalculateTotalTransactionsResponse,
    type StatisticGetOverviewResponse as StatisticGetOverviewResponse,
    type StatisticGetSubscriberMetricsResponse as StatisticGetSubscriberMetricsResponse,
    type StatisticCalculateTotalTransactionsParams as StatisticCalculateTotalTransactionsParams,
    type StatisticGetOverviewParams as StatisticGetOverviewParams,
    type StatisticGetSubscriberMetricsParams as StatisticGetSubscriberMetricsParams,
  };

  export {
    Subscribers as Subscribers,
    type SubscriberRetrieveStatisticsResponse as SubscriberRetrieveStatisticsResponse,
    type SubscriberRetrieveStatisticsParams as SubscriberRetrieveStatisticsParams,
  };

  export {
    Stored as Stored,
    type StoredListSharedTrackingLinksResponse as StoredListSharedTrackingLinksResponse,
    type StoredListSharedTrialLinksResponse as StoredListSharedTrialLinksResponse,
    type StoredListTrackingLinksResponse as StoredListTrackingLinksResponse,
    type StoredListTrialLinksResponse as StoredListTrialLinksResponse,
    type StoredListSharedTrackingLinksParams as StoredListSharedTrackingLinksParams,
    type StoredListSharedTrialLinksParams as StoredListSharedTrialLinksParams,
    type StoredListTrackingLinksParams as StoredListTrackingLinksParams,
    type StoredListTrialLinksParams as StoredListTrialLinksParams,
  };

  export {
    Stories as Stories,
    type StoryCreateResponse as StoryCreateResponse,
    type StoryRetrieveResponse as StoryRetrieveResponse,
    type StoryDeleteResponse as StoryDeleteResponse,
    type StoryListActiveResponse as StoryListActiveResponse,
    type StoryListArchiveResponse as StoryListArchiveResponse,
    type StoryListViewersResponse as StoryListViewersResponse,
    type StoryMarkAsWatchedResponse as StoryMarkAsWatchedResponse,
    type StoryRetrieveStatsResponse as StoryRetrieveStatsResponse,
    type StoryCreateParams as StoryCreateParams,
    type StoryRetrieveParams as StoryRetrieveParams,
    type StoryDeleteParams as StoryDeleteParams,
    type StoryListArchiveParams as StoryListArchiveParams,
    type StoryListViewersParams as StoryListViewersParams,
    type StoryMarkAsWatchedParams as StoryMarkAsWatchedParams,
    type StoryRetrieveStatsParams as StoryRetrieveStatsParams,
  };

  export {
    Bundles as Bundles,
    type BundleCreateResponse as BundleCreateResponse,
    type BundleListResponse as BundleListResponse,
    type BundleDeleteResponse as BundleDeleteResponse,
    type BundleCreateParams as BundleCreateParams,
    type BundleDeleteParams as BundleDeleteParams,
  };

  export {
    TrackingLinks as TrackingLinks,
    type TrackingLinkCreateResponse as TrackingLinkCreateResponse,
    type TrackingLinkRetrieveResponse as TrackingLinkRetrieveResponse,
    type TrackingLinkListResponse as TrackingLinkListResponse,
    type TrackingLinkDeleteResponse as TrackingLinkDeleteResponse,
    type TrackingLinkGetStatsResponse as TrackingLinkGetStatsResponse,
    type TrackingLinkListSpendersResponse as TrackingLinkListSpendersResponse,
    type TrackingLinkListSubscribersResponse as TrackingLinkListSubscribersResponse,
    type TrackingLinkCreateParams as TrackingLinkCreateParams,
    type TrackingLinkRetrieveParams as TrackingLinkRetrieveParams,
    type TrackingLinkListParams as TrackingLinkListParams,
    type TrackingLinkDeleteParams as TrackingLinkDeleteParams,
    type TrackingLinkGetCohortArpsParams as TrackingLinkGetCohortArpsParams,
    type TrackingLinkGetStatsParams as TrackingLinkGetStatsParams,
    type TrackingLinkListSpendersParams as TrackingLinkListSpendersParams,
    type TrackingLinkListSubscribersParams as TrackingLinkListSubscribersParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    UserLists as UserLists,
    type UserListCreateResponse as UserListCreateResponse,
    type UserListRetrieveResponse as UserListRetrieveResponse,
    type UserListUpdateResponse as UserListUpdateResponse,
    type UserListListResponse as UserListListResponse,
    type UserListDeleteResponse as UserListDeleteResponse,
    type UserListCreateParams as UserListCreateParams,
    type UserListRetrieveParams as UserListRetrieveParams,
    type UserListUpdateParams as UserListUpdateParams,
    type UserListListParams as UserListListParams,
    type UserListDeleteParams as UserListDeleteParams,
  };

  export {
    Users as Users,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
  };

  export {
    Webhooks as Webhooks,
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
