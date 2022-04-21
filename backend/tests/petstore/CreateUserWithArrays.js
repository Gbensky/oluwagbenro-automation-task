const test = require('chai').expect;
const assert = require('chai').assert;
const api = require('../../support/helpers.js');
const env = require('../../config/env.js')[process.env.ENV];
const apiData = require('../../services/petstore/api_data/PetStoreAPIData.json');


describe('Petstore API suite - Create Users with Array', function () {

    it('Create Multiple Users', async function () {
        const users = await api.postRequest(env.petstore, apiData.apis.getUser + "/createWithArray", apiData.postUserArray, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal("ok");
    })

    it('Get User with Valid Username (From Multiple Array) 1', async function () {
        const users = await api.getRequest(env.petstore, apiData.apis.getUser + "/" + apiData.postUserArray[0].username, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        assert.deepStrictEqual(apiData.postUserArray[0], users.body)
    })

    it('Get User with Valid Username (From Multiple Array) 2', async function () {
        const users = await api.getRequest(env.petstore, apiData.apis.getUser + "/" + apiData.postUserArray[1].username, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        assert.deepStrictEqual(apiData.postUserArray[1], users.body)
    })

});