describe("Vehicles", () => {
  // Creating Random data
  const randomPlateNumber = Array.from({ length: 6 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");
  const ArabicPlateNumber = Array.from({ length: 6 }, () =>
    String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),
  ).join("");

  const randomVIN = Array.from(
    { length: 17 },
    () => "ABCDEFGHJKLMNPRSTUVWXYZ0123456789"[Math.floor(Math.random() * 33)],
  ).join("");

  it("Register Vehicles with customer", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Vehicles List")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form
    cy.get('[name="plateNumber"]').click({ force: true });
    cy.get(".css-eku0kx > .MuiTypography-root").click({ force: true });

    cy.get('[name="code"]')
      .scrollIntoView()
      .should("be.visible")
      .type(randomPlateNumber);
    cy.get(".flex > .MuiButtonBase-root").click();
    cy.get('[name="secondaryPlateNumber"]')
      .scrollIntoView()
      .should("be.visible")
      .type(ArabicPlateNumber);
    cy.get('[name="vin"]')
      .scrollIntoView()
      .should("be.visible")
      .type(randomVIN);
    cy.get('[name="color"]').scrollIntoView().should("be.visible").type("red");
    cy.get('[name="odometer"]').scrollIntoView().should("be.visible").type(10);
    cy.get('[name="avgDailyFuelConsumption"]')
      .scrollIntoView()
      .should("be.visible")
      .type(52);
    cy.get('[name="seatingCapacity"]')
      .scrollIntoView()
      .should("be.visible")
      .type(2);
    cy.get('[name="fleetCode"]')
      .scrollIntoView()
      .should("be.visible")
      .type("code");
    cy.get('[name="tyreInformation"]')
      .scrollIntoView()
      .should("be.visible")
      .type("tyre info");
    cy.get('[name="notes"]')
      .scrollIntoView()
      .should("be.visible")
      .type("once upon a time");

    // Dropdown Fields

    cy.contains("Customer *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("State")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Vehicle Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Make *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Year")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Transmission Type")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Fuel Type")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Registration Status")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Insurance Status")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Insurance Company")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get(
      ":nth-child(21) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click({ force: true });
    cy.get('button[role="gridcell"]').contains("30").click();

    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click({ force: true });
    cy.get('button[role="gridcell"]').contains("30").click({ force: true });

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    cy.get("#styled-input").type(randomPlateNumber);
    cy.get(".MuiGrid-grid-md-2 > .MuiButtonBase-root").click();

    // Delete Vehicle registered vehicle with searchbox field
    cy.get(
      ":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",
    ).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({
      force: true,
    });
  });

  // ==================================================================================================================== //

  it.only("Register Vehicles with company existng Driver", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Vehicles List")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form
    cy.get('[name="plateNumber"]').click({ force: true });
    cy.get(".css-eku0kx > .MuiTypography-root").click({ force: true });

    cy.get('[name="code"]')
      .scrollIntoView()
      .should("be.visible")
      .type(randomPlateNumber);
    cy.get(".flex > .MuiButtonBase-root").click();
    cy.get('[name="secondaryPlateNumber"]')
      .scrollIntoView()
      .should("be.visible")
      .type(ArabicPlateNumber);
    cy.get('[name="vin"]')
      .scrollIntoView()
      .should("be.visible")
      .type(randomVIN);
    cy.get('[name="color"]').scrollIntoView().should("be.visible").type("red");
    cy.get('[name="odometer"]').scrollIntoView().should("be.visible").type(10);
    cy.get('[name="avgDailyFuelConsumption"]')
      .scrollIntoView()
      .should("be.visible")
      .type(52);
    cy.get('[name="seatingCapacity"]')
      .scrollIntoView()
      .should("be.visible")
      .type(2);
    cy.get('[name="fleetCode"]')
      .scrollIntoView()
      .should("be.visible")
      .type("code");
    cy.get('[name="tyreInformation"]')
      .scrollIntoView()
      .should("be.visible")
      .type("tyre info");
    cy.get('[name="notes"]')
      .scrollIntoView()
      .should("be.visible")
      .type("once upon a time");

    // Dropdown Fields

    cy.contains("Customer Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    cy.contains("Company *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Driver *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("State")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Vehicle Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Make *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Model *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Year")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Transmission Type")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Fuel Type")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Registration Status")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Insurance Status")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Insurance Company")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get(
      ":nth-child(21) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click({ force: true });
    cy.get('button[role="gridcell"]').contains("30").click();

    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click({ force: true });
    cy.get('button[role="gridcell"]').contains("30").click({ force: true });

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    cy.get("#styled-input").type(randomPlateNumber);
    cy.get(".MuiGrid-grid-md-2 > .MuiButtonBase-root").click();

    // Delete Vehicle registered vehicle with searchbox field
    cy.get(
      ":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",
    ).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({
      force: true,
    });
  });
});
