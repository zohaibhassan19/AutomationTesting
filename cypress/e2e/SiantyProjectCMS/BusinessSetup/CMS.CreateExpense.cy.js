describe("Business", () => {

  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomReferenceNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();

  it("Create Expense", () => {
    cy.loginCMS();
    // Opening Forn
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Expenses")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="referenceNumber"]').type(randomReferenceNumber);
    cy.get('[name="amount"]').type("100");
    // Type dropdown
    cy.contains("Type *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-0"]').first().click();

    // Suppliers dropdown - 3rd option
    cy.contains("Suppliers *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-2"]').first().click();

    // Payment Mode dropdown
    cy.contains("Payment Mode *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-0"]').first().click();

    // Station dropdown
    cy.contains("Station *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-0"]').first().click();

    // Account dropdown
    cy.contains("Account *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-0"]').first().click();

    cy.get("#importfile > input").selectFile([
      "cypress/fixtures/download (1).jpg",
      "cypress/fixtures/P-INV-2026-73-77.pdf",
    ]);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click(); // form submit button
  });
});
