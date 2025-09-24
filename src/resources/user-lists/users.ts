// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Add multiple Users To OnlyFans User List
   *
   * @example
   * ```ts
   * const response = await client.userLists.users.add(
   *   1224114714,
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     ids: ['string', 'string', 'string'],
   *   },
   * );
   * ```
   */
  add(userListID: number, params: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/user-lists/${userListID}/users`, { body, ...options });
  }

  /**
   * Remove User from OnlyFans User List
   *
   * @example
   * ```ts
   * const user = await client.userLists.users.remove(123456, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   userListId: 1224114714,
   * });
   * ```
   */
  remove(userID: number, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const { account, userListId } = params;
    return this._client.delete(path`/api/${account}/user-lists/${userListId}/users/${userID}`, options);
  }
}

export interface UserAddResponse {
  _meta?: UserAddResponse._Meta;

  data?: UserAddResponse.Data;
}

export namespace UserAddResponse {
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
    '1224114714'?: Array<number>;
  }
}

export interface UserRemoveResponse {
  _meta?: UserRemoveResponse._Meta;

  data?: UserRemoveResponse.Data;
}

export namespace UserRemoveResponse {
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
    list?: Data.List;

    userState?: Data.UserState;
  }

  export namespace Data {
    export interface List {
      id?: number;

      canAddUsers?: boolean;

      canDelete?: boolean;

      canManageUsers?: boolean;

      canPinnedToChat?: boolean;

      canPinnedToFeed?: boolean;

      canUpdate?: boolean;

      direction?: string;

      isPinnedToChat?: boolean;

      isPinnedToFeed?: boolean;

      name?: string;

      order?: string;

      postsCount?: number;

      sortList?: Array<unknown>;

      type?: string;

      users?: Array<List.User>;

      usersCount?: number;
    }

    export namespace List {
      export interface User {
        id?: number;

        avatar?: string;

        avatarThumbs?: User.AvatarThumbs;

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

    export interface UserState {
      id?: number;

      canAddUser?: boolean;

      cannotAddUserReason?: string;

      hasUser?: boolean;

      name?: string;

      type?: string;
    }
  }
}

export interface UserAddParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of OnlyFans User IDs to be added into the list
   */
  ids: Array<string>;
}

export interface UserRemoveParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * OnlyFans User List ID
   */
  userListId: number;
}

export declare namespace Users {
  export {
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
