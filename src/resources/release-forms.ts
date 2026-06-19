// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing OnlyFans release forms
 */
export class ReleaseForms extends APIResource {
  /**
   * Create a new invitation link for release forms.
   *
   * @example
   * ```ts
   * const response =
   *   await client.releaseForms.createInvitationLink(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { name: 'Collab Sebastian - 24/7' },
   *   );
   * ```
   */
  createInvitationLink(
    account: string,
    body: ReleaseFormCreateInvitationLinkParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseFormCreateInvitationLinkResponse> {
    return this._client.post(path`/api/${account}/release-forms/create-invitation-link`, {
      body,
      ...options,
    });
  }

  /**
   * Create a new release form link.
   *
   * @example
   * ```ts
   * const response =
   *   await client.releaseForms.createReleaseForm(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { name: 'Example Release Form' },
   *   );
   * ```
   */
  createReleaseForm(
    account: string,
    body: ReleaseFormCreateReleaseFormParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseFormCreateReleaseFormResponse> {
    return this._client.post(path`/api/${account}/release-forms/create-release-form`, { body, ...options });
  }

  /**
   * Get a paginated list of users that can be tagged in release forms. These are
   * verified creators who have signed release forms to appear in your content. Use
   * `offset` and `limit` for pagination, following `_pagination.next_page` until it
   * is `null`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.releaseForms.listTaggableUsers(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  listTaggableUsers(
    account: string,
    query: ReleaseFormListTaggableUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReleaseFormListTaggableUsersResponse> {
    return this._client.get(path`/api/${account}/release-forms/taggable-users`, { query, ...options });
  }
}

export interface ReleaseFormCreateInvitationLinkResponse {
  _meta?: ReleaseFormCreateInvitationLinkResponse._Meta;

  data?: ReleaseFormCreateInvitationLinkResponse.Data;
}

export namespace ReleaseFormCreateInvitationLinkResponse {
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

    token?: string;

    date?: string;

    invitationUrl?: string;

    name?: string;

    type?: string;

    user?: Data.User;
  }

  export namespace Data {
    export interface User {
      id?: number;

      avatar?: string;

      avatarThumbs?: User.AvatarThumbs;

      isActive?: boolean;

      isDeleted?: boolean;

      isVerified?: boolean;

      name?: string;

      username?: string;

      view?: string;
    }

    export namespace User {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }
    }
  }
}

export interface ReleaseFormCreateReleaseFormResponse {
  _meta?: ReleaseFormCreateReleaseFormResponse._Meta;

  data?: ReleaseFormCreateReleaseFormResponse.Data;
}

export namespace ReleaseFormCreateReleaseFormResponse {
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

    approvedAt?: string | null;

    code?: string;

    createdAt?: string;

    name?: string;

    signature?: string;

    signed?: Array<unknown>;

    signersCount?: number;

    submissionUrl?: string;

    type?: string;

    user?: Data.User;
  }

  export namespace Data {
    export interface User {
      id?: number;

      avatar?: string;

      avatarThumbs?: User.AvatarThumbs;

      canPayInternal?: boolean;

      canTrialSend?: boolean;

      header?: string;

      headerSize?: User.HeaderSize;

      headerThumbs?: User.HeaderThumbs;

      isVerified?: boolean;

      name?: string;

      subscribePrice?: number;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      username?: string;

      view?: string;
    }

    export namespace User {
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
}

export interface ReleaseFormListTaggableUsersResponse {
  _meta?: ReleaseFormListTaggableUsersResponse._Meta;

  _pagination?: ReleaseFormListTaggableUsersResponse._Pagination;

  data?: ReleaseFormListTaggableUsersResponse.Data;
}

export namespace ReleaseFormListTaggableUsersResponse {
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

  export interface _Pagination {
    next_page?: string;

    notice?: string;
  }

  export interface Data {
    items?: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      id?: number;

      name?: string;

      type?: string;

      user?: Item.User;
    }

    export namespace Item {
      export interface User {
        id?: number;

        avatar?: string;

        avatarThumbs?: User.AvatarThumbs;

        hiddenForRf?: boolean;

        isFromGuest?: boolean;

        isVerified?: boolean;

        ivStatus?: string;

        name?: string;

        username?: string;

        view?: string;
      }

      export namespace User {
        export interface AvatarThumbs {
          c144?: string;

          c50?: string;
        }
      }
    }
  }
}

export interface ReleaseFormCreateInvitationLinkParams {
  /**
   * The name of the invitation link.
   */
  name: string;
}

export interface ReleaseFormCreateReleaseFormParams {
  /**
   * The name of the release form.
   */
  name: string;
}

export interface ReleaseFormListTaggableUsersParams {
  /**
   * Filter users by type: `all` or `pending`.
   */
  filter?: 'all' | 'pending' | null;

  /**
   * Number of users to return per page (1-50). Must be at least 1. Must not be
   * greater than 50.
   */
  limit?: number;

  /**
   * Filter users by name or username.
   */
  name?: string | null;

  /**
   * Number of users to skip for pagination. Must be at least 0.
   */
  offset?: number;

  /**
   * Sort field: `date` or `name`.
   */
  sort?: 'date' | 'name' | null;

  /**
   * Sort direction: `desc` or `asc`.
   */
  sortDirection?: 'desc' | 'asc' | null;
}

export declare namespace ReleaseForms {
  export {
    type ReleaseFormCreateInvitationLinkResponse as ReleaseFormCreateInvitationLinkResponse,
    type ReleaseFormCreateReleaseFormResponse as ReleaseFormCreateReleaseFormResponse,
    type ReleaseFormListTaggableUsersResponse as ReleaseFormListTaggableUsersResponse,
    type ReleaseFormCreateInvitationLinkParams as ReleaseFormCreateInvitationLinkParams,
    type ReleaseFormCreateReleaseFormParams as ReleaseFormCreateReleaseFormParams,
    type ReleaseFormListTaggableUsersParams as ReleaseFormListTaggableUsersParams,
  };
}
