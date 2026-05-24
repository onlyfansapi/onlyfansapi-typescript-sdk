// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profitability', () => {
  // Mock server tests are disabled
  test.skip('getHistory: only required params', async () => {
    const responsePromise = client.analytics.financial.profitability.getHistory('acct_XXXXXXXXXXXXXXX', {
      account_prefixed_id: 'acct_abc123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getHistory: required and optional params', async () => {
    const response = await client.analytics.financial.profitability.getHistory('acct_XXXXXXXXXXXXXXX', {
      account_prefixed_id: 'acct_abc123',
      months: 12,
    });
  });

  // Mock server tests are disabled
  test.skip('getProfitability: only required params', async () => {
    const responsePromise = client.analytics.financial.profitability.getProfitability({
      account_ids: ['acc_abc123', 'acc_def456'],
      month: 6,
      year: 2024,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getProfitability: required and optional params', async () => {
    const response = await client.analytics.financial.profitability.getProfitability({
      account_ids: ['acc_abc123', 'acc_def456'],
      month: 6,
      year: 2024,
    });
  });
});
