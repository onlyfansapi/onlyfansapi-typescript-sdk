// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.chats.messages.list('458485726', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.chats.messages.list('458485726', {
      account: 'acct_XXXXXXXXXXXXXXX',
      id: 'id',
      order: 'desc',
      skip_users: 'all',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.chats.messages.delete('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '458485726',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.chats.messages.delete('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '458485726',
    });
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.chats.messages.send('458485726', {
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
  test.skip('send: required and optional params', async () => {
    const response = await client.chats.messages.send('458485726', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'Hello!',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 'string'],
      previews: ['ofapi_media_abc123', 'string'],
      price: 10,
    });
  });
});
