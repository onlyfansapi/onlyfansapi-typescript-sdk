// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trackingLinks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.trackingLinks.create('acct_XXXXXXXXXXXXXXX', { name: 'Twitter bio' });
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
    const response = await client.trackingLinks.create('acct_XXXXXXXXXXXXXXX', {
      name: 'Twitter bio',
      tags: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.trackingLinks.retrieve('quaerat', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.trackingLinks.retrieve('quaerat', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.trackingLinks.list('acct_XXXXXXXXXXXXXXX');
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
      client.trackingLinks.list(
        'acct_XXXXXXXXXXXXXXX',
        {
          endDate: '2025-01-01 00:00:00, now',
          limit: 3,
          offset: 0,
          sort: 'desc',
          sortby: 'claims',
          startDate: '2025-01-01 00:00:00, -30days',
          synchronous: false,
          with_deleted: false,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.trackingLinks.delete('quaerat', { account: 'acct_XXXXXXXXXXXXXXX' });
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
    const response = await client.trackingLinks.delete('quaerat', { account: 'acct_XXXXXXXXXXXXXXX' });
  });

  // Mock server tests are disabled
  test.skip('getCohortArps: only required params', async () => {
    const responsePromise = client.trackingLinks.getCohortArps('qui', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCohortArps: required and optional params', async () => {
    const response = await client.trackingLinks.getCohortArps('qui', {
      account: 'acct_XXXXXXXXXXXXXXX',
      acquisition_end: '2026-01-31T23:59:59Z',
      acquisition_start: '2026-01-01T00:00:00Z',
      revenue_basis: 'net',
    });
  });

  // Mock server tests are disabled
  test.skip('getStats: only required params', async () => {
    const responsePromise = client.trackingLinks.getStats('dolores', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStats: required and optional params', async () => {
    const response = await client.trackingLinks.getStats('dolores', {
      account: 'acct_XXXXXXXXXXXXXXX',
      date_end: '2026-01-31T23:59:59Z',
      date_start: '2026-01-01T00:00:00Z',
    });
  });

  // Mock server tests are disabled
  test.skip('listSpenders: only required params', async () => {
    const responsePromise = client.trackingLinks.listSpenders('tracking_link_id', {
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
    const response = await client.trackingLinks.listSpenders('tracking_link_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 50,
      minSpend: 1,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('listSubscribers: only required params', async () => {
    const responsePromise = client.trackingLinks.listSubscribers('tracking_link_id', {
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
    const response = await client.trackingLinks.listSubscribers('tracking_link_id', {
      account: 'acct_XXXXXXXXXXXXXXX',
      limit: 10,
      offset: 0,
    });
  });
});
