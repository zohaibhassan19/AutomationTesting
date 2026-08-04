describe("Business", () => {

  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "S".repeat(500);

  it("Create Cancel-Reason", () => {
    // Call login Function
    cy.loginCMS();

    // Visit Create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Cancellation Reasons")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    // fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);
    cy.get(".MuiGrid-grid-md-6 > .MuiFormControl-root > .MuiInputBase-root",).type(randomInvalidDescription);

    // Submit From
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });
    // Verify error display
    cy.contains("Description must be under 500 characters");

    // Clear field and enter valid description
    cy.get('.MuiInputBase-root > [name="description"]')
      .clear().type(randomValidDescription);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });
  });
});
