describe("Business", () => {
  
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");

  it("Create Tax Procedure", () => {
    // Call login Function
    cy.loginCMS();

    // Visit Create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Tax Procedures")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    // fill form
    cy.get('[name="title"]').type(randomTitle);
    // Open dropdown
    cy.contains("Type *")
      .closest(".commonSelect").find("input").first().click();

    // Select 3rd option
    cy.get('[class*="-option"]').eq(2).click();
    cy.get('[name="percentageValue"]').type(20);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

  });
});
