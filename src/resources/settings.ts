// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Returns the account settings
   *
   * @example
   * ```ts
   * const setting = await client.settings.retrieve(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/api/${account}/settings`, options);
  }

  /**
   * Check if a username is taken. Returns `false` if the username is available,
   * `true` if it is already taken.
   *
   * @example
   * ```ts
   * const response = await client.settings.checkUsernameExists(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { username: 'MyNewUsername' },
   * );
   * ```
   */
  checkUsernameExists(
    account: string,
    body: SettingCheckUsernameExistsParams,
    options?: RequestOptions,
  ): APIPromise<SettingCheckUsernameExistsResponse> {
    return this._client.post(path`/api/${account}/settings/username-exists`, { body, ...options });
  }

  /**
   * Updates the account profile. **Only include the fields you want to update.** To
   * make a field empty, set it to `null`.
   *
   * @example
   * ```ts
   * const response = await client.settings.updateProfile(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  updateProfile(
    account: string,
    body: SettingUpdateProfileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettingUpdateProfileResponse> {
    return this._client.post(path`/api/${account}/settings/profile`, { body, ...options });
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
    activityHubAllowed?: boolean;

    activityHubTokens?: Array<unknown>;

    appOtp?: boolean;

    avatarHeaderConverterUpload?: boolean;

    blockedCountries?: Array<unknown>;

    blockedIps?: Array<unknown>;

    blockedStates?: Array<unknown>;

    bundleMaxPrice?: number;

    canAcceptMessageOnlyFromFriends?: boolean;

    canAddPhone?: boolean;

    canAddSubscriberByBundle?: Data.CanAddSubscriberByBundle;

    canMakeProfileLinks?: boolean;

    canSocialsConnect?: boolean;

    changeEmailStep?: string | null;

    changelogUpdates?: number;

    commentsOnlyForPayers?: boolean;

    confirmEmailSentAt?: string;

    coStreamingRequestFrom?: string;

    creatorsCommentsOnlyForFriends?: boolean;

    disableSubscribesOffers?: boolean;

    faceOtp?: boolean;

    forceFaceOtp?: boolean;

    hasPaidPosts?: boolean;

    hasPassword?: boolean;

    hideAfterMassMessages?: boolean;

    importantSubscriptionNotifications?: boolean;

    isAutoFollowBack?: boolean;

    isCoStreamingAllowed?: boolean;

    isDeleteInitiated?: boolean;

    isDrmEnabled?: boolean;

    isEmailNotificationsEnabled?: boolean;

    isMonthlyNewsletters?: boolean;

    isOldLoginRedirect?: boolean;

    isOpenseaConnected?: boolean;

    isOtpAppConnected?: boolean;

    isPrivate?: boolean;

    isSuggestionsOptOut?: boolean;

    isTelegramConnected?: boolean;

    lastSubscriptionExpiredAt?: string | null;

    lifeTimeEmailCode?: string | null;

    muteTagsInChats?: boolean;

    muteTagsInPosts?: boolean;

    muteTagsInStories?: boolean;

    muteTagsInStreams?: boolean;

    newEmail?: string | null;

    notifyOnAllMentions?: boolean;

    phoneLast4?: string | null;

    phoneOtp?: boolean;

    recommenderReward?: string | null;

    replyOnSubscribe?: boolean;

    sendAwardsTop1?: boolean;

    sendAwardsTop5?: boolean;

    shouldReceiveLessNotifications?: boolean;

    showFriendsToSubscribers?: boolean;

    showFullTextInEmailNotify?: boolean;

    showPostsTips?: boolean;

    showSubscribesOffers?: boolean;

    socialsConnects?: Array<unknown>;

    streamingMuxKey?: string | null;

    streamingMuxKeyExpiredAt?: string | null;

    streamingMuxServer?: string;

    streamingObsKey?: string;

    streamingObsServer?: string;

    streamingRtmpKey?: string;

    streamingRtmpServer?: string;

    strongOtp?: boolean;

    unfollowAutoFollowBack?: boolean;
  }

  export namespace Data {
    export interface CanAddSubscriberByBundle {
      discounts?: CanAddSubscriberByBundle.Discounts;

      durations?: CanAddSubscriberByBundle.Durations;
    }

    export namespace CanAddSubscriberByBundle {
      export interface Discounts {
        '0'?: string;

        '10'?: string;

        '15'?: string;

        '20'?: string;

        '25'?: string;

        '30'?: string;

        '35'?: string;

        '40'?: string;

        '45'?: string;

        '5'?: string;

        '50'?: string;
      }

      export interface Durations {
        '12'?: string;

        '3'?: string;

        '6'?: string;
      }
    }
  }
}

export interface SettingCheckUsernameExistsResponse {
  _meta?: SettingCheckUsernameExistsResponse._Meta;

  data?: SettingCheckUsernameExistsResponse.Data;
}

export namespace SettingCheckUsernameExistsResponse {
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

export interface SettingUpdateProfileResponse {
  _meta?: SettingUpdateProfileResponse._Meta;

  data?: SettingUpdateProfileResponse.Data;
}

export namespace SettingUpdateProfileResponse {
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

export interface SettingCheckUsernameExistsParams {
  /**
   * The username to check.
   */
  username: string;
}

export interface SettingUpdateProfileParams {
  /**
   * The new bio to use. Set to `null` to empty it.
   */
  about?: string | null;

  /**
   * The new avatar to use. Must be a `ofapi_media_` ID. Refer to our `/media/upload`
   * endpoint on how to get this.
   */
  avatar?: string;

  /**
   * The new header (banner) to use. Must be a `ofapi_media_` ID. Refer to our
   * `/media/upload` endpoint on how to get this.
   */
  header?: string;

  /**
   * The new location to use. Set to `null` to empty it.
   */
  location?: string | null;

  /**
   * The new display name to use. Set to `null` to use the default display name.
   */
  name?: string | null;

  /**
   * The new username to use. Make sure to first check if it exists using our
   * `/settings/username-exists` endpoint.
   */
  username?: string;

  /**
   * The new website URL to use. Must be a valid URL. Set to `null` to empty it.
   */
  website?: string | null;

  /**
   * The new Amazon Wishlist URL to use. Must be a valid URL. Set to `null` to empty
   * it.
   */
  wishlist?: string | null;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingCheckUsernameExistsResponse as SettingCheckUsernameExistsResponse,
    type SettingUpdateProfileResponse as SettingUpdateProfileResponse,
    type SettingCheckUsernameExistsParams as SettingCheckUsernameExistsParams,
    type SettingUpdateProfileParams as SettingUpdateProfileParams,
  };
}
