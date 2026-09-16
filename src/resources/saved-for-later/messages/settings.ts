// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Get the Saved For Later message settings.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.savedForLater.messages.settings.retrieve(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/api/${account}/saved-for-later/messages/settings`, options);
  }

  /**
   * Disable automatic messaging of Saved For Later messages.
   *
   * @example
   * ```ts
   * const response =
   *   await client.savedForLater.messages.settings.disableAutomaticMessaging(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  disableAutomaticMessaging(
    account: string,
    options?: RequestOptions,
  ): APIPromise<SettingDisableAutomaticMessagingResponse> {
    return this._client.patch(
      path`/api/${account}/saved-for-later/messages/settings/disable-automatic-messaging`,
      options,
    );
  }

  /**
   * Enable or update automatic messaging of Saved For Later messages.
   *
   * @example
   * ```ts
   * const response =
   *   await client.savedForLater.messages.settings.enableOrUpdateAutomaticMessaging(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { period: 48 },
   *   );
   * ```
   */
  enableOrUpdateAutomaticMessaging(
    account: string,
    body: SettingEnableOrUpdateAutomaticMessagingParams,
    options?: RequestOptions,
  ): APIPromise<SettingEnableOrUpdateAutomaticMessagingResponse> {
    return this._client.patch(
      path`/api/${account}/saved-for-later/messages/settings/enable-or-update-automatic-messaging`,
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

export interface SettingDisableAutomaticMessagingResponse {
  _meta?: SettingDisableAutomaticMessagingResponse._Meta;

  data?: Array<unknown>;
}

export namespace SettingDisableAutomaticMessagingResponse {
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

export interface SettingEnableOrUpdateAutomaticMessagingResponse {
  _meta?: SettingEnableOrUpdateAutomaticMessagingResponse._Meta;

  data?: SettingEnableOrUpdateAutomaticMessagingResponse.Data;
}

export namespace SettingEnableOrUpdateAutomaticMessagingResponse {
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

export interface SettingEnableOrUpdateAutomaticMessagingParams {
  /**
   * The automatic messaging interval (in hours)
   */
  period: 6 | 12 | 24 | 48;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingDisableAutomaticMessagingResponse as SettingDisableAutomaticMessagingResponse,
    type SettingEnableOrUpdateAutomaticMessagingResponse as SettingEnableOrUpdateAutomaticMessagingResponse,
    type SettingEnableOrUpdateAutomaticMessagingParams as SettingEnableOrUpdateAutomaticMessagingParams,
  };
}
