const test = require('chai').expect;
const api = require('../../support/helpers.js');
const env = require('../../config/env.js')[process.env.ENV];
const apiData = require('../../services/petstore/api_data/PetStoreAPIData.json');


describe('Petstore API suite - Update Users', function () {

    it('Update User', async function () {
        const users = await api.putRequest(env.petstore, apiData.apis.getUser + "/" + apiData.postUser.username, apiData.putUser, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal(apiData.putUser.id.toString());
    })

    it('Update User with No Fields', async function () {
        const users = await api.putRequest(env.petstore, apiData.apis.getUser + "/" + apiData.putUser.username, apiData.postUserNoField, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal("0");
    })

    it('Update User with Non Existing Username', async function () {
        const users = await api.putRequest(env.petstore, apiData.apis.getUser + "/" + "efgh", apiData.putUser, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
        test(users.body.message).to.equal(apiData.putUser.id.toString());

    })
});