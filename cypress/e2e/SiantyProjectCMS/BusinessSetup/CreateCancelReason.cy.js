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
      .clear().type("Automation Script by zohaib");
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });

    // Status change & Delete method
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
