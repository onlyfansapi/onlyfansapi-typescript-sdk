// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statistics', () => {
  // Mock server tests are disabled
  test.skip('calculateTotalTransactions', async () => {
    const responsePromise = client.statistics.calculateTotalTransactions('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('calculateTotalTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.statistics.calculateTotalTransactions(
        'acct_XXXXXXXXXXXXXXX',
        { end_date: '2025-03-31 23:59:59', start_date: '2025-01-01 00:00:00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getOverview', async () => {
    const responsePromise = client.statistics.getOverview('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOverview: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.statistics.getOverview(
        'acct_XXXXXXXXXXXXXXX',
        {
          end_date: '2025-03-31 23:59:59',
          start_date: '2025-01-01 00:00:00',
          type: 'fans',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getSubscriberMetrics: only required params', async () => {
    const responsePromise = client.statistics.getSubscriberMetrics('acct_XXXXXXXXXXXXXXX', {
      end_date: '2025-03-31 23:59:59',
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
  test.skip('getSubscriberMetrics: required and optional params', async () => {
    const response = await client.statistics.getSubscriberMetrics('acct_XXXXXXXXXXXXXXX', {
      end_date: '2025-03-31 23:59:59',
      start_date: '2025-01-01 00:00:00',
      detailed: false,
      detailed_type: 'total',
    });
  });
});
