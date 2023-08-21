/// <reference types = "cypress" />
import selectPage from "../support/page-object/selectPage";


describe("Akcja wybrania odcji selekt", () => {
    it('Wybieranie opcji', () => {
        cy.visit('/index.php?id_category=3&controller=category')

        //Po nazwie
        cy.get('#selectProductSort').select('Price: Lowest first')

        //Po value
        cy.get('#selectProductSort').select('price:desc')

        //Po indeksach
        cy.get('#selectProductSort').select(7)

    });


    //do poprawy
    it.only('Wybieranie wszystkicj opcji', () => {
        cy.visit('/index.php?id_category=3&controller=category')

        selectPage.slelctAllOption();

        // cy.get('#selectProductSort').then(selekt => {
        //     cy.wrap(selekt).find("option").each(opcja => {
        //         cy.wrap(selekt).select(opcja.val())
        //     })
        // })
    });
})