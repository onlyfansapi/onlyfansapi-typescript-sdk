// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import {
  UserAddParams,
  UserAddResponse,
  UserClearParams,
  UserClearResponse,
  UserListParams,
  UserListPinnedParams,
  UserListPinnedResponse,
  UserListResponse,
  UserPinParams,
  UserPinResponse,
  UserRemoveParams,
  UserRemoveResponse,
  Users,
} from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserLists extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create a OnlyFans User List
   *
   * @example
   * ```ts
   * const userList = await client.userLists.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { name: 'qgzlijdsm' },
   * );
   * ```
   */
  create(
    account: string,
    body: UserListCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserListCreateResponse> {
    return this._client.post(path`/api/${account}/user-lists`, { body, ...options });
  }

  /**
   * Get a user list
   *
   * @example
   * ```ts
   * const userList = await client.userLists.retrieve(
   *   'userListId',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    userListID: string,
    params: UserListRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UserListRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/user-lists/${userListID}`, options);
  }

  /**
   * Update a OnlyFans User List
   *
   * @example
   * ```ts
   * const userList = await client.userLists.update(
   *   'userListId',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     name: 'My Updated List Name',
   *   },
   * );
   * ```
   */
  update(
    userListID: string,
    params: UserListUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UserListUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/user-lists/${userListID}`, { body, ...options });
  }

  /**
   * Get a list of OnlyFans Collections - User Lists
   *
   * @example
   * ```ts
   * const userLists = await client.userLists.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: UserListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListListResponse> {
    return this._client.get(path`/api/${account}/user-lists`, { query, ...options });
  }

  /**
   * Delete a OnlyFans User List
   *
   * @example
   * ```ts
   * const userList = await client.userLists.delete(
   *   'userListId',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    userListID: string,
    params: UserListDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UserListDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/user-lists/${userListID}`, options);
  }
}

export interface UserListCreateResponse {
  _meta?: UserListCreateResponse._Meta;

  data?: UserListCreateResponse.Data;
}

export namespace UserListCreateResponse {
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

    users?: Array<unknown>;

    usersCount?: number;
  }
}

export interface UserListRetrieveResponse {
  _meta?: UserListRetrieveResponse._Meta;

  data?: UserListRetrieveResponse.Data;
}

export namespace UserListRetrieveResponse {
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

    users?: Array<Data.User>;

    usersCount?: number;
  }

  export namespace Data {
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
}

export interface UserListUpdateResponse {
  _meta?: UserListUpdateResponse._Meta;

  data?: UserListUpdateResponse.Data;
}

export namespace UserListUpdateResponse {
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

    users?: Array<unknown>;

    usersCount?: number;
  }
}

export interface UserListListResponse {
  _meta?: UserListListResponse._Meta;

  data?: Array<UserListListResponse.Data>;
}

export namespace UserListListResponse {
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
    id?: string;

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

    users?: Array<unknown>;

    usersCount?: number;
  }
}

export interface UserListDeleteResponse {
  _meta?: UserListDeleteResponse._Meta;

  data?: UserListDeleteResponse.Data;
}

export namespace UserListDeleteResponse {
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

export interface UserListCreateParams {
  /**
   * Must not be greater than 64 characters.
   */
  name: string;
}

export interface UserListRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface UserListUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The new name for the User List.
   */
  name: string;

  /**
   * Body param: Whether to pin the User List to feed to the OnlyFans homepage or
   * not.
   */
  isPinnedToFeed?: boolean | null;
}

export interface UserListListParams {
  /**
   * How many results to return in the request. Max. 50 user lists. Must be at
   * least 10. Must not be greater than 50.
   */
  limit?: number | null;

  /**
   * Must be at least 0.
   */
  offset?: number | null;
}

export interface UserListDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

UserLists.Users = Users;

export declare namespace UserLists {
  export {
    type UserListCreateResponse as UserListCreateResponse,
    type UserListRetrieveResponse as UserListRetrieveResponse,
    type UserListUpdateResponse as UserListUpdateResponse,
    type UserListListResponse as UserListListResponse,
    type UserListDeleteResponse as UserListDeleteResponse,
    type UserListCreateParams as UserListCreateParams,
    type UserListRetrieveParams as UserListRetrieveParams,
    type UserListUpdateParams as UserListUpdateParams,
    type UserListListParams as UserListListParams,
    type UserListDeleteParams as UserListDeleteParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserAddResponse as UserAddResponse,
    type UserClearResponse as UserClearResponse,
    type UserListPinnedResponse as UserListPinnedResponse,
    type UserPinResponse as UserPinResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserListParams as UserListParams,
    type UserAddParams as UserAddParams,
    type UserClearParams as UserClearParams,
    type UserListPinnedParams as UserListPinnedParams,
    type UserPinParams as UserPinParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
