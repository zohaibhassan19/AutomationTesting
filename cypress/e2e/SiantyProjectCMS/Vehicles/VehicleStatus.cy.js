describe("Vehicles", () => {

  // Creating Random data
  const randomName = `Status${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomName1 = `Status${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;


  it("Create Vehicle Status", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Vehicle Statuses")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="name"]').type(randomName);
    cy.get('.MuiInputBase-root > [name="description"]').type("Automation");
    cy.get(".PrivateSwitchBase-input").check();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // =================== Edit Status ============================== //
    
    cy.get("#styled-input").type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form

    cy.get('[name="name"]').type(randomName1);
    cy.get('.MuiInputBase-root > [name="description"]').type("Automation updated");
    cy.get(".PrivateSwitchBase-input").check();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
        cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click({ force: true });


    // =============== Status change not available in listing :  Delete method ========================= //
    
    cy.get("#styled-input").type(randomName1);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});

  });
});
