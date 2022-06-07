/// <reference types="cypress" />

describe("Telefon field boundary testing (For 10 digit phone number - I do not see any other constraints)", () => {

    beforeEach(() => {

        cy.visit("https://www.links.hr/hr/register");

        let uuid = () => Cypress._.random(0, 1e6)
        let id = uuid()
        let email = `${id}@gmail.com`;
        let firstName = "Maja";
        let lastName = "Mrdja";
        let pass = "maja123"

        cy.get("#FirstName").type(firstName);
        cy.get("#LastName").type(lastName);
        cy.get("#Email").type(email);
        cy.get("#Password").type(pass);
        cy.get("#ConfirmPassword").type(pass);

    });

    it("should verify minimum value case", () => {

        cy.get("#Phone").type('00000 00000');
        cy.get('#register-button').click();
        //Proveri sa Dusanom
        /*Note for page transition Cypress automatically detects things like a page transition event and will automatically halt running commands until the next page has finished loading */
    });

    it("should verify just below the minimum value case ", () => {

        cy.get("#Phone").type('09999 99999');
        cy.get('#register-button').click();
    });

    it("should verify just above the  minimum value case ", () => {

        cy.get("#Phone").type('10000 00000');
        cy.get('#register-button').click();
    });

    it("should verify maximum value case ", () => {

        cy.get("#Phone").type('99999 99999');
        cy.get('#register-button').click();
    });

    it("should verify just above the  maximum value case ", () => {

        cy.get("#Phone").type('1 00000 00000');
        cy.get('#register-button').click();
    });

});