describe("Customers", () => {
  // Creating Random data
  const randomTitle = `Mode-${Math.random().toString(36).substring(2, 4)}`;

  it("Create Payment mode", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Customers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Payment Modes")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('.MuiInputBase-root > [name="description"]').type("Test");
    cy.get('[name="sortOrder"]').type(5);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // ========================= Status change & Delete method ============================== //
    
    cy.get("#styled-input").type(randomTitle);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

     cy.get('.text-green-500.cursor-pointer') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
    
  });
});
