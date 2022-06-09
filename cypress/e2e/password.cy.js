/// <reference types="cypress" />

describe("Lozinka field", () => {

    beforeEach(() => {

        cy.visit("https://www.links.hr/hr/register");

        let uuid = () => Cypress._.random(0, 1e6)
        let id = uuid()
        let email = `${id}@gmail.com`;
        let firstName = "Maja";
        let lastName = "Mrdja";

    });

    it("should verify invalid password message and stay on the register page", () => {

        let invalidPassword = "12345";

        cy.get("#FirstName").type(firstName);
        cy.get("#LastName").type(lastName);

        cy.get("#Email").type(email);

        cy.get("#Password").type(invalidPassword);
        cy.get("#ConfirmPassword").type(invalidPassword);

        cy.get('#register-button').click();
        
        cy.get('input#Password + span > span').contains("Lozinka treba imati najmanje 6 znakova.")

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.links.hr/hr/register'
            )

        });
    });

    it("should verify successful registration of the user", () => {

        let validPassword = "123456";

        cy.get("#FirstName").type(firstName);
        cy.get("#LastName").type(lastName);

        cy.get("#Email").type(email);

        cy.get("#Password").type(validPassword);
        cy.get("#ConfirmPassword").type(validPassword);

        cy.get('#register-button').click();

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.links.hr/hr/registerresult/2'
            )

        });
    });


});