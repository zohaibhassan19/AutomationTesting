describe("Business", () => {

  // Creating Random data
  const randomTitle = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomEmail = `${Array.from({ length: 8 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join("")}@example.com`;
  const randomName = Array.from({ length: 6 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomTradeNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();

  it("Create Insurance Company", () => {
    // Call login Function
    cy.loginCMS();

    // Visit Create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Insurance Companies")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".flex > div > .MuiButtonBase-root").click({ force: true });

    // fill form
    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);
    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="tradeLicenseNumber"]').type(randomTradeNumber);
    cy.get('[name="insuranceUserRequest.name"]').type(randomName);

    // Open dropdown
    cy.contains("Price List *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[class*="-option"]').eq(0).click();

    // Open dropdown
    cy.contains("Role *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[class*="-option"]').eq(0).click();

    // Selecting Date Of Incorporation
    // Open the calendar
    cy.contains("Date Of Incorporation *")
      .parent().siblings().find('button[aria-label="Choose date"]').click();

    // Select today's date from the calendar popup
    cy.get(".MuiPickersDay-today").click();

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
