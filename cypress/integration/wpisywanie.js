/// <reference types= "cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")

        cy.get("#search_query_top").type("testinb{backspace}g", { delay: 500 })
    })

    it("Czyszczenie wartości z pola input", () => {
        cy.get("#search_query_top").clear()
    })
    it('Jeszcze raz wpisywanie', () => {
        cy.searchPhrase("testing", 300);
    });
    it('jeszcze raz czyszczenie', () => {
        cy.clearPhrase();
    });
})