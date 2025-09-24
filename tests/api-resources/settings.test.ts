// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.settings.retrieve('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkUsernameExists: only required params', async () => {
    const responsePromise = client.settings.checkUsernameExists('acct_XXXXXXXXXXXXXXX', {
      username: 'MyNewUsername',
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
  test.skip('checkUsernameExists: required and optional params', async () => {
    const response = await client.settings.checkUsernameExists('acct_XXXXXXXXXXXXXXX', {
      username: 'MyNewUsername',
    });
  });

  // Prism tests are disabled
  test.skip('updateProfile', async () => {
    const responsePromise = client.settings.updateProfile('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateProfile: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.settings.updateProfile(
        'acct_XXXXXXXXXXXXXXX',
        {
          about: 'Hey there!',
          avatar: 'ofapi_media_abc123',
          header: 'ofapi_media_abc123',
          location: 'Europe',
          name: 'u1234',
          username: 'MyNewUsername',
          website: 'https://example.com',
          wishlist: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Onlyfansapi.NotFoundError);
  });
});
