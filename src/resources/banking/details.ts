// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations related to user banking details, payout methods, legal and tax information, and account country settings.
 */
export class Details extends APIResource {
  /**
   * Returns the account owner's country details for banking, including country code,
   * name, whether the country has states and zip codes, payout eligibility, and W9
   * form availability.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.details.retrieveAccountCountryDetails(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveAccountCountryDetails(
    account: string,
    options?: RequestOptions,
  ): APIPromise<DetailRetrieveAccountCountryDetailsResponse> {
    return this._client.get(path`/api/${account}/banking/details/account-country`, options);
  }

  /**
   * Returns the account owner's bank payout details, including whether payout data
   * is filled, available payout methods with their descriptions, and required bank
   * fields.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.details.retrieveBankDetails(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveBankDetails(
    account: string,
    options?: RequestOptions,
  ): APIPromise<DetailRetrieveBankDetailsResponse> {
    return this._client.get(path`/api/${account}/banking/details/bank`, options);
  }

  /**
   * If available, returns the account owner's DAC7 form information required for tax
   * reporting, including personal details, address, tax identification, country
   * information, and DAC7 status.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.details.retrieveDac7FormDetails(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveDac7FormDetails(
    account: string,
    options?: RequestOptions,
  ): APIPromise<DetailRetrieveDac7FormDetailsResponse> {
    return this._client.get(path`/api/${account}/banking/details/dac7-form`, options);
  }

  /**
   * Returns the account owner's legal and tax status required for banking and payout
   * configuration, including W9 requirements, identity verification status, DAC7
   * compliance, and tax information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.details.retrieveLegalAndTaxStatus(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveLegalAndTaxStatus(
    account: string,
    options?: RequestOptions,
  ): APIPromise<DetailRetrieveLegalAndTaxStatusResponse> {
    return this._client.get(path`/api/${account}/banking/details/legal-info`, options);
  }

  /**
   * Returns the account owner's legal form details for banking, including personal
   * or business name, address, social media links, date of birth, and available
   * document types for identity verification.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.details.retrieveLegalFormDetails(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveLegalFormDetails(
    account: string,
    options?: RequestOptions,
  ): APIPromise<DetailRetrieveLegalFormDetailsResponse> {
    return this._client.get(path`/api/${account}/banking/details/legal-form`, options);
  }
}

export interface DetailRetrieveAccountCountryDetailsResponse {
  _meta?: DetailRetrieveAccountCountryDetailsResponse._Meta;

  data?: DetailRetrieveAccountCountryDetailsResponse.Data;
}

export namespace DetailRetrieveAccountCountryDetailsResponse {
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

    canHasW9Form?: boolean;

    canPay?: boolean;

    code?: string;

    hasStates?: boolean;

    hasZip?: boolean;

    name?: string;
  }
}

export interface DetailRetrieveBankDetailsResponse {
  _meta?: DetailRetrieveBankDetailsResponse._Meta;

  data?: DetailRetrieveBankDetailsResponse.Data;
}

export namespace DetailRetrieveBankDetailsResponse {
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
    isPayoutDataFilled?: boolean;

    payoutCode?: string;

    payouts?: Array<Data.Payout>;
  }

  export namespace Data {
    export interface Payout {
      code?: string;

      description?: string;

      fields?: Payout.Fields;

      fieldsOrder?: Array<string>;

      minPayoutSumm?: number;

      payoutTime?: string;

      subtitle?: string;

      title?: string;

      uiMapping?: Payout.UiMapping;
    }

    export namespace Payout {
      export interface Fields {
        address?: Fields.Address;

        bank_name?: Fields.BankName;

        bic?: Fields.Bic;

        city?: Fields.City;

        country?: Fields.Country;

        first_name?: Fields.FirstName;

        iban?: Fields.Iban;

        last_name?: Fields.LastName;

        postal?: Fields.Postal;
      }

      export namespace Fields {
        export interface Address {
          label?: Address.Label;

          maxlength?: number;

          required?: boolean;

          value?: string;
        }

        export namespace Address {
          export interface Label {
            key?: string;
          }
        }

        export interface BankName {
          label?: BankName.Label;

          maxlength?: number;

          required?: boolean;

          value?: string;
        }

        export namespace BankName {
          export interface Label {
            key?: string;
          }
        }

        export interface Bic {
          label?: Bic.Label;

          maxlength?: number;

          required?: boolean;

          value?: string;
        }

        export namespace Bic {
          export interface Label {
            key?: string;
          }
        }

        export interface City {
          label?: City.Label;

          maxlength?: number;

          required?: boolean;

          value?: string;
        }

        export namespace City {
          export interface Label {
            key?: string;
          }
        }

        export interface Country {
          label?: Country.Label;

          readonly?: boolean;

          uionly?: boolean;

          value?: string;
        }

        export namespace Country {
          export interface Label {
            key?: string;
          }
        }

        export interface FirstName {
          label?: FirstName.Label;

          maxlength?: number;

          oninput?: FirstName.Oninput;

          readonly?: boolean;

          value?: string;
        }

        export namespace FirstName {
          export interface Label {
            key?: string;
          }

          export interface Oninput {
            replace?: Oninput.Replace;
          }

          export namespace Oninput {
            export interface Replace {
              flag?: string;

              pattern?: string;
            }
          }
        }

        export interface Iban {
          label?: Iban.Label;

          regex?: Iban.Regex;

          required?: boolean;

          value?: string;
        }

        export namespace Iban {
          export interface Label {
            key?: string;
          }

          export interface Regex {
            flag?: string;

            pattern?: string;
          }
        }

        export interface LastName {
          label?: LastName.Label;

          maxlength?: number;

          oninput?: LastName.Oninput;

          readonly?: boolean;

          value?: string;
        }

        export namespace LastName {
          export interface Label {
            key?: string;
          }

          export interface Oninput {
            replace?: Oninput.Replace;
          }

          export namespace Oninput {
            export interface Replace {
              flag?: string;

              pattern?: string;
            }
          }
        }

        export interface Postal {
          label?: Postal.Label;

          maxlength?: number;

          required?: boolean;

          value?: string;
        }

        export namespace Postal {
          export interface Label {
            key?: string;
          }
        }
      }

      export interface UiMapping {
        alert?: UiMapping.Alert;

        btn_submit?: UiMapping.BtnSubmit;

        title?: UiMapping.Title;
      }

      export namespace UiMapping {
        export interface Alert {
          class?: string;

          text?: Alert.Text;
        }

        export namespace Alert {
          export interface Text {
            key?: string;
          }
        }

        export interface BtnSubmit {
          key?: string;
        }

        export interface Title {
          key?: string;
        }
      }
    }
  }
}

export interface DetailRetrieveDac7FormDetailsResponse {
  _meta?: DetailRetrieveDac7FormDetailsResponse._Meta;

  data?: DetailRetrieveDac7FormDetailsResponse.Data;
}

export namespace DetailRetrieveDac7FormDetailsResponse {
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
    address?: string;

    city?: string;

    cityOfBirth?: string;

    countryId?: number;

    countryOfBirthId?: number;

    countryOfResidenceId?: number;

    DOB?: string;

    firstName?: string;

    issuingCountryId?: number;

    lastName?: string;

    state?: string;

    status?: string;

    taxId?: string;

    type?: string;

    vatNumber?: string;

    zip?: string;
  }
}

export interface DetailRetrieveLegalAndTaxStatusResponse {
  _meta?: DetailRetrieveLegalAndTaxStatusResponse._Meta;

  data?: DetailRetrieveLegalAndTaxStatusResponse.Data;
}

export namespace DetailRetrieveLegalAndTaxStatusResponse {
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
    canChangePayoutType?: boolean;

    canShowLegalForm?: boolean;

    DAC7?: Data.Dac7;

    hideBanking?: boolean;

    isRealIdImage?: boolean;

    isW9Exist?: boolean;

    isW9Required?: boolean;

    isXXX?: boolean;

    ivFailReason?: string;

    ivStatus?: string;

    needShowEditW9?: boolean;

    payoutLegalApproveRejectReason?: string;

    showIvButton?: boolean;

    tax?: Data.Tax;
  }

  export namespace Data {
    export interface Dac7 {
      countryIds?: Array<number>;

      error?: string;

      required?: boolean;

      state?: string;

      type?: string;
    }

    export interface Tax {
      countryCode?: string;

      editable?: boolean;

      isBankingDisabled?: boolean;
    }
  }
}

export interface DetailRetrieveLegalFormDetailsResponse {
  _meta?: DetailRetrieveLegalFormDetailsResponse._Meta;

  data?: DetailRetrieveLegalFormDetailsResponse.Data;
}

export namespace DetailRetrieveLegalFormDetailsResponse {
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
    dateOfBirth?: string;

    documentType?: Data.DocumentType;

    isAllowedDL?: boolean;

    privateWebsite?: string;

    realAddress?: string;

    realBusinessName?: string;

    realCity?: string;

    realFirstName?: string;

    realInstagram?: string;

    realLastName?: string;

    realPostal?: string;

    realState?: string;

    realTwitter?: string;
  }

  export namespace Data {
    export interface DocumentType {
      values?: Array<DocumentType.Value>;
    }

    export namespace DocumentType {
      export interface Value {
        code?: string;

        name?: string;
      }
    }
  }
}

export declare namespace Details {
  export {
    type DetailRetrieveAccountCountryDetailsResponse as DetailRetrieveAccountCountryDetailsResponse,
    type DetailRetrieveBankDetailsResponse as DetailRetrieveBankDetailsResponse,
    type DetailRetrieveDac7FormDetailsResponse as DetailRetrieveDac7FormDetailsResponse,
    type DetailRetrieveLegalAndTaxStatusResponse as DetailRetrieveLegalAndTaxStatusResponse,
    type DetailRetrieveLegalFormDetailsResponse as DetailRetrieveLegalFormDetailsResponse,
  };
}
