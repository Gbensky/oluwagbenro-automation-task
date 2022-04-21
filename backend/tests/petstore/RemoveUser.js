const test = require('chai').expect;
const api = require('../../support/helpers.js');
const env = require('../../config/env.js')[process.env.ENV];
const apiData = require('../../services/petstore/api_data/PetStoreAPIData.json');


describe('Petstore API suite - Delete Users', function () {

    it('Delete User with Valid Username', async function () {
        const users = await api.deleteRequest(env.petstore, apiData.apis.getUser + "/" + apiData.putUser.username, apiData.commonHeaders);
        test(users.statusCode).to.equal(200);
    })

    it('Delete User with Non Existing Username', async function () {
        const users = await api.deleteRequest(env.petstore, apiData.apis.getUser + "/ijkl", apiData.commonHeaders);
        test(users.statusCode).to.equal(404);
    })

    it('Get Delete User', async function () {
        const users = await api.getRequest(env.petstore, apiData.apis.getUser + "/" + apiData.putUser.username, apiData.commonHeaders);
        test(users.statusCode).to.equal(404);
    })
});