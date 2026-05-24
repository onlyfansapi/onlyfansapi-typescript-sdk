// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing Smart Link postback destinations
 */
export class SmartLinkPostbacks extends APIResource {
  /**
   * Create a postback that fires for selected Smart Link conversion types
   *
   * @example
   * ```ts
   * const smartLinkPostback =
   *   await client.smartLinkPostbacks.create({
   *     conversion_types: ['new_subscriber', 'new_transaction'],
   *     smart_link_scope: 'campaign_specific',
   *     url: 'https://example.com/postback?click={click_id}&type={conversion_type}&gclid={gclid}',
   *   });
   * ```
   */
  create(
    body: SmartLinkPostbackCreateParams,
    options?: RequestOptions,
  ): APIPromise<SmartLinkPostbackCreateResponse> {
    return this._client.post('/api/smart-link-postbacks', { body, ...options });
  }

  /**
   * Retrieve a Smart Link postback by ID
   *
   * @example
   * ```ts
   * const smartLinkPostback =
   *   await client.smartLinkPostbacks.retrieve(123);
   * ```
   */
  retrieve(postbackID: number, options?: RequestOptions): APIPromise<SmartLinkPostbackRetrieveResponse> {
    return this._client.get(path`/api/smart-link-postbacks/${postbackID}`, options);
  }

  /**
   * Update a Smart Link postback configuration
   *
   * @example
   * ```ts
   * const smartLinkPostback =
   *   await client.smartLinkPostbacks.update(123, {
   *     conversion_types: ['new_subscriber'],
   *     smart_link_scope: 'global',
   *     url: 'https://example.com/postback?click={click_id}&type={conversion_type}',
   *   });
   * ```
   */
  update(
    postbackID: number,
    body: SmartLinkPostbackUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SmartLinkPostbackUpdateResponse> {
    return this._client.patch(path`/api/smart-link-postbacks/${postbackID}`, { body, ...options });
  }

  /**
   * List all Smart Link postbacks configured for your Team
   *
   * @example
   * ```ts
   * const smartLinkPostbacks =
   *   await client.smartLinkPostbacks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SmartLinkPostbackListResponse> {
    return this._client.get('/api/smart-link-postbacks', options);
  }

  /**
   * Delete a Smart Link postback
   *
   * @example
   * ```ts
   * const smartLinkPostback =
   *   await client.smartLinkPostbacks.delete(123);
   * ```
   */
  delete(postbackID: number, options?: RequestOptions): APIPromise<SmartLinkPostbackDeleteResponse | null> {
    return this._client.delete(path`/api/smart-link-postbacks/${postbackID}`, options);
  }
}

export interface SmartLinkPostbackCreateResponse {
  _meta?: SmartLinkPostbackCreateResponse._Meta;

  data?: SmartLinkPostbackCreateResponse.Data;
}

export namespace SmartLinkPostbackCreateResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    id?: number;

    conversion_types?: Array<string>;

    created_at?: string;

    latest_response?: string | null;

    smart_link_ids?: Array<unknown>;

    smart_link_scope?: string;

    smart_links?: Array<unknown>;

    updated_at?: string;

    url?: string;
  }
}

export interface SmartLinkPostbackRetrieveResponse {
  _meta?: SmartLinkPostbackRetrieveResponse._Meta;

  data?: SmartLinkPostbackRetrieveResponse.Data;
}

export namespace SmartLinkPostbackRetrieveResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    id?: number;

    conversion_types?: Array<string>;

    created_at?: string;

    latest_response?: string | null;

    smart_link_ids?: Array<string>;

    smart_link_scope?: string;

    smart_links?: Array<Data.SmartLink>;

    updated_at?: string;

    url?: string;
  }

  export namespace Data {
    export interface SmartLink {
      account_display_name?: string;

      account_prefixed_id?: string;

      link_ulid?: string;

      name?: string;
    }
  }
}

export interface SmartLinkPostbackUpdateResponse {
  _meta?: SmartLinkPostbackUpdateResponse._Meta;

  data?: SmartLinkPostbackUpdateResponse.Data;
}

export namespace SmartLinkPostbackUpdateResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    id?: number;

    conversion_types?: Array<string>;

    created_at?: string;

    latest_response?: string | null;

    smart_link_ids?: Array<string>;

    smart_link_scope?: string;

    smart_links?: Array<Data.SmartLink>;

    updated_at?: string;

    url?: string;
  }

  export namespace Data {
    export interface SmartLink {
      account_display_name?: string;

      account_prefixed_id?: string;

      link_ulid?: string;

      name?: string;
    }
  }
}

export interface SmartLinkPostbackListResponse {
  _meta?: SmartLinkPostbackListResponse._Meta;

  data?: Array<SmartLinkPostbackListResponse.Data>;
}

export namespace SmartLinkPostbackListResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    id?: number;

    conversion_types?: Array<string>;

    created_at?: string;

    latest_response?: Data.LatestResponse;

    smart_link_ids?: Array<string>;

    smart_link_scope?: string;

    smart_links?: Array<Data.SmartLink>;

    updated_at?: string;

    url?: string;
  }

  export namespace Data {
    export interface LatestResponse {
      id?: number;

      conversion_type?: string;

      created_at?: string;

      error_message?: string | null;

      error_type?: string | null;

      postback_url?: string;

      status_code?: number;

      succeeded?: boolean;
    }

    export interface SmartLink {
      account_display_name?: string;

      account_prefixed_id?: string;

      link_ulid?: string;

      name?: string;
    }
  }
}

export type SmartLinkPostbackDeleteResponse = { [key: string]: unknown };

export interface SmartLinkPostbackCreateParams {
  /**
   * One or more Smart Link conversion types that should trigger this postback.
   */
  conversion_types: Array<string>;

  /**
   * `global` fires for all Smart Links. `campaign_specific` fires only for selected
   * Smart Links.
   */
  smart_link_scope: 'global' | 'campaign_specific';

  /**
   * The destination URL. Variables such as `{click_id}`, `{fbclid}`, `{gclid}`, and
   * `{ttclid}` are replaced when the postback is dispatched.
   */
  url: string;

  /**
   * Smart Link ULIDs. Required when `smart_link_scope` is `campaign_specific`.
   */
  smart_link_ids?: Array<string>;
}

export interface SmartLinkPostbackUpdateParams {
  /**
   * One or more Smart Link conversion types that should trigger this postback.
   */
  conversion_types: Array<string>;

  /**
   * `global` or `campaign_specific`.
   */
  smart_link_scope: 'global' | 'campaign_specific';

  /**
   * The destination URL.
   */
  url: string;

  /**
   * Smart Link ULIDs. Required when `smart_link_scope` is `campaign_specific`.
   */
  smart_link_ids?: Array<string>;
}

export declare namespace SmartLinkPostbacks {
  export {
    type SmartLinkPostbackCreateResponse as SmartLinkPostbackCreateResponse,
    type SmartLinkPostbackRetrieveResponse as SmartLinkPostbackRetrieveResponse,
    type SmartLinkPostbackUpdateResponse as SmartLinkPostbackUpdateResponse,
    type SmartLinkPostbackListResponse as SmartLinkPostbackListResponse,
    type SmartLinkPostbackDeleteResponse as SmartLinkPostbackDeleteResponse,
    type SmartLinkPostbackCreateParams as SmartLinkPostbackCreateParams,
    type SmartLinkPostbackUpdateParams as SmartLinkPostbackUpdateParams,
  };
}
