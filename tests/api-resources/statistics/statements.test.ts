// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statements', () => {
  // Mock server tests are disabled
  test.skip('getEarnings: only required params', async () => {
    const responsePromise = client.statistics.statements.getEarnings('acct_XXXXXXXXXXXXXXX', {
      start_date: '2025-01-01 00:00:00',
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
  test.skip('getEarnings: required and optional params', async () => {
    const response = await client.statistics.statements.getEarnings('acct_XXXXXXXXXXXXXXX', {
      start_date: '2025-01-01 00:00:00',
      end_date: '2025-03-31 23:59:59',
      type: 'total',
    });
  });
});
