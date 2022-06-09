/// <reference types="cypress" />


// BUG: na prvom mestu grad pa postanski broj zbog autocomplete

describe("Regular user registration", () => {

    let uuid = () => Cypress._.random(0, 1e6)
    let id = uuid()

    let email = `${id}@gmail.com`;
    let firstName = "Maja";
    let lastName = "Mrdja";
    let validPassword = "123456"
    let phoneNumber = "(0800) 123-567"
    let address = "Cvecarska 13"

    beforeEach(() => {

        cy.visit("https://www.links.hr/hr/register");

    });

    it("should verify successful regular user registration with all fields filled", () => {

        cy.get("input#gender-male").check();

        cy.clearInput('#FirstName', firstName);
        cy.clearInput('#LastName', lastName);

        cy.get("select[name='DateOfBirthDay']").select('17'); //Nema id na datumu
        cy.get("select[name='DateOfBirthMonth']").select('9');//Nema id na datumu
        cy.get("select[name='DateOfBirthYear']").select('1988');//Nema id na datumu

        cy.clearInput('#Email', email);

        cy.clearInput('#StreetAddress', address);
        //cy.get("#City").type('Borovo').tab(); //mora prvo grad zbog autocomplete, type="hidden"
        //cy.get("#24f574a3-aad2-49a7-8c57-e43968ab1a45").type('Borovo').tab(); //auto generated id
        //cy.get("#CountryId_dropdown").should('have.css', 'disabled') // disabled

        cy.clearInput('#Phone', phoneNumber);

        cy.get('#Newsletter').check(); // BUG: pise da je required field

        cy.clearInput('#Password', validPassword);
        cy.clearInput('#ConfirmPassword', validPassword);

        cy.get("#register-button").click();

    });


    it("should verify successful regular user registration with some optional fields left empty", () => {

        cy.get("input#gender-female").check();

        cy.clearInput('#FirstName', firstName);
        cy.clearInput('#LastName', lastName);

        cy.get("select[name='DateOfBirthDay']").select('17'); //Nema id na datumu
        cy.get("select[name='DateOfBirthMonth']").select('9');//Nema id na datumu
        cy.get("select[name='DateOfBirthYear']").select('1988');//Nema id na datumu

        cy.clearInput('#Email', email);

        cy.clearInput('#StreetAddress', address);
      
        cy.clearInput('#Phone', phoneNumber);

        cy.get("#Password").type(validPassword);
        cy.get("#ConfirmPassword").type(validPassword);

        cy.get("#register-button").click();

    });

});



