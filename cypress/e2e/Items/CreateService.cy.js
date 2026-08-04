describe("Items", () => {

  // Creating Random data
  const randomName = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString();
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Internal Service", () => {
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

    cy.get('[name="serviceCode"]').type(randomNumber);
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
  });

  // ================================================================================================================= //

  it.only("Create External Service", () => {
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

    cy.get('[name="serviceCode"]').type(randomNumber);
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
  });
});
