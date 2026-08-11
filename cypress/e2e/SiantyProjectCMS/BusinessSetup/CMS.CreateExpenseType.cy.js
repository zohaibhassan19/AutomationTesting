describe("Business", () => {

  const randomExpenseType = `Expense-${Array.from({ length: 2 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
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
    cy.get('[name="title"]').type(randomExpenseType);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });

    //  Delete method
    cy.get("#styled-input").type(randomExpenseType);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
    cy.contains('Expense Type deleted successfully')
    
  });
});
