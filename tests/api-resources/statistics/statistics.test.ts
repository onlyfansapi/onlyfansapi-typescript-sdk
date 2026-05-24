// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statistics', () => {
  // Mock server tests are disabled
  test.skip('calculateTotalTransactions: only required params', async () => {
    const responsePromise = client.statistics.calculateTotalTransactions('acct_XXXXXXXXXXXXXXX', {
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
  test.skip('calculateTotalTransactions: required and optional params', async () => {
    const response = await client.statistics.calculateTotalTransactions('acct_XXXXXXXXXXXXXXX', {
      end_date: '2025-03-31 23:59:59',
      start_date: '2025-01-01 00:00:00',
    });
  });

  // Mock server tests are disabled
  test.skip('getOverview: only required params', async () => {
    const responsePromise = client.statistics.getOverview('acct_XXXXXXXXXXXXXXX', {
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
  test.skip('getOverview: required and optional params', async () => {
    const response = await client.statistics.getOverview('acct_XXXXXXXXXXXXXXX', {
      end_date: '2025-03-31 23:59:59',
      start_date: '2025-01-01 00:00:00',
      type: 'fans',
    });
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
    });
  });
});
