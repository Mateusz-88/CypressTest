class SlectPage {
    get select() {
        return cy.get("#selectProductSort")
    }

    slelctAllOption() {
        this.select.then(selekt => {
            cy.wrap(selekt).find("option").each(opcja => {
                cy.wrap(selekt).select(opcja.val())
            })
        })
    }
}

export default new SlectPage();