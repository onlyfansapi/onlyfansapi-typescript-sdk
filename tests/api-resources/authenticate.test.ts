// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authenticate', () => {
  // Mock server tests are disabled
  test.skip('pollStatus', async () => {
    const responsePromise = client.authenticate.pollStatus('auth_XXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reauthenticate', async () => {
    const responsePromise = client.authenticate.reauthenticate('acct_XXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send2faEmail', async () => {
    const responsePromise = client.authenticate.send2faEmail('auth_XXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start', async () => {
    const responsePromise = client.authenticate.start();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.authenticate.start(
        {
          auth_id: 'perspiciatis',
          auth_type: 'raw_data',
          cookies: 'velit',
          customProxy: {
            host: 'proxy.example.com',
            password: '98#3wqHt6KL]fL',
            port: 8080,
            username: 'optio',
          },
          email: 'lenna.hansen@example.org',
          force_connect: true,
          name: 'perferendis',
          password: 'P)1([k}vz1',
          proxyCountry: 'uk',
          user_agent: 'perspiciatis',
          xbc: 'cupiditate',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('submit2fa', async () => {
    const responsePromise = client.authenticate.submit2fa('auth_XXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit2fa: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.authenticate.submit2fa(
        'auth_XXXXXXX',
        { code: '12345', selfie_verification_completed: 'true' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });
});
