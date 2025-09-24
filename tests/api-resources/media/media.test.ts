// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // Prism tests are disabled
  test.skip('scrape: only required params', async () => {
    const responsePromise = client.media.scrape('acct_XXXXXXXXXXXXXXX', {
      url: 'https://cdn2.onlyfans.com/files/e/e5/123/600x400_123.jpg?Tag=2&u=123&Policy=123&Signature=signature&Key-Pair-Id=123',
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
  test.skip('scrape: required and optional params', async () => {
    const response = await client.media.scrape('acct_XXXXXXXXXXXXXXX', {
      url: 'https://cdn2.onlyfans.com/files/e/e5/123/600x400_123.jpg?Tag=2&u=123&Policy=123&Signature=signature&Key-Pair-Id=123',
      expiration_date: '2025-01-01 00:00:00',
    });
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.media.upload('acct_XXXXXXXXXXXXXXX', { file: 'file.jpg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.media.upload('acct_XXXXXXXXXXXXXXX', { file: 'file.jpg', type: 'avatar' });
  });
});
