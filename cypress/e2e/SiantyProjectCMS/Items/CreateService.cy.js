describe("Items", () => {

    // Creating Random data
  const randomCode = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomName = `Service${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  const UpdatedCode = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const UpdatedName = `Update${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const UpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it.only("Create Internal Service", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Services")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form

    //  Category dropdown

    cy.contains("Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    cy.get('[name="serviceCode"]').type(randomCode);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="price"]').type(200);
    cy.get('[name="itemLimit"]').type(10);
    cy.get('[name="serviceTime"]').type(50);

    //  Service Group
    cy.contains("Service Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    //  Part Type
    cy.contains("Part Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Pricing Scope
    cy.contains("Pricing Scope *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    //  Pricing Type
    cy.contains("Pricing Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Service created successfully");

    // ======================== Edit Service ================================= //

    cy.get("#styled-input").type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill form

    cy.get('[name="serviceCode"]') .clear() .type(UpdatedCode);
    cy.get('[name="title"]') .clear() .type(UpdatedName);
    cy.get('[name="secondaryTitle"]') .clear() .type(UpdatedArabicName);
    cy.get('[name="price"]') .clear() .type(300);
    cy.get('[name="itemLimit"]') .clear() .type(15);
    cy.get('[name="serviceTime"]') .clear() .type(40);

    //  Service Group
    cy.contains("Service Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Part Type
    cy.contains("Part Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Pricing Scope
    cy.contains("Pricing Scope *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Pricing Type
    cy.contains("Pricing Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root').click({ force: true });
    cy.reload();

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

  // ============================ External Service =================================== //

  it("Create External Service", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Services")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    //  Category dropdown

    cy.contains("Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(1).click();

    cy.get('[name="serviceCode"]').type(randomCode);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="price"]').type(200);
    cy.get('[name="itemLimit"]').type(10);
    cy.get('[name="serviceTime"]').type(50);

    //  Service Group
    cy.contains("Service Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    //  Part Type
    cy.contains("Part Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Pricing Scope
    cy.contains("Pricing Scope *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    //  Pricing Type
    cy.contains("Pricing Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Service created successfully");

    // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input").type(randomName);
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
