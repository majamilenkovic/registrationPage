/// <reference types="cypress" />


// BUG: na prvom mestu grad pa postanski broj zbog autocomplete

describe("Legal entity registration", () => {
    //ne clearuje polja nakon refresh

    let uuid = () => Cypress._.random(0, 1e6)
    let id = uuid()

    let email = `${id}@gmail.com`;
    let firstName = "Maja";
    let lastName = "Mrdja";
    let pass = "maja123"
    let phoneNumber = "(0800) 123-567"

    before(() => {

        cy.visit("https://www.links.hr/hr/register");

    });

    it("should verify successful legal entity registration with all fields filled", () => {

        cy.get("input#RegisterAsCompany").check();

        cy.get("#RegisterAsCompany").type('Eurometalic');
        cy.get("#CompanyOIB").type('677967667');
        cy.get("#CompanyEmail").type(email);
        cy.get("#CompanyTelephone").type(phoneNumber);
        cy.get("#CompanyContactPerson").type(firstName);
        cy.get("#CompanyAddress").type('Cvecarska 13');
        cy.get("#CompanyTelephone").select('ui-id-2');
        cy.get("#CompanyTelephone").type(phoneNumber);

        cy.get("#FirstName").type(firstName);
        cy.get("#LastName").type(lastName);

        cy.get("select[name='DateOfBirthDay']").select('17'); //Nema id na datumu
        cy.get("select[name='DateOfBirthMonth']").select('9');//Nema id na datumu
        cy.get("select[name='DateOfBirthYear']").select('1988');//Nema id na datumu

        cy.get("#Email").type(email);
        
        cy.get("#StreetAddress").type("Cvecarska 13");
        cy.get("#65eb7bc9-1e79-4187-85c7-d2f8cbd9289a").select('ui-id-82'); // da li je unique id, mora prvo grad zbog autocomplete

        cy.get('Phone').type(phoneNumber);

        cy.get('#Newsletter').check(); // BUG: pise da je required field

        cy.get("#Password").type(pass);
        cy.get("#ConfirmPassword").type(pass);

        cy.get("register-button").click();      

    });

    
    it("should verify successful legal entity registration with some optional fields left empty", () => {

        cy.get("input#RegisterAsCompany").check();

        cy.get("input#gender-female").check();
        cy.get("#FirstName").type(firstName);
        cy.get("#LastName").type(lastName);

        cy.get("select[name='DateOfBirthDay']").select('17'); //Nema id na datumu
        cy.get("select[name='DateOfBirthMonth']").select('9');//Nema id na datumu

        cy.get("#Email").type(email);

        cy.get('Phone').type(phoneNumber);

        cy.get("#Password").type(pass);
        cy.get("#ConfirmPassword").type(pass);

        cy.get("register-button").click();

    });

});



