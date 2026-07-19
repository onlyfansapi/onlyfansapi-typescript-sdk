// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trialLinks', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.trialLinks.create('acct_XXXXXXXXXXXXXXX', {
      duration: 7,
      offerExpiration: 7,
      offerLimit: 7,
      name: 'name',
      tags: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.trialLinks.retrieve('dolorem', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.trialLinks.retrieve('dolorem', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.trialLinks.list('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.trialLinks.list(
        'acct_XXXXXXXXXXXXXXX',
        {
          endDate: '2025-01-31 23:59:59',
          field: 'create_date',
          limit: 10,
          offset: 0,
          sort: 'desc',
          startDate: '2025-01-01 00:00:00',
          synchronous: false,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.trialLinks.delete('dolorem', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.trialLinks.delete('dolorem', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('listSpenders: required and optional params', async () => {
    const response = await client.trialLinks.listSpenders('trial_link_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 50,
      minSpend: 1,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('listSubscribers: only required params', async () => {
    const responsePromise = client.trialLinks.listSubscribers('vero', {
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

  // Mock server tests are disabled
  test.skip('listSubscribers: required and optional params', async () => {
    const response = await client.trialLinks.listSubscribers('vero', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveCohortArps: only required params', async () => {
    const responsePromise = client.trialLinks.retrieveCohortArps('explicabo', {
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
  test.skip('retrieveCohortArps: required and optional params', async () => {
    const response = await client.trialLinks.retrieveCohortArps('explicabo', {
      account: 'acct_XXXXXXXXXXXXXXX',
      acquisition_end: '2026-01-31T23:59:59Z',
      acquisition_start: '2026-01-01T00:00:00Z',
      revenue_basis: 'net',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveStats: only required params', async () => {
    const responsePromise = client.trialLinks.retrieveStats('consequatur', {
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
  test.skip('retrieveStats: required and optional params', async () => {
    const response = await client.trialLinks.retrieveStats('consequatur', {
      account: 'acct_XXXXXXXXXXXXXXX',
      date_end: '2026-01-31T23:59:59Z',
      date_start: '2026-01-01T00:00:00Z',
    });
  });
});
