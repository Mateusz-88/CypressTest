/// <reference types = "cypress" />

import alertPage from "../support/page-object/alertPage";



describe("Alrety", () => {
    it('Alert', () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")

        // alertPage.clickOnBtnAlert1();
        // alertPage.verifyAlertText("Przykładowa treść alertu");

        alertPage.btnAlert1.click();


        // cy.get("#alert").click()
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal("Przykładowa treść alertu2")
        })
    });

    it('Alert corfirm', () => {


        alertPage.clickOnBtnAlert2();
        alertPage.verifyAlertConfirmText();
        alertPage.acceptAlert();

        // cy.get("#alert-confirm").click()
        // cy.on("window:confirm", tresc => {
        //     expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        // })

        // cy.on("window:confirm", () => false)
    });
})