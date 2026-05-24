// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from 'onlyfansapi';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  // Mock server tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.media.uploads.getStatus('ofapi_media_01JR1234', {
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
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.media.uploads.getStatus('ofapi_media_01JR1234', {
      account: 'acct_XXXXXXXXXXXXXXX',
    });
  });
});
