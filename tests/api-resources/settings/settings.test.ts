// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('checkUsernameAvailability: only required params', async () => {
    const responsePromise = client.settings.checkUsernameAvailability('acct_XXXXXXXXXXXXXXX', {
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

  // Mock server tests are disabled
  test.skip('checkUsernameAvailability: required and optional params', async () => {
    const response = await client.settings.checkUsernameAvailability('acct_XXXXXXXXXXXXXXX', {
      username: 'MyNewUsername',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateSubscriptionPrice: only required params', async () => {
    const responsePromise = client.settings.updateSubscriptionPrice('acct_XXXXXXXXXXXXXXX', {
      price: '4.99',
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
  test.skip('updateSubscriptionPrice: required and optional params', async () => {
    const response = await client.settings.updateSubscriptionPrice('acct_XXXXXXXXXXXXXXX', { price: '4.99' });
  });
});
