/// <reference types="cypress" />



describe("E2E - Asercje", () => {
    it("Asercje expect orez should", () => {
        cy.visit("/")

        //Wryfikacja tekstu

        cy.get('a[title="Contact us').should("contain", "Contact us")
        cy.get('a[title="Contact us').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //Sprawdzenie czy nie zawiera tekstu

        cy.get('a[title="Contact us').should("not.contain", "Sign In")
        cy.get('a[title="Contact us').then(zakladka => {
            expect(zakladka).to.not.contain("Sign In")
        })

        //Weryfikacja czy znacznik posiada klase

        cy.get('#search_query_top').should("have.class", "form-control")
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //czy element jest widoczny

        cy.get('#search_query_top').should("be.visible")
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //Weryfikacja pobranych elementów

        cy.get('ul.sf-menu').find("li").should("have.length", 16)
        cy.get('ul.sf-menu').find("li").then(zakladki => {
            expect(zakladki).to.have.length(16)
        })

        //Weryfikacja wartość css danego elementu

        cy.get('#search_query_top').should("have.css", "height", "45px")
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("height", "45px")
        })
    })
})