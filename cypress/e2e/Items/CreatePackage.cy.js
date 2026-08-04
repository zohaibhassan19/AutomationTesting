describe("Items", () => {

  // Creating Random data
  const randomName = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Package", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Items").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Packages")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.get('[name="packageCode"]').type(randomNumber);
    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="price"]').type(200);
    cy.get('[name="itemLimit"]').type(10);

    //  Part Type
    cy.contains("Part Type *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    //  Package Group
    cy.contains("Package Group")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    //  Price Type
    cy.contains("Pricing Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.contains("Package created successfully");
  });
});
