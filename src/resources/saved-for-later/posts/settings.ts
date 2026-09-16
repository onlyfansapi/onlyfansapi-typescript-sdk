// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Get the Saved For Later post settings.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.savedForLater.posts.settings.retrieve(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/api/${account}/saved-for-later/posts/settings`, options);
  }

  /**
   * Disable automatic posting of Saved For Later posts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.savedForLater.posts.settings.disableAutomaticPosting(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  disableAutomaticPosting(
    account: string,
    options?: RequestOptions,
  ): APIPromise<SettingDisableAutomaticPostingResponse> {
    return this._client.patch(
      path`/api/${account}/saved-for-later/posts/settings/disable-automatic-posting`,
      options,
    );
  }

  /**
   * Enable or update automatic posting of Saved For Later posts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.savedForLater.posts.settings.enableOrUpdateAutomaticPosting(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { period: 48 },
   *   );
   * ```
   */
  enableOrUpdateAutomaticPosting(
    account: string,
    body: SettingEnableOrUpdateAutomaticPostingParams,
    options?: RequestOptions,
  ): APIPromise<SettingEnableOrUpdateAutomaticPostingResponse> {
    return this._client.patch(
      path`/api/${account}/saved-for-later/posts/settings/enable-or-update-automatic-posting`,
      { body, ...options },
    );
  }
}

export interface SettingRetrieveResponse {
  _meta?: SettingRetrieveResponse._Meta;

  data?: SettingRetrieveResponse.Data;
}

export namespace SettingRetrieveResponse {
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
    currentCode?: number;

    isEnabled?: boolean;

    options?: Array<number>;
  }
}

export interface SettingDisableAutomaticPostingResponse {
  _meta?: SettingDisableAutomaticPostingResponse._Meta;

  data?: Array<unknown>;
}

export namespace SettingDisableAutomaticPostingResponse {
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
}

export interface SettingEnableOrUpdateAutomaticPostingResponse {
  _meta?: SettingEnableOrUpdateAutomaticPostingResponse._Meta;

  data?: SettingEnableOrUpdateAutomaticPostingResponse.Data;
}

export namespace SettingEnableOrUpdateAutomaticPostingResponse {
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
    period?: number;
  }
}

export interface SettingEnableOrUpdateAutomaticPostingParams {
  /**
   * The automatic posting interval (in hours)
   */
  period: 6 | 12 | 24 | 48;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingDisableAutomaticPostingResponse as SettingDisableAutomaticPostingResponse,
    type SettingEnableOrUpdateAutomaticPostingResponse as SettingEnableOrUpdateAutomaticPostingResponse,
    type SettingEnableOrUpdateAutomaticPostingParams as SettingEnableOrUpdateAutomaticPostingParams,
  };
}
