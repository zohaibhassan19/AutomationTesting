describe("Items", () => {

  // Creating Random data
  const randomCode = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomName = `Part${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  const UpdatedCode = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const UpdatedName = `Part${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const UpdatedArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it.only("Create Inventory Parts", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Parts")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form for inventory items

    //  Category dropdown

    cy.contains("Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(1).click();

    //  Part category dropdown 
    cy.contains("Part Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(2).click();

    cy.get('[name="itemCode"]').type(randomCode);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="partNo"]').type(randomCode);
    cy.get('[name="price"]').type(200);
    cy.get('[name="profitMargin"]').type(5);

    //  Manufacturer dropdown
    cy.contains("Manufacturer")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Base Unit dropdown
    cy.contains("Base Unit *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Part Group dropdown
    cy.contains("Part Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Store dropdown
    cy.contains("Store").closest(".commonSelect").find("input").first().click();
    cy.get('[class*="-option"]').eq(1).click();

    //  Suppliers dropdown
    // cy.get('#supplier-select').click() // Use actual ID or class
    // cy.get('[role="option"]').eq(0).click()

    //  Shipping Method dropdown
    cy.contains("Shipping Method")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    cy.get('[name="storeItems[0].itemCost"]').type(10);
    cy.get('[name="storeItems[0].stockQuantity"]').type(100);

    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

      // ======================== Edit Part ================================= //

    cy.get("#styled-input",{timeout:1500}).type(randomName);
     cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search   
     cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)') .click({ multiple: true,force: true });

     // Fill Form
     //  Part category dropdown 
    cy.contains("Part Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(2).click();

    cy.get('[name="itemCode"]') .clear() .type(UpdatedCode);
    cy.get('[name="title"]') .clear() .type(UpdatedName);
    cy.get('[name="secondaryTitle"]') .clear() .type(UpdatedArabicName);
    cy.get('[name="partNo"]') .clear() .type(UpdatedCode);
    cy.get('[name="price"]') .clear() .type(500);
    cy.get('[name="profitMargin"]') .clear() .type(5);

    //  Manufacturer dropdown
    cy.contains("Manufacturer")
      .closest(".commonSelect")
      .find("input") .first()
      .click();
    cy.get('[class*="-option"]') .eq(1).click();

    //  Part Group dropdown
    cy.contains("Part Group")
      .closest(".commonSelect")
      .find("input") .first()
      .click();
    cy.get('[class*="-option"]') 
      .eq(1).click();

    //  Suppliers dropdown
    // cy.get('#supplier-select').click() // Use actual ID or class
    // cy.get('[role="option"]').eq(0).click()

    //  Shipping Method dropdown
    cy.contains("Shipping Method")
      .closest(".commonSelect")
      .find("input") .first()
      .click();
    cy.get('[class*="-option"]')
      .eq(1).click();


    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    
    cy.get('.flex > :nth-child(1) > .MuiButtonBase-root').click({ force: true });
    cy.reload();
    
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

  // ============================================= Fixed Asset ==============================================================  //

  it("Create part for fixed asset", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Parts")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form for inventory items

    //  Category dropdown

    cy.contains("Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Part category dropdown 
    cy.contains("Part Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(2).click();

    cy.get('[name="itemCode"]').type(randomNumber);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="partNo"]').type(randomNumber);

    //  Manufacturer dropdown
    cy.contains("Manufacturer")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Part Group dropdown
    cy.contains("Part Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Base Unit dropdown
    cy.contains("Base Unit *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    cy.get('[name="price"]').type(200);
    cy.get('[name="depreciation"]').type(5);

    // Submit Frrm
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

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

  // =========================================== Spot Purchase ============================================================= //

  it("Create Spot Purchase Parts", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Parts")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form for inventory items

    //  Category dropdown

    cy.contains("Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(2).click();

    //  Part category dropdown 
    cy.contains("Part Category *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(2).click();

    cy.get('[name="itemCode"]').type(randomNumber);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="partNo"]').type(randomNumber);
    cy.get('[name="price"]').type(200);
    cy.get('[name="profitMargin"]').type(5);
    cy.get('[name="itemCost"]').type(10);

    //  Manufacturer dropdown
    cy.contains("Manufacturer")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    //  Base Unit dropdown
    cy.contains("Base Unit *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click();
    cy.get('[class*="-option"]').eq(0).click();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

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


