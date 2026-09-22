// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource smartLinkPostbacks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.smartLinkPostbacks.create({
      conversion_types: ['new_subscriber', 'new_transaction'],
      smart_link_scope: 'campaign_specific',
      url: 'https://example.com/postback?click={external_click_id}&type={conversion_type}&gclid={gclid}',
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
    const response = await client.smartLinkPostbacks.create({
      conversion_types: ['new_subscriber', 'new_transaction'],
      smart_link_scope: 'campaign_specific',
      url: 'https://example.com/postback?click={external_click_id}&type={conversion_type}&gclid={gclid}',
      body: '{"click_id":"{click_id}","value":"{amount_gross}"}',
      headers: [{ name: 'Authorization', value: 'Bearer token' }],
      http_method: 'POST',
      smart_link_ids: ['01JTESTLINK000000000000001'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.smartLinkPostbacks.retrieve(123);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.smartLinkPostbacks.update(123, {
      conversion_types: ['new_subscriber'],
      smart_link_scope: 'global',
      url: 'https://example.com/postback?click={external_click_id}&type={conversion_type}',
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
    const response = await client.smartLinkPostbacks.update(123, {
      conversion_types: ['new_subscriber'],
      smart_link_scope: 'global',
      url: 'https://example.com/postback?click={external_click_id}&type={conversion_type}',
      body: '{"click_id":"{click_id}","value":"{amount_gross}"}',
      headers: [{ name: 'Authorization', value: 'Bearer token' }],
      http_method: 'POST',
      smart_link_ids: ['01JTESTLINK000000000000001'],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.smartLinkPostbacks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.smartLinkPostbacks.delete(123);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
