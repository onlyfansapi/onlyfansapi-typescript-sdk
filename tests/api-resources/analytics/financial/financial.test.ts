// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financial', () => {
  // Mock server tests are disabled
  test.skip('getForecast: only required params', async () => {
    const responsePromise = client.analytics.financial.getForecast({
      account_ids: ['acc_abc123', 'acc_def456'],
      forecast_days: 30,
      historical_days: 90,
      metric: 'revenue',
      model: 'linear_regression',
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
  test.skip('getForecast: required and optional params', async () => {
    const response = await client.analytics.financial.getForecast({
      account_ids: ['acc_abc123', 'acc_def456'],
      forecast_days: 30,
      historical_days: 90,
      metric: 'revenue',
      model: 'linear_regression',
    });
  });
});
