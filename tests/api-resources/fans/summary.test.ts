// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summary', () => {
  // Mock server tests are disabled
  test.skip('generateSummary: only required params', async () => {
    const responsePromise = client.fans.summary.generateSummary('fan_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
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
  test.skip('generateSummary: required and optional params', async () => {
    const response = await client.fans.summary.generateSummary('fan_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      regenerate: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getSummary: only required params', async () => {
    const responsePromise = client.fans.summary.getSummary('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSummary: required and optional params', async () => {
    const response = await client.fans.summary.getSummary('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });
});
