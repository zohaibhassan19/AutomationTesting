describe("General", () => {
  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "Sgf".repeat(3);
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Roles", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Roles")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get(".MuiGrid-grid-md-6 > .MuiFormControl-root > .MuiInputBase-root").type(randomInvalidDescription);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Description must be under 500 characters");

    // Enter valid Description
    cy.get('.MuiInputBase-root > [name="description"]')
      .clear().type(randomValidDescription);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
