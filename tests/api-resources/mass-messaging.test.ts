// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource massMessaging', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.massMessaging.retrieve('id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.massMessaging.retrieve('id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.massMessaging.update('id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'Hello!',
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
    const response = await client.massMessaging.update('id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'Hello!',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 'string'],
      previews: ['ofapi_media_abc123', 'string'],
      price: 100,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      userIds: ['string'],
      userLists: ['fans', 'recent', 'following', 'rebill_off', 'tagged', 'string'],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.massMessaging.delete('id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.massMessaging.delete('id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('listQueue', async () => {
    const responsePromise = client.massMessaging.listQueue('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listStatistics', async () => {
    const responsePromise = client.massMessaging.listStatistics('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listStatistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.massMessaging.listStatistics(
        'acct_XXXXXXXXXXXXXXX',
        {
          limit: 20,
          offset: 0,
          query: 'My message text',
          type: 'sent',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Onlyfansapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.massMessaging.send('acct_XXXXXXXXXXXXXXX', { text: 'Hello!' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.massMessaging.send('acct_XXXXXXXXXXXXXXX', {
      text: 'Hello!',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 'string'],
      previews: ['ofapi_media_abc123', 'string'],
      price: 100,
      saveForLater: true,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      userIds: ['string'],
      userLists: ['fans', 'recent', 'following', 'rebill_off', 'tagged', 'string'],
    });
  });
});
