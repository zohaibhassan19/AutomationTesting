describe("Customers", () => {
  // Creating Random data
  const randomreferenceNo = `Ref-${Math.random().toString(36).substring(2, 3)}`;

  it("Create Payment", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Customers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Payments")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.contains("Client")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(4).click({ force: true });

    // 1. Client *
    cy.contains("Client *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // 2. Station *
    cy.contains("Station *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // 3. Account *
    cy.contains("Account *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // 4. Payment Mode *
    cy.contains("Payment Mode *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="amount"]').type(11);
    cy.get('[name="referenceNo"]').type(randomreferenceNo);
    cy.get('[name="remarks"]').type("Test");

    cy.get(
      ":nth-child(8) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",).click();
    cy.get(".MuiPickersDay-today").click({ force: true });

    cy.get(
      ":nth-child(9) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",).click();
    cy.get(".MuiPickersDay-today").click({ multiple: true, force: true });

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
