import {SearchPage} from "../../support/pageObjects/WikiSearch/searchPage";

let validText = "Mark";
let invalidText = "hjguyyjgjghjhjgjggjg";

describe("Wikipedia Search", function () {

    beforeEach(function () {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Search with Valid Text", function () {

        cy.log("Enter Valid Search Text");
        cy.get(SearchPage.searchInput)
            .type(validText)
            .type('{enter}')

        cy.log("Check that all Results have search text");
        cy.get(SearchPage.searchResultContainer)
            .then(($list) => {
                for (let i = 0; i < $list.length; i++) {
                    cy.get(SearchPage.searchResultContainer)
                        .eq(i).find(SearchPage.searchResultTitle)
                        .contains( validText, {matchCase: false})

                    cy.get(SearchPage.searchResultContainer)
                        .eq(i).find(SearchPage.searchResultBody)
                        .contains( validText, {matchCase: false})
                }
            })

    });

    it("Search with InvValid Text", function () {

        cy.log("Enter Invalid Search Text");
        cy.get(SearchPage.searchInput)
            .type(invalidText)
            .type('{enter}')

        cy.log("Check that no result is returned");
        cy.get(SearchPage.searchResultMultiple)
            .find(SearchPage.searchNotFound)
            .contains("There were no results matching the query.")
    });

});
