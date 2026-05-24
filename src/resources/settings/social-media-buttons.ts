// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SocialMediaButtons extends APIResource {
  /**
   * Updates a social media button from the account
   *
   * @example
   * ```ts
   * const socialMediaButton =
   *   await client.settings.socialMediaButtons.update(
   *     'button_id',
   *     { account: 'acct_XXXXXXXXXXXXXXX', label: 'Instagram' },
   *   );
   * ```
   */
  update(
    buttonID: string,
    params: SocialMediaButtonUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SocialMediaButtonUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/settings/social-media-buttons/${buttonID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the list of social media buttons for the account
   *
   * @example
   * ```ts
   * const socialMediaButtons =
   *   await client.settings.socialMediaButtons.list(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  list(account: string, options?: RequestOptions): APIPromise<SocialMediaButtonListResponse> {
    return this._client.get(path`/api/${account}/settings/social-media-buttons`, options);
  }

  /**
   * Deletes a social media button from the account
   *
   * @example
   * ```ts
   * const socialMediaButton =
   *   await client.settings.socialMediaButtons.delete(
   *     'button_id',
   *     { account: 'acct_XXXXXXXXXXXXXXX' },
   *   );
   * ```
   */
  delete(
    buttonID: string,
    params: SocialMediaButtonDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SocialMediaButtonDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/settings/social-media-buttons/${buttonID}`, options);
  }

  /**
   * Adds a new social media button to the account
   *
   * @example
   * ```ts
   * const response =
   *   await client.settings.socialMediaButtons.add(
   *     'acct_XXXXXXXXXXXXXXX',
   *     {
   *       label: 'Instagram',
   *       type: 'instagram',
   *       value: 'example_user',
   *     },
   *   );
   * ```
   */
  add(
    account: string,
    body: SocialMediaButtonAddParams,
    options?: RequestOptions,
  ): APIPromise<SocialMediaButtonAddResponse> {
    return this._client.post(path`/api/${account}/settings/social-media-buttons`, { body, ...options });
  }

  /**
   * Changes the order of social media buttons for the account
   *
   * @example
   * ```ts
   * const response =
   *   await client.settings.socialMediaButtons.reorder(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { button_ids: ['string', 'string'] },
   *   );
   * ```
   */
  reorder(
    account: string,
    body: SocialMediaButtonReorderParams,
    options?: RequestOptions,
  ): APIPromise<SocialMediaButtonReorderResponse> {
    return this._client.post(path`/api/${account}/settings/social-media-buttons/reorder`, {
      body,
      ...options,
    });
  }
}

export interface SocialMediaButtonUpdateResponse {
  _meta?: SocialMediaButtonUpdateResponse._Meta;

  data?: Array<SocialMediaButtonUpdateResponse.Data>;
}

export namespace SocialMediaButtonUpdateResponse {
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

    clicks?: number;

    isValid?: boolean;

    label?: string;

    link?: string;

    socialMedia?: string;

    sort?: number;

    url?: string;

    username?: string;
  }
}

export interface SocialMediaButtonListResponse {
  _meta?: SocialMediaButtonListResponse._Meta;

  data?: Array<SocialMediaButtonListResponse.Data>;
}

export namespace SocialMediaButtonListResponse {
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

    clicks?: number;

    isValid?: boolean;

    label?: string;

    link?: string;

    socialMedia?: string;

    sort?: number;

    url?: string;

    username?: string;
  }
}

export interface SocialMediaButtonDeleteResponse {
  _meta?: SocialMediaButtonDeleteResponse._Meta;

  data?: SocialMediaButtonDeleteResponse.Data;
}

export namespace SocialMediaButtonDeleteResponse {
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

export interface SocialMediaButtonAddResponse {
  _meta?: SocialMediaButtonAddResponse._Meta;

  data?: Array<SocialMediaButtonAddResponse.Data>;
}

export namespace SocialMediaButtonAddResponse {
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

    clicks?: number;

    isValid?: boolean;

    label?: string;

    link?: string;

    socialMedia?: string;

    sort?: number;

    url?: string;

    username?: string;
  }
}

export interface SocialMediaButtonReorderResponse {
  _meta?: SocialMediaButtonReorderResponse._Meta;

  data?: Array<SocialMediaButtonReorderResponse.Data>;
}

export namespace SocialMediaButtonReorderResponse {
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

    clicks?: number;

    isValid?: boolean;

    label?: string;

    link?: string;

    socialMedia?: string;

    sort?: number;

    url?: string;

    username?: string;
  }
}

export interface SocialMediaButtonUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The new label for the button
   */
  label: string;
}

export interface SocialMediaButtonDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface SocialMediaButtonAddParams {
  /**
   * The button label
   */
  label: string;

  /**
   * The button type
   */
  type:
    | 'instagram'
    | 'x'
    | 'facebook'
    | 'youtube'
    | 'tiktok'
    | 'snapchat'
    | 'amazon'
    | 'twitch'
    | 'discord'
    | 'patreon'
    | 'pinterest'
    | 'etsy'
    | 'bereal'
    | 'kick'
    | 'depop'
    | 'poshmark'
    | 'vsco'
    | 'threads'
    | 'throne'
    | 'shopltk'
    | 'oftv'
    | 'bluesky';

  /**
   * The button value, either a username or link.
   */
  value: string;
}

export interface SocialMediaButtonReorderParams {
  /**
   * The new order of the buttons
   */
  button_ids: Array<string>;
}

export declare namespace SocialMediaButtons {
  export {
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
