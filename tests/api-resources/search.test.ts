// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from 'onlyfansapi';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Prism tests are disabled
  test.skip('profiles: only required params', async () => {
    const responsePromise = client.search.profiles({ query: 'milf' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('profiles: required and optional params', async () => {
    const response = await client.search.profiles({
      query: 'milf',
      limit: 'limit',
      location: 'New York',
      max_subscribe_price: 'max_subscribe_price',
      min_subscribe_price: 'min_subscribe_price',
    });
  });
});
