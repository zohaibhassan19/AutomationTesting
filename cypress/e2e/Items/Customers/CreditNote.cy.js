describe("Customers", () => {
  // Creating Random data
  const randomreferenceNo = `Ref-${Math.random().toString(36).substring(2, 3)}`;

  it("Create Credit Note", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Customers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Credit Notes")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.get('[name="referenceNumber"]').type(randomreferenceNo);
    cy.get('[name="reason"]').type("Test");
    cy.contains("Client")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(4).click({ force: true });

    cy.contains("Invoices")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });
    cy.wait(2000);

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
