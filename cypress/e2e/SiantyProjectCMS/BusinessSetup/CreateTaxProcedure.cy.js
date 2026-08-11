describe("Business", () => {
  
  const randomPrcedureName = `Procedure${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;

  it("Create Tax Procedure", () => {
    // Call login Function
    cy.loginCMS();

    // Visit Create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Tax Procedures")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    // fill form
    cy.get('[name="title"]').type(randomPrcedureName);
    // Open dropdown
    cy.contains("Type *")
      .closest(".commonSelect").find("input").first().click();

    // Select 3rd option
    cy.get('[class*="-option"]').eq(0).click();
    cy.get('[name="percentageValue"]').type(20);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click();

// =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input").type(randomPrcedureName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
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
