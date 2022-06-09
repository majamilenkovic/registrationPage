/// <reference types="cypress" />

//REFAKTORISI KAO PHONE

describe("TC-002 Elektronska posta field invalid email address", () => {

  //Maybe it is better idea to test email validation with regex. Does the app have implemented regex for email validation?

  beforeEach(() => {

    cy.visit("https://www.links.hr/hr/register");

    let firstName = "Maja";
    let lastName = "Mrdja";
    let validPassword = "123456";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);
    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "plain address";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "@domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });
  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email.domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain@domain.com";


    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = ".email@domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email.@domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email..email@domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@-domain.com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain.web";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

  it("should verify invalid email message and stay on the register page", () => {

    let invalidEmail = "email@domain..com";

    cy.clearInput('#Email', invalidEmail);

    cy.get("#register-button").click();

    cy.get("input#Email + span > span").contains("Pogrešan e-mail");

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/register");
    });

  });

});

describe('TC-003 Email field valid email address', () => {

  //email addreses aready exists in the database, so tests will fail, but I am assuming that after each run of the tests suite DB will be cleared from the testing data

  beforeEach(() => {

    cy.visit("https://www.links.hr/hr/register");

    let firstName = "Maja";
    let lastName = "Mrdja";
    let validPassword = "123456";

    cy.clearInput('#FirstName', firstName);
    cy.clearInput('#LastName', lastName);
    cy.clearInput('#Password', validPassword);
    cy.clearInput('#ConfirmPassword', validPassword);

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname.lastname@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@subdomain.domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname+lastname@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });
  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "“email”@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "1234567890@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain-one.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "_______@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain.name";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "email@domain.co.jp";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });

  it("should verify valid email address and successful user registration ", () => {

    let validEmail = "firstname-lastname@domain.com";

    cy.clearInput('#Email', validEmail);

    cy.get("#register-button").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://www.links.hr/hr/registerresult/2");
    });

  });


});