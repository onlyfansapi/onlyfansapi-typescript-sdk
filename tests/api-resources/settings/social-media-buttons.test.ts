// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource socialMediaButtons', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.settings.socialMediaButtons.update('button_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      label: 'Instagram',
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
    const response = await client.settings.socialMediaButtons.update('button_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      label: 'Instagram',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.settings.socialMediaButtons.list('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.settings.socialMediaButtons.delete('button_id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.settings.socialMediaButtons.delete('button_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
    });
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.settings.socialMediaButtons.add('acct_XXXXXXXXXXXXXXX', {
      label: 'Instagram',
      type: 'instagram',
      value: 'example_user',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.settings.socialMediaButtons.add('acct_XXXXXXXXXXXXXXX', {
      label: 'Instagram',
      type: 'instagram',
      value: 'example_user',
    });
  });

  // Mock server tests are disabled
  test.skip('reorder: only required params', async () => {
    const responsePromise = client.settings.socialMediaButtons.reorder('acct_XXXXXXXXXXXXXXX', {
      button_ids: ['string', 'string'],
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
  test.skip('reorder: required and optional params', async () => {
    const response = await client.settings.socialMediaButtons.reorder('acct_XXXXXXXXXXXXXXX', {
      button_ids: ['string', 'string'],
    });
  });
});
