// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for your linked accounts
 */
export class Accounts extends APIResource {
  /**
   * List all connected OnlyFans accounts.
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/api/accounts', { query, ...options });
  }

  /**
   * Disconnect an OnlyFans account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.disconnect(
   *   'incidunt',
   * );
   * ```
   */
  disconnect(id: string, options?: RequestOptions): APIPromise<AccountDisconnectResponse | null> {
    return this._client.delete(path`/api/accounts/${id}`, options);
  }
}

export type AccountListResponse = Array<AccountListResponse.AccountListResponseItem>;

export namespace AccountListResponse {
  export interface AccountListResponseItem {
    id?: string;

    authentication_progress?: string;

    display_name?: string;

    is_authenticated?: boolean;

    onlyfans_email?: string;

    onlyfans_id?: number;

    onlyfans_user_data?: AccountListResponseItem.OnlyfansUserData;

    onlyfans_username?: string;
  }

  export namespace AccountListResponseItem {
    export interface OnlyfansUserData {
      id?: number;

      about?: string;

      advBlock?: Array<string>;

      ageVerificationRequired?: boolean;

      archivedPostsCount?: number;

      audiosCount?: number;

      avatar?: string;

      avatarHeaderConverterUpload?: boolean;

      avatarThumbs?: OnlyfansUserData.AvatarThumbs;

      canAddCard?: boolean;

      canAlternativeWalletTopUp?: boolean;

      canChat?: boolean;

      canCommentStory?: boolean;

      canConnectOfAccount?: boolean;

      canCreateLists?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canPinPost?: boolean;

      canReceiveChatMessage?: boolean;

      canSendChatToAll?: boolean;

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

      hasInternalPayments?: boolean;

      hasLabels?: boolean;

      hasNewAlerts?: boolean;

      hasNewChangedPriceSubscriptions?: boolean;

      hasNewHints?: boolean;

      hasNewTicketReplies?: OnlyfansUserData.HasNewTicketReplies;

      hasNotViewedStory?: boolean;

      hasPinnedPosts?: boolean;

      hasPurchasedPosts?: boolean;

      hasScenario?: boolean;

      hasSystemNotifications?: boolean;

      hasTags?: boolean;

      hasWatermarkPhoto?: boolean;

      hasWatermarkVideo?: boolean;

      header?: string;

      headerSize?: OnlyfansUserData.HeaderSize;

      headerThumbs?: OnlyfansUserData.HeaderThumbs;

      ip?: string;

      isAgeVerified?: boolean;

      isAllowTweets?: boolean;

      isAuth?: boolean;

      isCreditsEnabled?: boolean;

      isDeleteInitiated?: boolean;

      isEmailChecked?: boolean;

      isEmailRequired?: boolean;

      isLegalApprovedAllowed?: boolean;

      isMakePayment?: boolean;

      isMarkdownDisabledForAbout?: boolean;

      isOtpEnabled?: boolean;

      isPaymentCardConnected?: boolean;

      isPaywallPassed?: boolean;

      isPerformer?: boolean;

      isRealCardConnected?: boolean;

      isRealPerformer?: boolean;

      isReferrerAllowed?: boolean;

      isSpotifyConnected?: boolean;

      isTwitterConnected?: boolean;

      isVerified?: boolean;

      isVisibleOnline?: boolean;

      isWalletAutorecharge?: boolean;

      isWantComments?: boolean;

      ivCountry?: string;

      ivFailReason?: string | null;

      ivFlow?: string;

      ivStatus?: string;

      joinDate?: string;

      lastSeen?: string;

      location?: string | null;

      maxPinnedPostsCount?: number;

      mediasCount?: number;

      name?: string;

      needIVApprove?: boolean;

      newTagsCount?: number;

      notificationsCount?: number;

      paidFeed?: boolean;

      payoutLegalApproveState?: string;

      photosCount?: number;

      pinnedPostsCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      showPostsInFeed?: boolean;

      subscribersCount?: number;

      subscribesCount?: number;

      twitterUsername?: string;

      upload?: OnlyfansUserData.Upload;

      username?: string;

      videosCount?: number;

      view?: string;

      walletAutorechargeAmount?: number;

      walletAutorechargeMin?: number;

      walletFirstRebills?: boolean;

      watermarkPosition?: string;

      watermarkText?: string;

      website?: string | null;

      wishlist?: string | null;

      wsAuthToken?: string;

      wsUrl?: string;
    }

    export namespace OnlyfansUserData {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface HasNewTicketReplies {
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
}

export type AccountDisconnectResponse = { [key: string]: unknown };

export interface AccountListParams {
  /**
   * Optionally, filter by the OnlyFans email
   */
  onlyfans_email?: string | null;

  /**
   * Optionally, filter by the OnlyFans ID
   */
  onlyfans_id?: string | null;

  /**
   * Optionally, filter by the OnlyFans username
   */
  onlyfans_username?: string | null;
}

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountDisconnectResponse as AccountDisconnectResponse,
    type AccountListParams as AccountListParams,
  };
}
