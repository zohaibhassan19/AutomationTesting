describe("Suppliers", () => {
  // Creating Random data
  const randomRef = `REF-${Math.random().toString(36).substring(2, 5)}`;

  it("Supplier Payment", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Suppliers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Supplier Payments")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.contains("Suppliers *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Account *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Payment Mode *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Adjustment Type *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="amount"]').type(100);
    cy.get('[name="referenceNumber"]').type(randomRef);

    // Submit form
    cy.get(".primary").click();
  });
});
