describe("template spec", async () => {
  it("passes", () => {
    cy.visit("localhost:3000/");
    cy.get("[data-testid='header']").contains("Weather App");
  });
});
