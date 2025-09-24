// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.media.vault.lists.media.add('ut', {
      account: 'acct_XXXXXXXXXXXXXXX',
      mediaIds: ['string'],
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
  test.skip('add: required and optional params', async () => {
    const response = await client.media.vault.lists.media.add('ut', {
      account: 'acct_XXXXXXXXXXXXXXX',
      mediaIds: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.media.vault.lists.media.remove('ut', {
      account: 'acct_XXXXXXXXXXXXXXX',
      mediaIds: ['string'],
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.media.vault.lists.media.remove('ut', {
      account: 'acct_XXXXXXXXXXXXXXX',
      mediaIds: ['string'],
    });
  });
});
