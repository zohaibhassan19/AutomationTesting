describe("Business", () => {

  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicTitle = Array.from({ length: 6 }, () =>
  String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join("");

  it("Create Expense-type", () => {
    // Call login Function
    cy.loginCMS();

    // Visit Create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Expense Types")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    // Fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });

    // Verify API call
    //cy.verifyApi('POST','/api/expensetype',200,null)
  });
});
