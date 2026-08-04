describe("General", () => {
 
  // Creating Random data
  const states = [ "California","Texas","Florida","New York","Illinois","Pennsylvania",
                   "Ohio","Georgia","North Carolina","Michigan" ];
  const randomState = states[Math.floor(Math.random() * states.length)];
  const randomunitCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  it("Create States", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "States")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({ force: true});

    // Fill form
    cy.get('[name="name"]').type(randomState);
    cy.get('[name="code"]').type(randomunitCode);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
