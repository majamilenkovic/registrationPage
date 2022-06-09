/// <reference types="cypress" />

//REFAKTORISI KAO PHONE

describe("TC-002/003 Email field", () => {

    //Maybe it is better idea to test email validation with regex. Does the app have implemented regex for email validation?

    let firstName = "Maja";
    let lastName = "Mrdja";
    let validPassword = "123456";
    
    beforeEach(() => {

        cy.visit("https://www.links.hr/hr/register");

    });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "plain address";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
  });
  
  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email.domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = ".email@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email.@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email..email@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@-domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain.web";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain..com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', invalidEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
    
  });

  // Valid  email address

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname.lastname@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@subdomain.domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname+lastname@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "“email”@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "1234567890@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain-one.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "_______@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain.name";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain.co.jp";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname-lastname@domain.com";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);

    cy.clearInput('#Email', validEmail);

    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });
    
  });

});
