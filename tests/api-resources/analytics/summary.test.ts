// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from 'onlyfansapi';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summary', () => {
  // Mock server tests are disabled
  test.skip('getEarningsOverview: only required params', async () => {
    const responsePromise = client.analytics.summary.getEarningsOverview({
      account_ids: ['acc_abc123', 'acc_def456'],
      end_date: '2024-12-31',
      start_date: '2024-01-01',
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
  test.skip('getEarningsOverview: required and optional params', async () => {
    const response = await client.analytics.summary.getEarningsOverview({
      account_ids: ['acc_abc123', 'acc_def456'],
      end_date: '2024-12-31',
      start_date: '2024-01-01',
    });
  });

  // Mock server tests are disabled
  test.skip('getHistoricalPerformance', async () => {
    const responsePromise = client.analytics.summary.getHistoricalPerformance();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getHistoricalPerformance: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.summary.getHistoricalPerformance(
        { time_range: '12m' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getPeriodComparison: only required params', async () => {
    const responsePromise = client.analytics.summary.getPeriodComparison({
      account_ids: ['acc_abc123', 'acc_def456'],
      period_a: { end: '2024-03-31', start: '2024-01-01' },
      period_b: { end: '2024-06-30', start: '2024-04-01' },
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
  test.skip('getPeriodComparison: required and optional params', async () => {
    const response = await client.analytics.summary.getPeriodComparison({
      account_ids: ['acc_abc123', 'acc_def456'],
      period_a: { end: '2024-03-31', start: '2024-01-01' },
      period_b: { end: '2024-06-30', start: '2024-04-01' },
      granularity: 'months',
      stat_type: 'totalEarnings',
    });
  });
});
