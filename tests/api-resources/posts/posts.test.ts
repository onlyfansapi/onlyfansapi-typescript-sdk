// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.posts.create('acct_XXXXXXXXXXXXXXX', { text: 'Hello!' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.posts.create('acct_XXXXXXXXXXXXXXX', {
      text: 'Hello!',
      expireDays: 3,
      fundRaisingTargetAmount: 30,
      fundRaisingTipsPresets: ['string', 'string', 'string'],
      labelIds: 'labelIds',
      mediaFiles: 'mediaFiles',
      previews: ['ofapi_media_abc123', 'string'],
      rfTag: 'rfTag',
      saveForLater: true,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      votingCorrectIndex: 0,
      votingDue: 3,
      votingOptions: ['First option', 'Second option'],
      votingType: 'poll',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.posts.retrieve(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.posts.retrieve(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.posts.update(1234567890, {
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.posts.update(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'Hello!',
      expireDays: 3,
      fundRaisingTargetAmount: 30,
      fundRaisingTipsPresets: ['string', 'string', 'string'],
      labelIds: 'labelIds',
      mediaFiles: 'mediaFiles',
      price: 10,
      rfTag: 'rfTag',
      saveForLater: true,
      scheduledDate: '2025-01-01T00:00:00.000Z',
      votingCorrectIndex: 0,
      votingDue: 3,
      votingOptions: ['First option', 'Second option'],
      votingType: 'poll',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.posts.list('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.posts.list(
        'acct_XXXXXXXXXXXXXXX',
        {
          counters: true,
          limit: 10,
          minimumPublishDate: '2025-06-26',
          offset: 0,
          order: 'publish_date',
          pinned: true,
          query: 'Hello',
          sort: 'desc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Onlyfansapi.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.posts.delete(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.posts.delete(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Prism tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.posts.archive(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('archive: required and optional params', async () => {
    const response = await client.posts.archive(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      private_archive: true,
    });
  });

  // Prism tests are disabled
  test.skip('pin: only required params', async () => {
    const responsePromise = client.posts.pin(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('pin: required and optional params', async () => {
    const response = await client.posts.pin(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Prism tests are disabled
  test.skip('stats: only required params', async () => {
    const responsePromise = client.posts.stats(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stats: required and optional params', async () => {
    const response = await client.posts.stats(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      with_historical_data: true,
    });
  });

  // Prism tests are disabled
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.posts.unarchive(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.posts.unarchive(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      private_archive: true,
    });
  });
});
