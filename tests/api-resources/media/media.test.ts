// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi, { toFile } from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // Mock server tests are disabled
  test.skip('scrape', async () => {
    const responsePromise = client.media.scrape('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('scrape: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.media.scrape(
        'acct_XXXXXXXXXXXXXXX',
        {
          expiration_date: '2025-01-01 00:00:00',
          file_type: 'full',
          media_id: 1234567890,
          public: false,
          url: 'https://cdn2.onlyfans.com/files/e/e5/123/600x400_123.jpg?Tag=2&u=123&Policy=123&Signature=signature&Key-Pair-Id=123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Onlyfansapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upload', async () => {
    const responsePromise = client.media.upload('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.media.upload(
        'acct_XXXXXXXXXXXXXXX',
        {
          async: true,
          file: await toFile(Buffer.from('Example data'), 'README.md'),
          file_url: 'https://example.com/media/photo.jpg',
          type: 'avatar',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Onlyfansapi.NotFoundError);
  });
});
