describe("Vehicles", () => {
  // Creating Random data
  const randomName = Array.from({ length: 6 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");
  const randomArabicName = Array.from({ length: 6 }, () =>
    String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),
  ).join("");

  it("Create Vehicle Type", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Vehicle Types")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="title"]').type(randomName);
    cy.get('[name="secondaryTitle"]').type(randomArabicName);
    cy.get('[name="multiplier"]').type(1);
    cy.get("#importfile > input").selectFile("cypress/fixtures/PNG Logo.png");

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // Delete method
    cy.get("#styled-input").type(randomName);
    cy.get(".MuiGrid-root > .text-white").click();
    cy.get(
      ":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",
    ).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({
      force: true,
    });

    // Verify confirmation message is displaying properly
    cy.contains("Vehicle Type deleted successfully");
  });
});
