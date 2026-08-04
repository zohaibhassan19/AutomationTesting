describe("General", () => {

  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "Sgf".repeat(3);

  it("Create Status", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Statuses")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="name"]').type(randomTitle);
    cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(randomInvalidDescription,);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Description must be under 500 characters");

    // Enter valid description
    cy.get('.MuiInputBase-root > [name="description"]')
      .clear().type(randomValidDescription);
    cy.get('[name="sortOrder"]').type(2);
    cy.get(".PrivateSwitchBase-input").check();
    cy.get(".PrivateSwitchBase-input").check();
    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
