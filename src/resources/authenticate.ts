// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Authenticate extends APIResource {
  /**
   * Poll the status of the authentication process. Eg. if 2FA is required, we will
   * ask you for the code using the `twoFactorPending = true` in the response body.
   *
   * @example
   * ```ts
   * const response = await client.authenticate.pollStatus(
   *   'auth_XXXXXXX',
   * );
   * ```
   */
  pollStatus(attemptID: string, options?: RequestOptions): APIPromise<AuthenticatePollStatusResponse> {
    return this._client.get(path`/api/authenticate/${attemptID}`, options);
  }

  /**
   * Trigger account reauthentication without the need to submit email & password
   * again.
   *
   * @example
   * ```ts
   * await client.authenticate.reauthenticate('acct_XXXXXXXXXX');
   * ```
   */
  reauthenticate(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/authenticate/${accountID}/reauthenticate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Start the authentication process for a new account. Our systems will bypass
   * Captcha and also ask you for 2FA code if required. All credentials are stored
   * securely using bcrypt and only used during login.
   *
   * @example
   * ```ts
   * const response = await client.authenticate.start({
   *   email: 'jalyn75@example.net',
   *   password: 'vXIA}fx5Ek:',
   *   proxyCountry: 'pl',
   * });
   * ```
   */
  start(body: AuthenticateStartParams, options?: RequestOptions): APIPromise<AuthenticateStartResponse> {
    return this._client.post('/api/authenticate', { body, ...options });
  }

  /**
   * Submit the 2FA code for the authentication process.
   *
   * @example
   * ```ts
   * const response = await client.authenticate.submit2fa(
   *   'auth_XXXXXXX',
   *   { code: '12345' },
   * );
   * ```
   */
  submit2fa(
    attemptID: string,
    body: AuthenticateSubmit2faParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticateSubmit2faResponse> {
    return this._client.put(path`/api/authenticate/${attemptID}`, { body, ...options });
  }
}

export interface AuthenticatePollStatusResponse {
  account?: AuthenticatePollStatusResponse.Account;

  lastAttempt?: AuthenticatePollStatusResponse.LastAttempt;

  progress?: string;

  state?: string;
}

export namespace AuthenticatePollStatusResponse {
  export interface Account {
    id?: string;

    display_name?: string;

    onlyfans_data?: Account.OnlyfansData;
  }

  export namespace Account {
    export interface OnlyfansData {
      id?: number;

      about?: string;

      advBlock?: Array<string>;

      ageVerificationRequired?: boolean;

      ageVerificationSession?: OnlyfansData.AgeVerificationSession;

      archivedPostsCount?: number;

      audiosCount?: number;

      avatar?: string;

      avatarHeaderConverterUpload?: boolean;

      avatarThumbs?: string;

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

      hasNewTicketReplies?: OnlyfansData.HasNewTicketReplies;

      hasNotViewedStory?: boolean;

      hasPinnedPosts?: boolean;

      hasPurchasedPosts?: boolean;

      hasScenario?: boolean;

      hasSystemNotifications?: boolean;

      hasTags?: boolean;

      hasWatermarkPhoto?: boolean;

      hasWatermarkVideo?: boolean;

      header?: string;

      headerSize?: string;

      headerThumbs?: string;

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

      ivFailReason?: string;

      ivFlow?: string;

      ivStatus?: string;

      joinDate?: string;

      lastSeen?: string;

      location?: string;

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

      upload?: OnlyfansData.Upload;

      username?: string;

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

    export namespace OnlyfansData {
      export interface AgeVerificationSession {
        apiFlow?: string;

        expiredAt?: string;

        status?: string;

        url?: string;
      }

      export interface HasNewTicketReplies {
        closed?: boolean;

        open?: boolean;

        solved?: boolean;
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

  export interface LastAttempt {
    completed_at?: string;

    error_message?: string;

    needs_otp?: boolean;

    otp_phone_ending?: string;

    started_at?: string;

    success?: boolean;
  }
}

export interface AuthenticateStartResponse {
  attempt_id?: string;

  message?: string;

  polling_url?: string;
}

export interface AuthenticateSubmit2faResponse {
  message?: string;
}

export interface AuthenticateStartParams {
  /**
   * The email address of the OnlyFans account
   */
  email: string;

  /**
   * The password of the OnlyFans account
   */
  password: string;

  /**
   * The country of the proxy server you want to use. Eg. "us" for United States
   */
  proxyCountry: 'us' | 'uk' | 'de' | 'es' | 'fr' | 'it' | 'ua' | 'pl' | 'ro' | 'cz' | 'hu' | 'sk';
}

export interface AuthenticateSubmit2faParams {
  /**
   * The 2FA code you received on your phone
   */
  code: string;
}

export declare namespace Authenticate {
  export {
    type AuthenticatePollStatusResponse as AuthenticatePollStatusResponse,
    type AuthenticateStartResponse as AuthenticateStartResponse,
    type AuthenticateSubmit2faResponse as AuthenticateSubmit2faResponse,
    type AuthenticateStartParams as AuthenticateStartParams,
    type AuthenticateSubmit2faParams as AuthenticateSubmit2faParams,
  };
}
