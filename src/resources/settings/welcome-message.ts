// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WelcomeMessage extends APIResource {
  /**
   * Get the current automatic welcome message template that is sent when someone
   * subscribes.
   *
   * @example
   * ```ts
   * const welcomeMessage =
   *   await client.settings.welcomeMessage.retrieve(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<WelcomeMessageRetrieveResponse> {
    return this._client.get(path`/api/${account}/settings/welcome-message`, options);
  }

  /**
   * Update the automatic welcome message template that is sent when someone
   * subscribes.
   *
   * @example
   * ```ts
   * const welcomeMessage =
   *   await client.settings.welcomeMessage.update(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  update(
    account: string,
    body: WelcomeMessageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WelcomeMessageUpdateResponse> {
    return this._client.post(path`/api/${account}/settings/welcome-message`, { body, ...options });
  }

  /**
   * Enable or disable the automatic welcome message that is sent when someone
   * subscribes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.settings.welcomeMessage.toggle(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { enabled: true },
   *   );
   * ```
   */
  toggle(
    account: string,
    body: WelcomeMessageToggleParams,
    options?: RequestOptions,
  ): APIPromise<WelcomeMessageToggleResponse> {
    return this._client.patch(path`/api/${account}/settings/welcome-message`, { body, ...options });
  }
}

export interface WelcomeMessageRetrieveResponse {
  _meta?: WelcomeMessageRetrieveResponse._Meta;

  data?: WelcomeMessageRetrieveResponse.Data;
}

export namespace WelcomeMessageRetrieveResponse {
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

    createdAt?: string;

    displayText?: string;

    giphyId?: string | null;

    isActive?: boolean;

    isCouplePeopleMedia?: boolean;

    isMarkdownDisabled?: boolean;

    isMediaReady?: boolean;

    lockedText?: boolean;

    media?: Array<Data.Media>;

    mediaCount?: number;

    previews?: Array<unknown>;

    price?: number;

    releaseForms?: Array<unknown>;

    template?: string;

    text?: string;
  }

  export namespace Data {
    export interface Media {
      id?: number;

      canView?: boolean;

      convertedToVideo?: boolean;

      createdAt?: string;

      duration?: number;

      files?: Media.Files;

      hasCustomPreview?: boolean;

      hasError?: boolean;

      isReady?: boolean;

      releaseForms?: Array<unknown>;

      type?: string;

      videoSources?: Media.VideoSources;
    }

    export namespace Media {
      export interface Files {
        full?: Files.Full;

        preview?: Files.Preview;

        squarePreview?: Files.SquarePreview;

        thumb?: Files.Thumb;
      }

      export namespace Files {
        export interface Full {
          height?: number;

          size?: number;

          sources?: Array<unknown>;

          url?: string;

          width?: number;
        }

        export interface Preview {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }

        export interface SquarePreview {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }

        export interface Thumb {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }
      }

      export interface VideoSources {
        '240'?: string | null;

        '720'?: string | null;
      }
    }
  }
}

export interface WelcomeMessageUpdateResponse {
  _meta?: WelcomeMessageUpdateResponse._Meta;

  data?: WelcomeMessageUpdateResponse.Data;
}

export namespace WelcomeMessageUpdateResponse {
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

    createdAt?: string;

    displayText?: string;

    giphyId?: string | null;

    isActive?: boolean;

    isCouplePeopleMedia?: boolean;

    isMarkdownDisabled?: boolean;

    isMediaReady?: boolean;

    lockedText?: boolean;

    media?: Array<Data.Media>;

    mediaCount?: number;

    previews?: Array<unknown>;

    price?: number;

    releaseForms?: Array<unknown>;

    template?: string;

    text?: string;
  }

  export namespace Data {
    export interface Media {
      id?: number;

      canView?: boolean;

      convertedToVideo?: boolean;

      createdAt?: string;

      duration?: number;

      files?: Media.Files;

      hasCustomPreview?: boolean;

      hasError?: boolean;

      isReady?: boolean;

      releaseForms?: Array<unknown>;

      type?: string;

      videoSources?: Media.VideoSources;
    }

    export namespace Media {
      export interface Files {
        full?: Files.Full;

        preview?: Files.Preview;

        squarePreview?: Files.SquarePreview;

        thumb?: Files.Thumb;
      }

      export namespace Files {
        export interface Full {
          height?: number;

          size?: number;

          sources?: Array<unknown>;

          url?: string;

          width?: number;
        }

        export interface Preview {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }

        export interface SquarePreview {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }

        export interface Thumb {
          height?: number;

          size?: number;

          url?: string;

          width?: number;
        }
      }

      export interface VideoSources {
        '240'?: string | null;

        '720'?: string | null;
      }
    }
  }
}

export interface WelcomeMessageToggleResponse {
  _meta?: WelcomeMessageToggleResponse._Meta;

  data?: WelcomeMessageToggleResponse.Data;
}

export namespace WelcomeMessageToggleResponse {
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

export interface WelcomeMessageUpdateParams {
  isForward?: boolean;

  /**
   * Whether the text should be shown or hidden.
   */
  lockedText?: boolean;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, or OF vault IDs. Will be hidden
   * if `price` is provided.
   */
  mediaFiles?: Array<unknown>;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, OF vault IDs, or integer indices
   * referencing uploaded files in `mediaFiles`. Will be shown if `price` is
   * provided.
   */
  previews?: Array<unknown>;

  /**
   * Price for paid content (0 or between 3-200). In case this is not zero,
   * **mediaFiles** is required.
   */
  price?: number;

  /**
   * Array of OnlyFans Release Form Guest IDs to tag in your message.
   */
  rfGuest?: string;

  /**
   * Array of OnlyFans Release Form Partners IDs to tag in your message.
   */
  rfPartner?: string;

  /**
   * Array of OnlyFans Creator User IDs to tag in your message.
   */
  rfTag?: string;

  /**
   * The welcome message text content. Required unless a media file is present.
   */
  text?: string;
}

export interface WelcomeMessageToggleParams {
  /**
   * Whether the welcome message should be enabled.
   */
  enabled: boolean;
}

export declare namespace WelcomeMessage {
  export {
    type WelcomeMessageRetrieveResponse as WelcomeMessageRetrieveResponse,
    type WelcomeMessageUpdateResponse as WelcomeMessageUpdateResponse,
    type WelcomeMessageToggleResponse as WelcomeMessageToggleResponse,
    type WelcomeMessageUpdateParams as WelcomeMessageUpdateParams,
    type WelcomeMessageToggleParams as WelcomeMessageToggleParams,
  };
}
