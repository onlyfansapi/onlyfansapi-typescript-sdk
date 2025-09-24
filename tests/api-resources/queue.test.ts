// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queue', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.queue.list('acct_XXXXXXXXXXXXXXX', {
      limit: 20,
      publishDateEnd: '2025-01-01',
      publishDateStart: '2025-01-01',
      timezone: 'Europe/Prague',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.queue.list('acct_XXXXXXXXXXXXXXX', {
      limit: 20,
      publishDateEnd: '2025-01-01',
      publishDateStart: '2025-01-01',
      timezone: 'Europe/Prague',
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.queue.count('acct_XXXXXXXXXXXXXXX', {
      publishDateEnd: '2025-01-01',
      publishDateStart: '2025-01-01',
      timezone: 'Europe/Prague',
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
  test.skip('count: required and optional params', async () => {
    const response = await client.queue.count('acct_XXXXXXXXXXXXXXX', {
      publishDateEnd: '2025-01-01',
      publishDateStart: '2025-01-01',
      timezone: 'Europe/Prague',
    });
  });

  // Prism tests are disabled
  test.skip('publish: only required params', async () => {
    const responsePromise = client.queue.publish('queue_id', { account: 'acct_XXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publish: required and optional params', async () => {
    const response = await client.queue.publish('queue_id', { account: 'acct_XXXXXXXXXXXXXXX' });
  });
});
