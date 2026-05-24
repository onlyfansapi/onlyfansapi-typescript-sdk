// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notes', () => {
  // Mock server tests are disabled
  test.skip('clearNotes: only required params', async () => {
    const responsePromise = client.fans.notes.clearNotes('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clearNotes: required and optional params', async () => {
    const response = await client.fans.notes.clearNotes('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('createEditNotes: only required params', async () => {
    const responsePromise = client.fans.notes.createEditNotes('fan_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      notes: 'Example note',
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
  test.skip('createEditNotes: required and optional params', async () => {
    const response = await client.fans.notes.createEditNotes('fan_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      notes: 'Example note',
    });
  });

  // Mock server tests are disabled
  test.skip('getNotes: only required params', async () => {
    const responsePromise = client.fans.notes.getNotes('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getNotes: required and optional params', async () => {
    const response = await client.fans.notes.getNotes('fan_id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });
});
