describe("Stations", () => {
  // Creating Random data
  const randomName = `Station-${Math.random().toString(36).substring(2, 3).toUpperCase()}`;
  const randomNumber = Math.floor( Math.random() * 9000000000 + 1000000000,).toString();
  const randomNumber1 = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const email = `test_${Date.now()}@email.com`;
  const stationCode = `STN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  const UpdatedName = `Station-${Math.random().toString(36).substring(2, 3).toUpperCase()}`;
  const UpdatedNumber = Math.floor( Math.random() * 9000000000 + 1000000000,).toString();
  const UpdatedNumber1 = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const UpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const Updatedemail = `Update_${Date.now()}@email.com`;
  const UpdatedstationCode = `STN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  it("Create Station", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.get('[aria-label="Stations"]').trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Stations List")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="stationCode"]').type(stationCode);
    cy.get('[name="name"]').type(randomName);
    cy.get('[name="secondaryName"]').type(randomArabicName);
    cy.get('[name="numberOfTerminal"]') .type(10);
    cy.get('[name="target"]').type(4000000);
    cy.get('[name="taxNumber"]').type(randomNumber1);
    cy.get('[name="phoneNumber1"]').type(randomNumber);
    cy.get('[name="email"]').type(Updatedemail);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.wait(2000)

    cy.get("#importfile > input").selectFile("cypress/fixtures/PNG Logo.png");
    cy.get("#form > .MuiButtonBase-root").click();

    // ======================== Edit Station ================================= //

    cy.get("#styled-input").type(randomName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form

    cy.get('[name="stationCode"]') .clear() .type(UpdatedstationCode);
    cy.get('[name="name"]') .clear() .type(UpdatedName);
    cy.get('[name="secondaryName"]') .clear() .type(UpdatedArabicName);
    cy.get('[name="numberOfTerminal"]') .clear() .type(15);
    cy.get('[name="target"]') .clear() .type(4000000);
    cy.get('[name="taxNumber"]') .clear() .type(UpdatedNumber1);
    cy.get('[name="phoneNumber1"]') .clear() .type(UpdatedNumber);
    cy.get('[name="email"]') .clear() .type(email);

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.wait(2000)

    cy.get("#importfile > input").selectFile("cypress/fixtures/PNG Logo.png");
    cy.get("#form > .MuiButtonBase-root") .click({ multiple: true,force: true });
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click({ multiple: true,force: true });

     // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input").type(UpdatedName);
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
