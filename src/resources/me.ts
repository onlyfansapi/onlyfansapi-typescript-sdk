// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for your linked accounts
 */
export class Me extends APIResource {
  /**
   * Get OnlyFans Profile details for the currently used Account
   *
   * @example
   * ```ts
   * const me = await client.me.retrieve('acct_XXXXXXXXXXXXXXX');
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get(path`/api/${account}/me`, options);
  }

  /**
   * Get the start date of the model (the date+time monetization was enabled)
   *
   * @example
   * ```ts
   * const response = await client.me.getModelStartDate(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  getModelStartDate(account: string, options?: RequestOptions): APIPromise<MeGetModelStartDateResponse> {
    return this._client.get(path`/api/${account}/me/model-start-date`, options);
  }
}

export interface MeRetrieveResponse {
  _meta?: MeRetrieveResponse._Meta;

  data?: MeRetrieveResponse.Data;
}

export namespace MeRetrieveResponse {
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
    id?: number;

    about?: string;

    advBlock?: Array<string>;

    ageVerificationRequired?: boolean;

    archivedPostsCount?: number;

    audiosCount?: number;

    avatar?: string;

    avatarHeaderConverterUpload?: boolean;

    avatarThumbs?: Data.AvatarThumbs;

    canAddCard?: boolean;

    canAddStory?: boolean;

    canAddSubscriber?: boolean;

    canAlternativeWalletTopUp?: boolean;

    canChangeContentPrice?: boolean;

    canChat?: boolean;

    canCommentStory?: boolean;

    canConnectOfAccount?: boolean;

    canCreateFundRaising?: boolean;

    canCreateLists?: boolean;

    canCreatePromotion?: boolean;

    canCreateTrial?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canMakeExpirePosts?: boolean;

    canPayInternal?: boolean;

    canPinPost?: boolean;

    canReceiveChatMessage?: boolean;

    canReceiveManualPayout?: boolean;

    canReceiveStripePayout?: boolean;

    canSendChatToAll?: boolean;

    canStreaming?: boolean;

    canTrialSend?: boolean;

    chatMessagesCount?: number;

    connectedOfAccounts?: Array<unknown>;

    countPinnedChat?: number;

    countPriorityChat?: number;

    creditBalance?: number;

    creditsMax?: number;

    creditsMin?: number;

    csrf?: string;

    email?: string;

    enabledImageEditorForChat?: boolean;

    faceIdRegular?: Array<unknown>;

    favoritedCount?: number;

    favoritesCount?: number;

    firstPublishedPostDate?: string;

    hasFriends?: boolean;

    hasInternalPayments?: boolean;

    hasLabels?: boolean;

    hasLinks?: boolean;

    hasNewAlerts?: boolean;

    hasNewChangedPriceSubscriptions?: boolean;

    hasNewHints?: boolean;

    hasNewTicketReplies?: Data.HasNewTicketReplies;

    hasNotViewedStory?: boolean;

    hasPinnedPosts?: boolean;

    hasPurchasedPosts?: boolean;

    hasScenario?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    hasStripe?: boolean;

    hasSystemNotifications?: boolean;

    hasTags?: boolean;

    hasWatermarkPhoto?: boolean;

    hasWatermarkVideo?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    ip?: string;

    isAdultContent?: boolean;

    isAgeVerified?: boolean;

    isAllowTweets?: boolean;

    isAuth?: boolean;

    isCountryVatNumberCollect?: boolean;

    isCountryVatRefundable?: boolean;

    isCountryWithVat?: boolean;

    isCreditsEnabled?: boolean;

    isDeleteInitiated?: boolean;

    isEmailChecked?: boolean;

    isEmailRequired?: boolean;

    isLegalApprovedAllowed?: boolean;

    isMakePayment?: boolean;

    isMarkdownDisabledForAbout?: boolean;

    isNeedConfirmPayout?: boolean;

    isOtpEnabled?: boolean;

    isPaymentCardConnected?: boolean;

    isPaywallPassed?: boolean;

    isPerformer?: boolean;

    isPrivateRestriction?: boolean;

    isRealCardConnected?: boolean;

    isRealPerformer?: boolean;

    isReferrerAllowed?: boolean;

    isScheduledStreamsAllowed?: boolean;

    isSpotifyConnected?: boolean;

    isSpringConnected?: boolean;

    isStripeExist?: boolean;

    isTwitterConnected?: boolean;

    isVatRequired?: boolean;

    isVerified?: boolean;

    isVerifiedReason?: boolean;

    isVisibleOnline?: boolean;

    isWalletAutorecharge?: boolean;

    isWantComments?: boolean;

    ivCountry?: string;

    ivFailReason?: string;

    ivFlow?: string;

    ivHideForPerformers?: boolean;

    ivStatus?: string;

    joinDate?: string;

    lastSeen?: string;

    location?: string;

    maxFundRaisingTarget?: number;

    maxPinnedPostsCount?: number;

    mediasCount?: number;

    messageMaxPrice?: number;

    messageMinPrice?: number;

    minFundRaisingTarget?: number;

    name?: string;

    needIVApprove?: boolean;

    newTagsCount?: number;

    notificationsCount?: number;

    paidFeed?: boolean;

    payoutLegalApproveState?: string;

    payoutType?: string;

    photosCount?: number;

    pinnedPostsCount?: number;

    postMaxPrice?: number;

    postMinPrice?: number;

    postsCount?: number;

    privateArchivedPostsCount?: number;

    showMediaCount?: boolean;

    showPostsInFeed?: boolean;

    showSubscribersCount?: boolean;

    subscribedByData?: string;

    subscribedOnData?: string;

    subscribeMaxPrice?: number;

    subscribeMinPrice?: number;

    subscribePrice?: number;

    subscribersCount?: number;

    subscribesCount?: number;

    subscriptionBundles?: Array<unknown>;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    trialMaxDays?: number;

    trialMaxExpiresDays?: number;

    twitterUsername?: string;

    unreadTips?: number;

    upload?: Data.Upload;

    username?: string;

    vatNumberName?: string;

    videosCount?: number;

    view?: string;

    walletAutorechargeAmount?: number;

    walletAutorechargeMin?: number;

    walletFirstRebills?: boolean;

    watermarkPosition?: string;

    watermarkText?: string;

    website?: string;

    wishlist?: string;

    wsAuthToken?: string;

    wsUrl?: string;
  }

  export namespace Data {
    export interface AvatarThumbs {
      c144?: string;

      c50?: string;
    }

    export interface HasNewTicketReplies {
      appeal_form?: boolean;

      closed?: boolean;

      open?: boolean;

      solved?: boolean;
    }

    export interface HeaderSize {
      height?: number;

      width?: number;
    }

    export interface HeaderThumbs {
      w480?: string;

      w760?: string;
    }

    export interface Upload {
      geoUploadArgs?: Upload.GeoUploadArgs;
    }

    export namespace Upload {
      export interface GeoUploadArgs {
        additional?: GeoUploadArgs.Additional;

        isDelay?: boolean;

        needThumbs?: boolean;

        preset?: string;

        preset_png?: string;

        protected_preset?: string;
      }

      export namespace GeoUploadArgs {
        export interface Additional {
          user?: string;
        }
      }
    }
  }
}

export interface MeGetModelStartDateResponse {
  _meta?: MeGetModelStartDateResponse._Meta;

  data?: MeGetModelStartDateResponse.Data;
}

export namespace MeGetModelStartDateResponse {
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
    startDate?: string;
  }
}

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeGetModelStartDateResponse as MeGetModelStartDateResponse,
  };
}
