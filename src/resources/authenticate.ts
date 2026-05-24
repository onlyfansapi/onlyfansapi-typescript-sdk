// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Authenticate extends APIResource {
  /**
   * Poll the status of the authentication process. Eg. if 2FA is required, we will
   * ask you for the code using the `twoFactorPending = true` in the response body.
   * For `mobile_app` auth, the response includes `mobile_auth_session_deeplink`
   * while the session is pending.
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
   * const response = await client.authenticate.reauthenticate(
   *   'acct_XXXXXXXXXX',
   * );
   * ```
   */
  reauthenticate(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AuthenticateReauthenticateResponse> {
    return this._client.post(path`/api/authenticate/${accountID}/reauthenticate`, options);
  }

  /**
   * Start the authentication process for a new account. Supports three methods:
   * email/password (default), cookies & headers (raw_data), or FansAPI Auth+ mobile
   * app (mobile_app). For email/password, our systems will bypass Captcha and ask
   * you for 2FA if required. For raw_data, provide session cookies directly for
   * instant authentication. For mobile_app, the response includes a
   * `mobile_auth_session_deeplink` that the creator opens on their phone (or scans
   * as a QR code) to complete authentication via the FansAPI Auth+ mobile app. All
   * credentials are stored securely and encrypted at rest.
   *
   * @example
   * ```ts
   * const response = await client.authenticate.start();
   * ```
   */
  start(
    body: AuthenticateStartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthenticateStartResponse> {
    return this._client.post('/api/authenticate', { body, ...options });
  }

  /**
   * Submit the 2FA code, or Selfie Verification status, for the authentication
   * process.
   *
   * @example
   * ```ts
   * const response = await client.authenticate.submit2fa(
   *   'auth_XXXXXXX',
   * );
   * ```
   */
  submit2fa(
    attemptID: string,
    body: AuthenticateSubmit2faParams | null | undefined = {},
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

      about?: string | null;

      advBlock?: Array<string>;

      ageVerificationRequired?: boolean;

      ageVerificationSession?: OnlyfansData.AgeVerificationSession;

      archivedPostsCount?: number;

      audiosCount?: number;

      avatar?: string | null;

      avatarHeaderConverterUpload?: boolean;

      avatarThumbs?: string | null;

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

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

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

      ivCountry?: string | null;

      ivFailReason?: string;

      ivFlow?: string;

      ivStatus?: string | null;

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

      twitterUsername?: string | null;

      upload?: OnlyfansData.Upload;

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

    error_code?: string | null;

    error_message?: string | null;

    needs_otp?: boolean;

    otp_phone_ending?: string | null;

    started_at?: string;

    success?: boolean;
  }
}

export interface AuthenticateReauthenticateResponse {
  message?: string;

  polling_url?: string;

  success?: boolean;
}

/**
 * For email_password or raw_data auth types
 */
export type AuthenticateStartResponse =
  | AuthenticateStartResponse.UnionMember0
  | AuthenticateStartResponse.UnionMember1;

export namespace AuthenticateStartResponse {
  /**
   * For email_password or raw_data auth types
   */
  export interface UnionMember0 {
    attempt_id?: string;

    message?: string;

    polling_url?: string;
  }

  /**
   * For mobile_app auth type — includes the session code to scan with the FansAPI
   * Auth+ app
   */
  export interface UnionMember1 {
    attempt_id?: string;

    message?: string;

    mobile_auth_session_deeplink?: string;

    polling_url?: string;
  }
}

export interface AuthenticateSubmit2faResponse {
  message?: string;
}

export interface AuthenticateStartParams {
  /**
   * The auth_id from OnlyFans session cookies. Required when auth_type is
   * `raw_data`.
   */
  auth_id?: string;

  /**
   * The authentication method to use. Defaults to `email_password` if omitted. Use
   * `mobile_app` to authenticate via the FansAPI Auth+ mobile app (no credential
   * fields required).
   */
  auth_type?: 'email_password' | 'raw_data' | 'mobile_app';

  /**
   * The full cookie string (semicolon-separated). Required when auth_type is
   * `raw_data`.
   */
  cookies?: string;

  /**
   * Custom proxy configuration. Cannot be used together with proxyCountry.
   */
  customProxy?: AuthenticateStartParams.CustomProxy;

  /**
   * The email address of the OnlyFans account. Required when auth_type is
   * `email_password`.
   */
  email?: string;

  /**
   * Set to true to connect the account even if it already exists
   */
  force_connect?: boolean;

  /**
   * A display name for the account. If omitted, defaults to the email address or
   * auth_id.
   */
  name?: string;

  /**
   * The password of the OnlyFans account. Required when auth_type is
   * `email_password`.
   */
  password?: string;

  /**
   * The country of the managed proxy server you want to use. Eg. "us" for United
   * States. Cannot be used together with customProxy.
   */
  proxyCountry?: 'us' | 'uk';

  /**
   * The browser User-Agent string. Required when auth_type is `raw_data`.
   */
  user_agent?: string;

  /**
   * The X-BC token from request headers. Required when auth_type is `raw_data`.
   */
  xbc?: string;
}

export namespace AuthenticateStartParams {
  /**
   * Custom proxy configuration. Cannot be used together with proxyCountry.
   */
  export interface CustomProxy {
    /**
     * The hostname or IP address of your custom proxy server
     */
    host?: string;

    /**
     * The password for proxy authentication (optional)
     */
    password?: string;

    /**
     * The port number of your custom proxy server (1-65535)
     */
    port?: number;

    /**
     * The username for proxy authentication (optional)
     */
    username?: string;
  }
}

export interface AuthenticateSubmit2faParams {
  /**
   * The 2FA code you received on your phone. Must be empty if
   * `selfie_verification_completed` is `true`.
   */
  code?: string;

  /**
   * This field is required when <code>code</code> is not present.
   */
  selfie_verification_completed?;
}

export declare namespace Authenticate {
  export {
    type AuthenticatePollStatusResponse as AuthenticatePollStatusResponse,
    type AuthenticateReauthenticateResponse as AuthenticateReauthenticateResponse,
    type AuthenticateStartResponse as AuthenticateStartResponse,
    type AuthenticateSubmit2faResponse as AuthenticateSubmit2faResponse,
    type AuthenticateStartParams as AuthenticateStartParams,
    type AuthenticateSubmit2faParams as AuthenticateSubmit2faParams,
  };
}
