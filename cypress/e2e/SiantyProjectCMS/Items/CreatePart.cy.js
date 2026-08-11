describe("Items", () => {
  // Creating Random data

  const randomName = `Part${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Inventory Parts", () => {
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

    cy.get('[name="itemCode"]').type(randomNumber);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="partNo"]').type(randomNumber);
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

  it.only("Create Spot Purchase Parts", () => {
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
