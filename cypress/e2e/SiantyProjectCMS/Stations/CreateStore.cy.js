describe("Stations", () => {
  // Creating Random data
  const randomName = `Store-${Math.random().toString(36).substring(2, 3).toUpperCase()}`;
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join('');
  const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString();

  const UpdatedName = `Store-${Math.random().toString(36).substring(2, 3).toUpperCase()}`;
  const UpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join('');
  const UpdatedNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString();

  it("Create Store", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.get('[aria-label="Stations"]').trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Stores")
      .trigger("mouseover")
      .click({ force: true });
     cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({   force: true});

    // Fill form
    cy.get('[name="title"]') .type(randomName)
    cy.get('[name="secondaryTitle"]') .type(randomArabicName)
    cy.get('[name="storeNumber"]') .type(randomNumber)
    // Station dropdown
    cy.contains("Station *")
      .closest(".commonSelect")
      .find("input") .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // =========================== Edit Store =========================== //

    cy.get("#styled-input").type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form
    cy.get('[name="title"]') .clear() .type(UpdatedName)
    cy.get('[name="secondaryTitle"]').clear() .type(UpdatedArabicName)
    cy.get('[name="storeNumber"]') .clear() .type(UpdatedNumber)
    // Station Dropdown
    cy.contains("Station *")
      .closest(".commonSelect")
      .find("input") .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input",{timeout:1500}).type(UpdatedName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

      cy.wait(2000)
     cy.get('.cursor-pointer.font-medium',{timeout:1500}) .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
    
  });
});


