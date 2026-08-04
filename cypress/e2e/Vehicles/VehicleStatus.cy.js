describe("Vehicles", () => {
  // Creating Random data
  const randomName = Array.from({ length: 6 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");

  it("Create Vehicle Status", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Vehicles").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Vehicle Statuses")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="name"]').type(randomName);
    cy.get('.MuiInputBase-root > [name="description"]').type("data");
    cy.get(".PrivateSwitchBase-input").check();
    cy.wait(200);
    cy.get(".PrivateSwitchBase-input").check();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // Delete method
    cy.get("#styled-input").type(randomName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get(
      ":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",
    ).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({
      force: true,
    });
  });
});
