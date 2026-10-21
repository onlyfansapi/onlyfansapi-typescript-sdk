// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource welcomeMessage', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.settings.welcomeMessage.retrieve('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.settings.welcomeMessage.update('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.settings.welcomeMessage.update(
        'acct_XXXXXXXXXXXXXXX',
        {
          isForward: false,
          lockedText: false,
          mediaFiles: ['ofapi_media_abc123', 1234567890],
          previews: ['ofapi_media_abc123', 1234567890],
          price: 0,
          rfGuest: 'rfGuest',
          rfPartner: 'rfPartner',
          rfTag: 'rfTag',
          text: '<p>Hey, welcome to my profile</p>',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('toggle: only required params', async () => {
    const responsePromise = client.settings.welcomeMessage.toggle('acct_XXXXXXXXXXXXXXX', { enabled: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('toggle: required and optional params', async () => {
    const response = await client.settings.welcomeMessage.toggle('acct_XXXXXXXXXXXXXXX', { enabled: true });
  });
});
