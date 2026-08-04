describe("Stations", () => {

  it("Create Stock Adjustment", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Inventory").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Stock Adjustments").trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});

    // Fill form
    cy.contains("From Store *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    // Stock Adjustment items
    cy.get('.bg-white > .MuiGrid-root > .gap-2 > .MuiButtonBase-root') .click({ force: true });
    cy.get('[name="StockAdjustmentItem.0.itemName"]')
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="StockAdjustmentItem.0.quantityAdjusted"]') .type(5)
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root') .type('Test')

    cy.get('[name="StockAdjustmentItem.0.adjustmentType"]')
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(1).click({ force: true });

    // Submit form
    cy.get('.primary').click();
    cy.contains(' Stock Adjustment saved successfully ')
})
})