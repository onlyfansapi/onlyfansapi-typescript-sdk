// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from 'onlyfansapi';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tabsOrder', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.notifications.tabsOrder.update('acct_XXXXXXXXXXXXXXX', {
      tabs: [
        'all',
        'subscriptions',
        'onlyfans',
        'purchases',
        'tips',
        'tags',
        'comments',
        'mentions',
        'likes',
        'promotions',
      ],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.notifications.tabsOrder.update('acct_XXXXXXXXXXXXXXX', {
      tabs: [
        'all',
        'subscriptions',
        'onlyfans',
        'purchases',
        'tips',
        'tags',
        'comments',
        'mentions',
        'likes',
        'promotions',
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.notifications.tabsOrder.get('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
