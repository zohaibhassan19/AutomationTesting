describe("General", () => {

  // Creating Random data
  const randomName = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");

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
    cy.get('[name="title"]').type(randomName);
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // Inactive Checklist
    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(2)").click();
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click();

    // Delete CheckList
    cy.get(":nth-child(3) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });

    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({ force: true});
    
  });
});
