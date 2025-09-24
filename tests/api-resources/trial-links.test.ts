// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trialLinks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.trialLinks.create('acct_XXXXXXXXXXXXXXX', {
      duration: 7,
      offerExpiration: 7,
      offerLimit: 7,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.trialLinks.create('acct_XXXXXXXXXXXXXXX', {
      duration: 7,
      offerExpiration: 7,
      offerLimit: 7,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.trialLinks.list('acct_XXXXXXXXXXXXXXX', { limit: 10, offset: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.trialLinks.list('acct_XXXXXXXXXXXXXXX', {
      limit: 10,
      offset: 0,
      field: 'create_date',
      sort: 'desc',
      synchronous: false,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.trialLinks.delete(123456789, { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.trialLinks.delete(123456789, { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Prism tests are disabled
  test.skip('listSpenders: only required params', async () => {
    const responsePromise = client.trialLinks.listSpenders('trial_link_id', {
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

  // Prism tests are disabled
  test.skip('listSpenders: required and optional params', async () => {
    const response = await client.trialLinks.listSpenders('trial_link_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 50,
      minSpend: 1,
      offset: 0,
    });
  });

  // Prism tests are disabled
  test.skip('listSubscribers: only required params', async () => {
    const responsePromise = client.trialLinks.listSubscribers('excepturi', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      offset: 0,
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
  test.skip('listSubscribers: required and optional params', async () => {
    const response = await client.trialLinks.listSubscribers('excepturi', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      offset: 0,
    });
  });
});
