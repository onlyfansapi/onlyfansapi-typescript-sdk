// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
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
      blockBannedWords: 'strict_ban',
      giphyId: 'WAGC3LeqJvXglm5H7a',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 'string'],
      previews: ['ofapi_media_abc123', 'string'],
      price: 6.97,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      userIds: ['string'],
      userLists: ['fans', 'recent', 'following', 'rebill_off', 'tagged', 'string'],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.massMessaging.list('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
  test.skip('retrieveOverview', async () => {
    const responsePromise = client.massMessaging.retrieveOverview('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveOverview: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.massMessaging.retrieveOverview(
        'acct_XXXXXXXXXXXXXXX',
        {
          endDate: '2025-03-31 23:59:59',
          limit: 10,
          query: 'My message text',
          startDate: '2025-01-01 00:00:00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
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
      blockBannedWords: 'strict_ban',
      excludedLists: ['fans', 'recent', 'following', 'rebill_off', 'tagged', 'string'],
      giphyId: 'WAGC3LeqJvXglm5H7a',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 1234567890],
      previews: ['ofapi_media_abc123', 1234567890],
      price: 6.97,
      rfGuest: 'rfGuest',
      rfPartner: 'rfPartner',
      rfTag: 'rfTag',
      saveForLater: true,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      userIds: ['string'],
      userLists: ['fans', 'recent', 'following', 'rebill_off', 'tagged', 'string'],
    });
  });
});
