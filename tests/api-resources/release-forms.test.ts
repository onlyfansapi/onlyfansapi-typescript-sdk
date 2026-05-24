// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnlyFansAPI from '@onlyfansapi/onlyfans-sdk';

const client = new OnlyFansAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource releaseForms', () => {
  // Mock server tests are disabled
  test.skip('createInvitationLink: only required params', async () => {
    const responsePromise = client.releaseForms.createInvitationLink('acct_XXXXXXXXXXXXXXX', {
      name: 'Collab Sebastian - 24/7',
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
  test.skip('createInvitationLink: required and optional params', async () => {
    const response = await client.releaseForms.createInvitationLink('acct_XXXXXXXXXXXXXXX', {
      name: 'Collab Sebastian - 24/7',
    });
  });

  // Mock server tests are disabled
  test.skip('createReleaseForm: only required params', async () => {
    const responsePromise = client.releaseForms.createReleaseForm('acct_XXXXXXXXXXXXXXX', {
      name: 'Example Release Form',
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
  test.skip('createReleaseForm: required and optional params', async () => {
    const response = await client.releaseForms.createReleaseForm('acct_XXXXXXXXXXXXXXX', {
      name: 'Example Release Form',
    });
  });

  // Mock server tests are disabled
  test.skip('listTaggableUsers', async () => {
    const responsePromise = client.releaseForms.listTaggableUsers('acct_XXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTaggableUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.releaseForms.listTaggableUsers(
        'acct_XXXXXXXXXXXXXXX',
        {
          filter: 'all',
          limit: 50,
          name: null,
          offset: 0,
          sort: 'date',
          sortDirection: 'desc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnlyFansAPI.NotFoundError);
  });
});
