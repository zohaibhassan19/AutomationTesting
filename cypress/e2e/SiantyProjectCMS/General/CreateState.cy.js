describe("General", () => {
 
  // Creating Random data
  const randomStateName = `State${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomunitCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  it("Create States", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "States")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({ force: true});

    // Fill form
    cy.get('[name="name"]').type(randomStateName);
    cy.get('[name="code"]').type(randomunitCode);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

     // ================= Delete method ===================== //

    cy.get("#styled-input").type(randomStateName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
  });
});
