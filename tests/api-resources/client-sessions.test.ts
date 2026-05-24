// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Onlyfansapi from '@onlyfansapi/typescript-sdk';

const client = new Onlyfansapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource clientSessions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.clientSessions.create({
      display_name: 'STRLCxGLVC Agency / Model: Stella',
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
    const response = await client.clientSessions.create({
      display_name: 'STRLCxGLVC Agency / Model: Stella',
      client_reference_id: 'my_crm_model_12345',
      proxy_country: 'fr',
    });
  });
});
