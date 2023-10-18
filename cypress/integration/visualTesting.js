/// <reference types="cypress" />

describe("Visual Regression", () => {
    it("Wczytywanie się elementu", () => {
        cy.visit("https://picsum.photos/")
        cy.get('header.content-section-light').then(image => {
            cy.wrap(image).toMatchImageSnapshot();
        })
        // cy.document().toMatchImageSnapshot();
    })
})