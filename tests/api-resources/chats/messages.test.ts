// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.chats.messages.retrieve('69696969', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.chats.messages.retrieve('69696969', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.chats.messages.list('123', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.chats.messages.list('123', {
      account: 'acct_XXXXXXXXXXXXXXX',
      filter: 'pinned',
      first_id: 'first_id',
      last_id: 'last_id',
      limit: 'limit',
      order: 'desc',
      skip_users: 'all',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.chats.messages.delete('69696969', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.chats.messages.delete('69696969', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });

  // Mock server tests are disabled
  test.skip('like: only required params', async () => {
    const responsePromise = client.chats.messages.like('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('like: required and optional params', async () => {
    const response = await client.chats.messages.like('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });

  // Mock server tests are disabled
  test.skip('pin: only required params', async () => {
    const responsePromise = client.chats.messages.pin('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('pin: required and optional params', async () => {
    const response = await client.chats.messages.pin('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.chats.messages.search('123', {
      account: 'acct_XXXXXXXXXXXXXXX',
      query: 'Hello',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.chats.messages.search('123', {
      account: 'acct_XXXXXXXXXXXXXXX',
      query: 'Hello',
    });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.chats.messages.send('123', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.chats.messages.send('123', {
      account: 'acct_XXXXXXXXXXXXXXX',
      blockBannedWords: 'strict_ban',
      giphyId: 'WAGC3LeqJvXglm5H7a',
      lockedText: true,
      mediaFiles: ['ofapi_media_abc123', 1234567890],
      previews: ['ofapi_media_abc123', 1234567890],
      price: 10,
      replyToMessageId: 123456789,
      rfGuest: 'rfGuest',
      rfPartner: 'rfPartner',
      rfTag: 'rfTag',
      text: 'Hello!',
    });
  });

  // Mock server tests are disabled
  test.skip('unlike: only required params', async () => {
    const responsePromise = client.chats.messages.unlike('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('unlike: required and optional params', async () => {
    const response = await client.chats.messages.unlike('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });

  // Mock server tests are disabled
  test.skip('unpin: only required params', async () => {
    const responsePromise = client.chats.messages.unpin('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
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
  test.skip('unpin: required and optional params', async () => {
    const response = await client.chats.messages.unpin('123456789', {
      account: 'acct_XXXXXXXXXXXXXXX',
      chat_id: '123',
    });
  });
});
