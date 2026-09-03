// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource userLists', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.userLists.create('acct_XXXXXXXXXXXXXXX', { name: 'btnxbvditss' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.userLists.create('acct_XXXXXXXXXXXXXXX', { name: 'btnxbvditss' });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.userLists.retrieve('userListId', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.userLists.retrieve('userListId', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.userLists.update('userListId', {
      account: 'acct_XXXXXXXXXXXXXXX',
      name: 'My Updated List Name',
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
    const response = await client.userLists.update('userListId', {
      account: 'acct_XXXXXXXXXXXXXXX',
      name: 'My Updated List Name',
      isPinnedToFeed: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.userLists.list('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.userLists.list(
        'acct_XXXXXXXXXXXXXXX',
        {
          limit: 10,
          offset: 0,
          view: 'queue',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.userLists.delete('userListId', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.userLists.delete('userListId', { account: 'acct_XXXXXXXXXXXXXXX' });
  });
});
