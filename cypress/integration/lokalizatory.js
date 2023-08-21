/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    it("Lokalizatory", () => {
        cy.visit("/")

        //po znaczniku
        cy.get("a");

        //po identyfikatorze
        cy.get("#search_query_top")

        //po klasie
        cy.get(".form-control")

        //po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[placeholder="Search"]')

        //pobieranie elementów po kilku atrybutach
        cy.get('[src="http://www.automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')



        //zalecana perzez cypress
        cy.get('[data-cy="wyszukiwarka"]')

    })

    it.only("Lokalizatory część 2", () => {
        cy.visit("/")


        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")

    })
})