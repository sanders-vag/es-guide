describe("ES Guide test", () => {
  it("should display the guide and navigate", () => {
    cy.visit("/");
    cy.contains("Table of contents");
    cy.contains("ES2015/ES6").click();

    cy.url().should("include", "#es2015");

    cy.contains("Asyncrhonous iteration").click();

    cy.url().should("include", "#async-loop");
  });
});
