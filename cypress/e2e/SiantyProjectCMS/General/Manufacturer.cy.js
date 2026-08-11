describe("General", () => {

  // Creating Random data
  const randomTitle = `Manufacturer${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Manufacturer", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Manufacturers")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input").type(randomTitle);
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
