/// <reference types="cypress" />

describe("TC-001 Verify required fields for regular user and legal entity", () => {
  before(() => {
    cy.visit("https://www.links.hr/hr/register");
  });

  it("should Ime field be mandatory ", () => {
    cy.get("input#FirstName")
      .siblings()
      .invoke("attr", "class")
      .should("eq", "mandatory");

    cy.get("input#FirstName")
      .invoke("attr", "data-val-required")
      .should("eq", "Ime je potrebno");
  });

  it("should Prezime field be mandatory", () => {
    cy.get("input#LastName")
      .siblings()
      .invoke("attr", "class")
      .should("eq", "mandatory");

    cy.get("input#LastName")
      .invoke("attr", "data-val-required")
      .should("eq", "Prezime je potrebno.");
  });

  it("should Elektronska posta field be mandatory", () => {
    cy.get("input#Email")
      .siblings()
      .invoke("attr", "class")
      .should("eq", "mandatory");

    cy.get("input#Email")
      .invoke("attr", "data-val-required")
      .should("eq", "Elektronska pošta je potrebna");
  });

  it("should Lozinka field be mandatory", () => {
    cy.get("input#Password")
      .siblings()
      .invoke("attr", "class")
      .should("eq", "mandatory");

    cy.get("input#Password")
      .invoke("attr", "data-val-required")
      .should("eq", "Lozinka je potrebna.");
  });
});
