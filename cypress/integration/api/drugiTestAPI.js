/// <reference types="cypress" />

describe("Wykonywanie zapytania bezposrednio do api", () => {
    beforeEach(function () {
        cy.fixture("example").then(data => {
            this.daneApi = data
        })
    })


    it("Autoryzacja + Dodawanie nowego artykulu", () => {
        const daneAutoryzacja = {
            "user": {
                "email": "tester@cytest.pl",
                "password": "asdzxc@"
            }
        }

        const daneArtukul = {
            "article": {
                "tagList": [],
                "title": "test tytul bezposrednio z api",
                "description": "test",
                "body": "test"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja)
            .its("body").then(res => {
                const authToken = res.user.token;
                console.log(authToken)

                cy.request({
                    method: "POST",
                    url: "https://api.realworld.io/api/articles/",
                    body: daneArtukul,
                    headers: {
                        'Authorization': "Token " + authToken
                    }
                })
                    .then(res => {
                        expect(res.status).to.equal(201)
                    })
            })
    })

    it('Usuwanie posta', () => {
        const daneAutoryzacja = {
            "user": {
                "email": "tester@cytest.pl",
                "password": "asdzxc@"
            }
        }



        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja)
            .its("body").then(res => {
                const authToken = res.user.token;
                console.log(authToken)



                cy.request({
                    method: "DELETE",
                    url: "https://api.realworld.io/api/articles/test-tytul-bezposrednio-z-api-218569",
                    headers: {
                        'Authorization': "Token " + authToken
                    }
                })
                    .then(res => {
                        expect(res.status).to.equal(204)
                    })
            })
    })
})