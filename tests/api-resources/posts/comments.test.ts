// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comments', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.posts.comments.create('nemo', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'This is a comment.',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.posts.comments.create('nemo', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'This is a comment.',
      answerTo: 123,
      giphyId: 'giphy123',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.posts.comments.list('nemo', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.posts.comments.list('nemo', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      offset: 0,
      sort: 'desc',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.posts.comments.delete(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
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
    const response = await client.posts.comments.delete(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('like: only required params', async () => {
    const responsePromise = client.posts.comments.like(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
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
    const response = await client.posts.comments.like(123, { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 });
  });

  // Mock server tests are disabled
  test.skip('pin: only required params', async () => {
    const responsePromise = client.posts.comments.pin(123, { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 });
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
    const response = await client.posts.comments.pin(123, { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 });
  });

  // Mock server tests are disabled
  test.skip('unlike: only required params', async () => {
    const responsePromise = client.posts.comments.unlike(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
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
    const response = await client.posts.comments.unlike(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('unpin: only required params', async () => {
    const responsePromise = client.posts.comments.unpin(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
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
    const response = await client.posts.comments.unpin(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });
});
