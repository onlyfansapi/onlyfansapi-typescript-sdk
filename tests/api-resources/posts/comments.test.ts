// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comments', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.posts.comments.create('id', {
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
    const response = await client.posts.comments.create('id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      text: 'This is a comment.',
      answerTo: 123,
      giphyId: 'giphy123',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.posts.comments.list('id', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.posts.comments.list('id', {
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
  test.skip('likeComment: only required params', async () => {
    const responsePromise = client.posts.comments.likeComment(123, {
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
  test.skip('likeComment: required and optional params', async () => {
    const response = await client.posts.comments.likeComment(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('pinComment: only required params', async () => {
    const responsePromise = client.posts.comments.pinComment(123, {
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
  test.skip('pinComment: required and optional params', async () => {
    const response = await client.posts.comments.pinComment(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('unlikeComment: only required params', async () => {
    const responsePromise = client.posts.comments.unlikeComment(123, {
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
  test.skip('unlikeComment: required and optional params', async () => {
    const response = await client.posts.comments.unlikeComment(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('unpinComment: only required params', async () => {
    const responsePromise = client.posts.comments.unpinComment(123, {
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
  test.skip('unpinComment: required and optional params', async () => {
    const response = await client.posts.comments.unpinComment(123, {
      account: 'acct_XXXXXXXXXXXXXXX',
      post_id: 123,
    });
  });
});
