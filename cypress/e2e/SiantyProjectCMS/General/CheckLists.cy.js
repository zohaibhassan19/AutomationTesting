describe("General", () => {

  // Creating Random data
  const randomChecklist = `Checklist-${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const UpdateChecklist = `Checklist-${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;


  it("Create Checklist", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Checklists")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.get('[name="title"]').type(randomChecklist);
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // ============================= Edit checklist =========================//

     cy.get("#styled-input").type(randomChecklist);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button").click({ force: true });
    cy.contains("Edit").click({ force: true });

    // Fill form
    cy.get('[name="title"]') .clear() .type(UpdateChecklist);
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root") .click({ force: true });;
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click({ force: true });


   // Status change & Delete method
    cy.get("#styled-input").type(UpdateChecklist);
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
