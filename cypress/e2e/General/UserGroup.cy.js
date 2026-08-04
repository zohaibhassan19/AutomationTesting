describe("General", () => {

  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "Sgf".repeat(3);
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create User Group", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "User's Group")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    
  });
});
