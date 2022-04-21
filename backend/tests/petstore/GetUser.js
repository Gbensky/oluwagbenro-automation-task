const test = require('chai').expect;
const assert = require('chai').assert;
const api = require('../../support/helpers.js');
const env = require('../../config/env.js')[process.env.ENV];
const apiData = require('../../services/petstore/api_data/PetStoreAPIData.json');


describe('Petstore API suite - Get Users', function () {

    it('Get User with Valid Username', async function () {
        const users = await api.getRequest(env.petstore, apiData.apis.getUser + "/" + apiData.postUser.username, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        assert.deepStrictEqual(apiData.postUser, users.body)
    })

    it('Get User with Non Existing Username', async function () {
        const users = await api.getRequest(env.petstore, apiData.apis.getUser + "/abcd", apiData.commonHeaders);
        test(users.statusCode).to.equal(404);
    })
});