// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource highlights', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.stories.highlights.create('acct_XXXXXXXXXXXXXXX', {
      coverStoryId: 9876543210,
      storyIds: ['string', 'string'],
      title: 'My Highlight',
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
    const response = await client.stories.highlights.create('acct_XXXXXXXXXXXXXXX', {
      coverStoryId: 9876543210,
      storyIds: ['string', 'string'],
      title: 'My Highlight',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.stories.highlights.retrieve(1234567890, {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.stories.highlights.retrieve(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.stories.highlights.update(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      coverStoryId: 9876543210,
      storyIds: ['string', 'string'],
      title: 'My Updated Highlight',
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
    const response = await client.stories.highlights.update(1234567890, {
      account: 'acct_XXXXXXXXXXXXXXX',
      coverStoryId: 9876543210,
      storyIds: ['string', 'string'],
      title: 'My Updated Highlight',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.stories.highlights.list('acct_XXXXXXXXXXXXXXX');
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
      client.stories.highlights.list(
        'acct_XXXXXXXXXXXXXXX',
        { limit: 5, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.stories.highlights.delete(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.stories.highlights.delete(1234567890, { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('addStory: only required params', async () => {
    const responsePromise = client.stories.highlights.addStory('autem', {
      account: 'acct_XXXXXXXXXXXXXXX',
      highlight_id: 1234567890,
      story_id: 2345678901,
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
  test.skip('addStory: required and optional params', async () => {
    const response = await client.stories.highlights.addStory('autem', {
      account: 'acct_XXXXXXXXXXXXXXX',
      highlight_id: 1234567890,
      story_id: 2345678901,
    });
  });

  // Mock server tests are disabled
  test.skip('removeStory: only required params', async () => {
    const responsePromise = client.stories.highlights.removeStory('autem', {
      account: 'acct_XXXXXXXXXXXXXXX',
      highlight_id: 1234567890,
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
  test.skip('removeStory: required and optional params', async () => {
    const response = await client.stories.highlights.removeStory('autem', {
      account: 'acct_XXXXXXXXXXXXXXX',
      highlight_id: 1234567890,
    });
  });
});
