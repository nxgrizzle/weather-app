import _Cypress from "cypress";
describe("displays page", async () => {
  it("has a header", () => {
    cy.visit("localhost:3000/");
    cy.get("[data-testid='header']").contains("Weather App");
  });

  it("has an input", () => {
    cy.visit("localhost:3000/");
    cy.get("[data-testid='search']").should("be.visible");
  });
  it("has a button", () => {
    cy.visit("localhost:3000/");
    cy.get("[data-testid='button']").should("be.visible");
  });
});

describe("can search for a city", () => {
  it("can accept an input", () => {
    cy.visit("localhost:3000/");

    // make sure details are not visible
    cy.get("[data-testid='temp']").should("not.exist");
    cy.get("[data-testid='precip']").should("not.exist");
    cy.get("[data-testid='humidity']").should("not.exist");
    cy.get("[data-testid='windspeed']").should("not.exist");
    cy.get("#weather-card").should("have.length", 0);
    // type in search
    cy.get("[data-testid='search']").type("93101");
    cy.get('[data-testid="button"]').click();

    // details should now be visible
    cy.get("[data-testid='temp']").should("be.visible");
    cy.get("[data-testid='precip']").should("be.visible");
    cy.get("[data-testid='humidity']").should("be.visible");
    cy.get("[data-testid='windspeed']").should("be.visible");
    cy.get("[data-testid='weather-card']").should("have.length", 7);
  });
});
