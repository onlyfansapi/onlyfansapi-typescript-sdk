// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('getMessageBuyers: only required params', async () => {
    const responsePromise = client.engagement.messages.getMessageBuyers('fugit', {
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
  test.skip('getMessageBuyers: required and optional params', async () => {
    const response = await client.engagement.messages.getMessageBuyers('fugit', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      marker: 0,
      offset: 0,
      skip_users: 'all',
      skip_users_dups: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('getTopMessage', async () => {
    const responsePromise = client.engagement.messages.getTopMessage('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTopMessage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.engagement.messages.getTopMessage(
        'acct_XXXXXXXXXXXXXXX',
        { endDate: '2026-02-06 01:26:15', startDate: '2026-01-07 00:00:00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });
});
