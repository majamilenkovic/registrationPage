/* email@domain.com	Valid email
firstname.lastname@domain.com	The email contains a dot in the address field
email@subdomain.domain.com	The email contains a dot with a subdomain
firstname+lastname@domain.com	Plus sign is considered a valid character // NE PROLAZI
“email”@domain.com	Quotes around email are considered valid ?? NE PROLAZI
1234567890@domain.com	Digits in the address are valid
email@domain-one.com	Dash in the domain name is valid
_______@domain.com	Underscore in the address field is valid
email@domain.name	.name is a valid Top Level Domain name
email@domain.co.jp	Dot in Top Level Domain name also considered valid (use co.jp as an example here)
firstname-lastname@domain.com	Dash in the address field is valid

Invalid Test Cases Of Email ID
Invalid Email address	Reason
plain address	Missing @ sign and domain
@domain.com	Missing username
email.domain.com	Missing @
email@domain@domain.com	Two @ sign
.email@domain.com	Leading dot in address is not allowed
email.@domain.com	Trailing dot in address is not allowed
email..email@domain.com	Multiple dots
email@domain	Missing top-level domain (.com/.net/.org/etc)
email@-domain.com	The leading dash in front of the domain is invalid
email@domain.web	.web is not a valid top-level domain ????????????
email@111.222.333.44444	Invalid IP format
email@domain..com	Multiple dots in the domain portion is invali */

/// <reference types="cypress" />

describe("Email field", () => {

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
