/// <reference types="cypress" />

describe("E2E - Skrolowanie / Najechanie", () => {
    it("najechanie na dany element", () => {
        cy.visit("/")

        cy.get('a[title = "Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click()
    })

    it('Scrolowanie do elementu', () => {
        //  cy.get("#special_block_right").trigger("scroll")
        cy.get('a[title="Specials"]').scrollIntoView()
    });
})