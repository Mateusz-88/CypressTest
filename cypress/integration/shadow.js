/// <reference types="cypress" />

describe("E2E - Shadow DOM", () => {
    it("Wykorzystanie metody shadow", () => {
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");

        cy.get(".smart-ui-component").shadow().contains("File").click()

        cy.contains("File")
    })
})