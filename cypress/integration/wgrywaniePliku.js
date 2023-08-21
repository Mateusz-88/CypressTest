/// <reference types="cypress" />

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do inputa ", () => {
        cy.visit("/index.php?controller=contact")

        cy.get("#fileUpload").attachFile("../fixtures/petunia.jpg")
        cy.get("span.filename").should("contain", "petunia.jpg")
    })
})