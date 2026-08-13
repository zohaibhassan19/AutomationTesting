describe("Vehicles", () => {

// Creating Random data
  const randomName = `Make${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomUpdatedName = `Make${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomUpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Model Engine", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Model Engines")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    // Make dropdown
    cy.contains("Make *")
      .closest(".commonSelect")
      .find("input").first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Model dropdown
    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input").first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

     // ======================== Edit Model Engine ================================= //

    cy.get("#styled-input",{ timeout: 10000 }).type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form

    // Make dropdown
    cy.contains("Make *")
      .closest(".commonSelect")
      .find("input").first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    // Model dropdown
    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input").first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click({ force: true });
    cy.get('[name="title"]').type(randomUpdatedName);
    cy.get('[name="secondaryTitle"]').type(randomUpdatedArabicName);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input",{ timeout: 10000 }).type(randomUpdatedName);
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

    // Verify confirmation message is displaying properly
    cy.contains("Model Engine deleted successfully");
    
  });
});
