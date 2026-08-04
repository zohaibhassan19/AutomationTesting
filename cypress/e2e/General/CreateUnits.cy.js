describe("General", () => {

  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomEmail = `${Array.from({ length: 8 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join("")}@example.com`;
  const randomName = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const unitCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  it("Create Units", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Units")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="unitTitle"]').type(randomTitle);
    cy.get('[name="secondaryUnitTitle"]').type(randomArabicTitle);
    cy.get('[name="unitCode"]').type(unitCode);
    
    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
