// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Profiles extends APIResource {
  /**
   * Get profile details by username.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.retrieve(
   *   'madison420ivy',
   * );
   * ```
   */
  retrieve(username: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/api/profiles/${username}`, options);
  }
}

export interface ProfileRetrieveResponse {
  _meta?: ProfileRetrieveResponse._Meta;

  data?: ProfileRetrieveResponse.Data;
}

export namespace ProfileRetrieveResponse {
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

    archivedPostsCount?: number;

    audiosCount?: number;

    avatar?: string;

    avatarHeaderConverterUpload?: boolean;

    avatarThumbs?: Data.AvatarThumbs;

    canAddSubscriber?: boolean;

    canChat?: boolean;

    canCommentStory?: boolean;

    canCreatePromotion?: boolean;

    canCreateTrial?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canPayInternal?: boolean;

    canReceiveChatMessage?: boolean;

    canReport?: boolean;

    canRestrict?: boolean;

    canTrialSend?: boolean;

    currentSubscribePrice?: string;

    favoritedCount?: number;

    favoritesCount?: number;

    firstPublishedPostDate?: string;

    hasLabels?: boolean;

    hasLinks?: boolean;

    hasNotViewedStory?: boolean;

    hasPinnedPosts?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    isAdultContent?: boolean;

    isBlocked?: boolean;

    isFriend?: boolean;

    isMarkdownDisabledForAbout?: boolean;

    isPerformer?: boolean;

    isPrivateRestriction?: boolean;

    isRealPerformer?: boolean;

    isReferrerAllowed?: boolean;

    isRestricted?: boolean;

    isSpotifyConnected?: boolean;

    isSpringConnected?: boolean;

    isVerified?: boolean;

    joinDate?: string;

    lastSeen?: string;

    location?: string;

    mediasCount?: number;

    name?: string;

    photosCount?: number;

    postsCount?: number;

    privateArchivedPostsCount?: number;

    referalBonusSummForReferer?: number;

    showMediaCount?: boolean;

    showPostsInFeed?: boolean;

    showSubscribersCount?: boolean;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: string;

    subscribedByData?: string;

    subscribedByExpire?: string;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: string;

    subscribedOn?: boolean;

    subscribedOnData?: string;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: string;

    subscribePrice?: number;

    subscribersCount?: string;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    username?: string;

    videosCount?: number;

    view?: string;

    website?: string;

    wishlist?: string;
  }

  export namespace Data {
    export interface AvatarThumbs {
      c144?: string;

      c50?: string;
    }

    export interface HeaderSize {
      height?: number;

      width?: number;
    }

    export interface HeaderThumbs {
      w480?: string;

      w760?: string;
    }
  }
}

export declare namespace Profiles {
  export { type ProfileRetrieveResponse as ProfileRetrieveResponse };
}
