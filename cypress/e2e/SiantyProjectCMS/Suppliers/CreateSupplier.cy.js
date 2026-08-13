describe("Suppliers", () => {
  // Creating Random data
  const randomName = `Supplier${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomEmail = `test_${Math.random().toString(36).substring(2, 8)}@gmail.com`;
  const randomTaxNumber = `Tax_${Math.random().toString(36).substring(2, 4)}`;
  const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const randomCode = Array.from({ length: 5 },() => chars[Math.floor(Math.random() * chars.length)],).join("");
  const length = Math.floor(Math.random() * 13) + 5; // 5 to 17
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const phoneNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const UpdatedName = `Supplier${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const UpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const UpdatedEmail = `test_${Math.random().toString(36).substring(2, 8)}@gmail.com`;
  const UpdatedTaxNumber = `Tax_${Math.random().toString(36).substring(2, 4)}`;
  const UpdatedCode = Array.from({ length: 5 },() => chars[Math.floor(Math.random() * chars.length)],).join("");
  const UpdatedphoneNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  it("Create Supplier", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Suppliers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Suppliers List")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="vendorCode"]').type(randomCode);
    cy.get('[name="phoneNumber"]').type(phoneNumber);
    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="address"]').type("Add a address");
    cy.get('[name="taxNumber"]').type(randomTaxNumber);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

   // ======================= Edit Supplier ==================== //

     cy.get("#styled-input").type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form

    cy.get('[name="title"]') .clear() .type(UpdatedName);
    cy.get('[name="secondaryTitle"]') .clear() .type(UpdatedArabicName);
    cy.get('[name="vendorCode"]') .clear() .type(UpdatedCode);
    cy.get('[name="phoneNumber"]') .clear() .type(UpdatedphoneNumber);
    cy.get('[name="email"]') .clear() .type(UpdatedEmail);
    cy.get('[name="address"]') .clear() .type("Updated address");
    cy.get('[name="taxNumber"]') .clear() .type(UpdatedTaxNumber);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root') .click({ force: true });

   // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input",{timeout:1500}).type(UpdatedName);
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
