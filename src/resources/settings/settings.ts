// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlockedCountriesAPI from './blocked-countries';
import {
  BlockedCountries,
  BlockedCountryRetrieveResponse,
  BlockedCountryUpdateParams,
  BlockedCountryUpdateResponse,
} from './blocked-countries';
import * as SocialMediaButtonsAPI from './social-media-buttons';
import {
  SocialMediaButtonAddParams,
  SocialMediaButtonAddResponse,
  SocialMediaButtonDeleteParams,
  SocialMediaButtonDeleteResponse,
  SocialMediaButtonListResponse,
  SocialMediaButtonReorderParams,
  SocialMediaButtonReorderResponse,
  SocialMediaButtonUpdateParams,
  SocialMediaButtonUpdateResponse,
  SocialMediaButtons,
} from './social-media-buttons';
import * as WelcomeMessageAPI from './welcome-message';
import {
  WelcomeMessage,
  WelcomeMessageRetrieveResponse,
  WelcomeMessageToggleParams,
  WelcomeMessageToggleResponse,
  WelcomeMessageUpdateParams,
  WelcomeMessageUpdateResponse,
} from './welcome-message';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  blockedCountries: BlockedCountriesAPI.BlockedCountries = new BlockedCountriesAPI.BlockedCountries(
    this._client,
  );
  welcomeMessage: WelcomeMessageAPI.WelcomeMessage = new WelcomeMessageAPI.WelcomeMessage(this._client);
  socialMediaButtons: SocialMediaButtonsAPI.SocialMediaButtons = new SocialMediaButtonsAPI.SocialMediaButtons(
    this._client,
  );

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
   * const response =
   *   await client.settings.checkUsernameAvailability(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { username: 'MyNewUsername' },
   *   );
   * ```
   */
  checkUsernameAvailability(
    account: string,
    body: SettingCheckUsernameAvailabilityParams,
    options?: RequestOptions,
  ): APIPromise<SettingCheckUsernameAvailabilityResponse> {
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

  /**
   * Update the account subscription price. Send `0` or `"free"` to make the account
   * free. ⚠️ WARNING! OnlyFans limits updating the subscription price to max. 3
   * times per day.
   *
   * @example
   * ```ts
   * const response =
   *   await client.settings.updateSubscriptionPrice(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { price: '4.99' },
   *   );
   * ```
   */
  updateSubscriptionPrice(
    account: string,
    body: SettingUpdateSubscriptionPriceParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateSubscriptionPriceResponse> {
    return this._client.patch(path`/api/${account}/settings/subscription-price`, { body, ...options });
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

export interface SettingCheckUsernameAvailabilityResponse {
  _meta?: SettingCheckUsernameAvailabilityResponse._Meta;

  data?: SettingCheckUsernameAvailabilityResponse.Data;
}

export namespace SettingCheckUsernameAvailabilityResponse {
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

export interface SettingUpdateSubscriptionPriceResponse {
  _meta?: SettingUpdateSubscriptionPriceResponse._Meta;

  data?: SettingUpdateSubscriptionPriceResponse.Data;
}

export namespace SettingUpdateSubscriptionPriceResponse {
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

export interface SettingCheckUsernameAvailabilityParams {
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

export interface SettingUpdateSubscriptionPriceParams {
  /**
   * The new subscription price. Accepts `0`, `"free"`, or a number between 4.99
   * and 200.
   */
  price: string;
}

Settings.BlockedCountries = BlockedCountries;
Settings.WelcomeMessage = WelcomeMessage;
Settings.SocialMediaButtons = SocialMediaButtons;

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingCheckUsernameAvailabilityResponse as SettingCheckUsernameAvailabilityResponse,
    type SettingUpdateProfileResponse as SettingUpdateProfileResponse,
    type SettingUpdateSubscriptionPriceResponse as SettingUpdateSubscriptionPriceResponse,
    type SettingCheckUsernameAvailabilityParams as SettingCheckUsernameAvailabilityParams,
    type SettingUpdateProfileParams as SettingUpdateProfileParams,
    type SettingUpdateSubscriptionPriceParams as SettingUpdateSubscriptionPriceParams,
  };

  export {
    BlockedCountries as BlockedCountries,
    type BlockedCountryRetrieveResponse as BlockedCountryRetrieveResponse,
    type BlockedCountryUpdateResponse as BlockedCountryUpdateResponse,
    type BlockedCountryUpdateParams as BlockedCountryUpdateParams,
  };

  export {
    WelcomeMessage as WelcomeMessage,
    type WelcomeMessageRetrieveResponse as WelcomeMessageRetrieveResponse,
    type WelcomeMessageUpdateResponse as WelcomeMessageUpdateResponse,
    type WelcomeMessageToggleResponse as WelcomeMessageToggleResponse,
    type WelcomeMessageUpdateParams as WelcomeMessageUpdateParams,
    type WelcomeMessageToggleParams as WelcomeMessageToggleParams,
  };

  export {
    SocialMediaButtons as SocialMediaButtons,
    type SocialMediaButtonUpdateResponse as SocialMediaButtonUpdateResponse,
    type SocialMediaButtonListResponse as SocialMediaButtonListResponse,
    type SocialMediaButtonDeleteResponse as SocialMediaButtonDeleteResponse,
    type SocialMediaButtonAddResponse as SocialMediaButtonAddResponse,
    type SocialMediaButtonReorderResponse as SocialMediaButtonReorderResponse,
    type SocialMediaButtonUpdateParams as SocialMediaButtonUpdateParams,
    type SocialMediaButtonDeleteParams as SocialMediaButtonDeleteParams,
    type SocialMediaButtonAddParams as SocialMediaButtonAddParams,
    type SocialMediaButtonReorderParams as SocialMediaButtonReorderParams,
  };
}
