// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans story highlights
 */
export class Highlights extends APIResource {
  /**
   * Create a new story highlight.
   *
   * @example
   * ```ts
   * const highlight = await client.stories.highlights.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     coverStoryId: 9876543210,
   *     storyIds: ['string', 'string'],
   *     title: 'My Highlight',
   *   },
   * );
   * ```
   */
  create(
    account: string,
    body: HighlightCreateParams,
    options?: RequestOptions,
  ): APIPromise<HighlightCreateResponse> {
    return this._client.post(path`/api/${account}/stories/highlights`, { body, ...options });
  }

  /**
   * Retrieve details of a specific story highlight by its ID.
   *
   * @example
   * ```ts
   * const highlight = await client.stories.highlights.retrieve(
   *   1234567890,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    highlightID: number,
    params: HighlightRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<HighlightRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/stories/highlights/${highlightID}`, options);
  }

  /**
   * Update the details of a specific story highlight by its ID.
   *
   * @example
   * ```ts
   * const highlight = await client.stories.highlights.update(
   *   1234567890,
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     coverStoryId: 9876543210,
   *     storyIds: ['string', 'string'],
   *     title: 'My Updated Highlight',
   *   },
   * );
   * ```
   */
  update(
    highlightID: number,
    params: HighlightUpdateParams,
    options?: RequestOptions,
  ): APIPromise<HighlightUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/stories/highlights/${highlightID}`, { body, ...options });
  }

  /**
   * Retrieve a list of your story highlights.
   *
   * @example
   * ```ts
   * const highlights = await client.stories.highlights.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: HighlightListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HighlightListResponse> {
    return this._client.get(path`/api/${account}/stories/highlights`, { query, ...options });
  }

  /**
   * Delete a specific story highlight by its ID.
   *
   * @example
   * ```ts
   * const highlight = await client.stories.highlights.delete(
   *   1234567890,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    highlightID: number,
    params: HighlightDeleteParams,
    options?: RequestOptions,
  ): APIPromise<HighlightDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/stories/highlights/${highlightID}`, options);
  }

  /**
   * Add a specific story to a story highlight.
   *
   * @example
   * ```ts
   * const response = await client.stories.highlights.addStory(
   *   'aperiam',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     highlight_id: 1234567890,
   *     story_id: 2345678901,
   *   },
   * );
   * ```
   */
  addStory(
    storyID: string,
    params: HighlightAddStoryParams,
    options?: RequestOptions,
  ): APIPromise<HighlightAddStoryResponse> {
    const { account, highlight_id, ...body } = params;
    return this._client.patch(path`/api/${account}/stories/highlights/${highlight_id}/${storyID}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a specific story from a story highlight.
   *
   * @example
   * ```ts
   * const response =
   *   await client.stories.highlights.removeStory('aperiam', {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     highlight_id: 1234567890,
   *   });
   * ```
   */
  removeStory(
    storyID: string,
    params: HighlightRemoveStoryParams,
    options?: RequestOptions,
  ): APIPromise<HighlightRemoveStoryResponse> {
    const { account, highlight_id } = params;
    return this._client.delete(path`/api/${account}/stories/highlights/${highlight_id}/${storyID}`, options);
  }
}

export interface HighlightCreateResponse {
  _meta?: HighlightCreateResponse._Meta;

  data?: HighlightCreateResponse.Data;
}

export namespace HighlightCreateResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    cover?: string;

    coverStoryId?: number;

    createdAt?: string;

    storiesCount?: number;

    title?: string;

    userId?: number;
  }
}

export interface HighlightRetrieveResponse {
  _meta?: HighlightRetrieveResponse._Meta;

  data?: HighlightRetrieveResponse.Data;
}

export namespace HighlightRetrieveResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    cover?: string;

    coverStoryId?: number;

    createdAt?: string;

    stories?: Array<Data.Story>;

    storiesCount?: number;

    title?: string;

    userId?: number;
  }

  export namespace Data {
    export interface Story {
      id?: number;

      canDelete?: boolean;

      canvasHeight?: number;

      canvasWidth?: number;

      commentsCount?: number;

      createdAt?: string;

      hasPost?: boolean;

      isHighlightCover?: boolean;

      isLastInHighlight?: boolean;

      isReady?: boolean;

      isWatched?: boolean;

      likesCount?: number;

      media?: Array<Story.Media>;

      question?: string | null;

      releaseForms?: Array<unknown>;

      texts?: Array<Story.Text>;

      tipsAmount?: string;

      tipsAmountRaw?: number;

      tipsCount?: number;

      userId?: number;

      viewers?: Array<unknown>;

      viewersCount?: number;
    }

    export namespace Story {
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

            sources?: Preview.Sources;

            url?: string;

            width?: number;
          }

          export namespace Preview {
            export interface Sources {
              w150?: string;
            }
          }

          export interface SquarePreview {
            height?: number;

            size?: number;

            sources?: SquarePreview.Sources;

            url?: string;

            width?: number;
          }

          export namespace SquarePreview {
            export interface Sources {
              w150?: string;

              w480?: string;
            }
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

      export interface Text {
        angle?: number;

        bgColor?: string;

        color?: string;

        fontFamily?: string;

        fontSize?: string;

        fontStyle?: string | null;

        fontWeight?: number;

        left?: number;

        scale?: number;

        text?: string;

        textAlign?: string;

        textHeight?: number;

        textWidth?: number;

        top?: number;

        type?: string;

        users?: Array<unknown>;

        zIndex?: number;
      }
    }
  }
}

export interface HighlightUpdateResponse {
  _meta?: HighlightUpdateResponse._Meta;

  data?: HighlightUpdateResponse.Data;
}

export namespace HighlightUpdateResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    cover?: string;

    coverStoryId?: number;

    createdAt?: string;

    storiesCount?: number;

    title?: string;

    userId?: number;
  }
}

export interface HighlightListResponse {
  _meta?: HighlightListResponse._Meta;

  data?: HighlightListResponse.Data;
}

export namespace HighlightListResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    hasMore?: boolean;

    list?: Array<Data.List>;
  }

  export namespace Data {
    export interface List {
      id?: number;

      cover?: string;

      coverStoryId?: number;

      createdAt?: string;

      storiesCount?: number;

      title?: string;

      userId?: number;
    }
  }
}

export interface HighlightDeleteResponse {
  _meta?: HighlightDeleteResponse._Meta;

  data?: HighlightDeleteResponse.Data;
}

export namespace HighlightDeleteResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    success?: boolean;
  }
}

export interface HighlightAddStoryResponse {
  _meta?: HighlightAddStoryResponse._Meta;

  data?: HighlightAddStoryResponse.Data;
}

export namespace HighlightAddStoryResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    success?: boolean;
  }
}

export interface HighlightRemoveStoryResponse {
  _meta?: HighlightRemoveStoryResponse._Meta;

  data?: HighlightRemoveStoryResponse.Data;
}

export namespace HighlightRemoveStoryResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    success?: boolean;
  }
}

export interface HighlightCreateParams {
  /**
   * The ID of the story to use as the cover for the highlight
   */
  coverStoryId: number;

  /**
   * An array of story IDs to include in the highlight
   */
  storyIds: Array<string>;

  /**
   * The title of the story highlight
   */
  title: string;
}

export interface HighlightRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface HighlightUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The ID of the story to use as the cover for the highlight. Provide
   * the old value if you don't want to change it.
   */
  coverStoryId: number;

  /**
   * Body param: An array of story IDs to include in the highlight. Provide the old
   * value if you don't want to change it.
   */
  storyIds: Array<string>;

  /**
   * Body param: The new title for the story highlight. Provide the old value if you
   * don't want to change it.
   */
  title: string;
}

export interface HighlightListParams {
  /**
   * Number of highlights to return (default = 5)
   */
  limit?: number;

  /**
   * Number of highlights to skip for pagination
   */
  offset?: number;
}

export interface HighlightDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface HighlightAddStoryParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Path param: The ID of the story highlight to add the story to
   */
  highlight_id: number;

  /**
   * Body param: The ID of the story to add to the highlight
   */
  story_id: number;
}

export interface HighlightRemoveStoryParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the story highlight to add the story to
   */
  highlight_id: number;
}

export declare namespace Highlights {
  export {
    type HighlightCreateResponse as HighlightCreateResponse,
    type HighlightRetrieveResponse as HighlightRetrieveResponse,
    type HighlightUpdateResponse as HighlightUpdateResponse,
    type HighlightListResponse as HighlightListResponse,
    type HighlightDeleteResponse as HighlightDeleteResponse,
    type HighlightAddStoryResponse as HighlightAddStoryResponse,
    type HighlightRemoveStoryResponse as HighlightRemoveStoryResponse,
    type HighlightCreateParams as HighlightCreateParams,
    type HighlightRetrieveParams as HighlightRetrieveParams,
    type HighlightUpdateParams as HighlightUpdateParams,
    type HighlightListParams as HighlightListParams,
    type HighlightDeleteParams as HighlightDeleteParams,
    type HighlightAddStoryParams as HighlightAddStoryParams,
    type HighlightRemoveStoryParams as HighlightRemoveStoryParams,
  };
}
