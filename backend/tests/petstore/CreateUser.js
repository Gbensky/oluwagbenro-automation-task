const test = require('chai').expect;
const api = require('../../support/helpers.js');
const env = require('../../config/env.js')[process.env.ENV];
const apiData = require('../../services/petstore/api_data/PetStoreAPIData.json');


describe('Petstore API suite - Create Users', function () {

    it('Create User', async function () {
        const users = await api.postRequest(env.petstore, apiData.apis.getUser, apiData.postUser, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal(apiData.postUser.id.toString());
    })

    it('Create User with No Fields', async function () {
        const users = await api.postRequest(env.petstore, apiData.apis.getUser, apiData.postUserNoField, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal("0");
    })

});