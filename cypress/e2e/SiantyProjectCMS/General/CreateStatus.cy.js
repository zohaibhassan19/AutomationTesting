describe("General", () => {

  // Creating Random data
  const randomStatusName = `Status${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "Sgf".repeat(3);

  it("Create Status", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Statuses")
      .trigger("mouseover").click({ force: true });

    // ============================= Create status for package ======================= //

    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="name"]').type(randomStatusName);
    cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(randomInvalidDescription,);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Description must be under 500 characters");

    // Enter valid description
    cy.get('.MuiInputBase-root > [name="description"]')
      .clear().type(randomValidDescription);
    cy.get('[name="sortOrder"]').type(2);
    cy.get(".PrivateSwitchBase-input").check();
    cy.get(".PrivateSwitchBase-input").check();
    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

     // ============  Delete Package status  ==================== //

    cy.get("#styled-input").type(randomStatusName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
    

    // ============ Create Status for service ===================== //

  
    cy.get('.MuiTabs-flexContainer > :nth-child(2)') .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form

    cy.get('[name="name"]').type(randomStatusName);
    cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(randomValidDescription);
    cy.get('[name="sortOrder"]').type(2);
    cy.get(".PrivateSwitchBase-input").check();
    cy.get(".PrivateSwitchBase-input").check();
    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

     // ============  Delete Service status  ==================== //

    cy.get("#styled-input").type(randomStatusName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});

     // ============ Create Status for Parts ===================== //

  
    cy.get('.MuiTabs-flexContainer > :nth-child(3)') .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form

    cy.get('[name="name"]').type(randomStatusName);
    cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(randomValidDescription);
    cy.get('[name="sortOrder"]').type(2);
    cy.get(".PrivateSwitchBase-input").check();
    cy.get(".PrivateSwitchBase-input").check();
    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

     // ============  Delete Part status  ==================== //

    cy.get("#styled-input").type(randomStatusName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});

  });
});
