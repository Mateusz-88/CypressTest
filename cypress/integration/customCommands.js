/// <reference types="cypress" />

describe("E2E - Custom Commands", () => {
    it("Przykład zastosowania komendy", () => {
        cy.openTshitsTab();
        cy.searchPhrase("test", 3000);

    })
})