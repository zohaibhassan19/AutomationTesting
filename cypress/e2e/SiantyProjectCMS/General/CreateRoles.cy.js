describe("General", () => {
  // Creating Random data
  const randomRoleName = `Role-${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomUpdatedRoleName = `Role-${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomInvalidDescription = "Automations".repeat(50);
  const randomValidDescription = "Sgf".repeat(1);
  const randomUpdatedDescription = "Automation".repeat(1);
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomUpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Roles", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Roles")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="title"]').type(randomRoleName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get(".MuiGrid-grid-md-6 > .MuiFormControl-root > .MuiInputBase-root").type(randomInvalidDescription);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Description must be under 500 characters");

    // Enter valid Description
    cy.get('.MuiInputBase-root > [name="description"]')
      .clear().type(randomValidDescription);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.wait(600)

     // ========================== Update Role =========================== //

     cy.get('#long-button').click({ force: true });
     cy.contains("Edit").click({ force: true });

     // Fill form

    cy.get('[name="title"]') .clear(). type(randomUpdatedRoleName);
    cy.get('[name="secondaryTitle"]') .clear() .type(randomUpdatedArabicName);
    cy.get(".MuiGrid-grid-md-6 > .MuiFormControl-root > .MuiInputBase-root") .clear() .type(randomUpdatedDescription);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Roles")
      .trigger("mouseover").click({ force: true });
    cy.wait(600)

    // ========================== Status change & Delete method =========================== //
     
    cy.get("#styled-input").type(randomUpdatedRoleName);
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
 
