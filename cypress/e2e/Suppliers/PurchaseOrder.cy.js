describe("Suppliers", () => {
  // Creating Random data
  const length = Math.floor(Math.random() * 13) + 5; // 5 to 17
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const phoneNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomRef = `REF-${Math.random().toString(36).substring(2, 5)}`;
  const randomRef1 = `RE-${Math.random().toString(36).substring(2, 5)}`;

  it("Create Purchase Order", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Suppliers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Purchase Orders")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="phone"]').type(phoneNumber);
    cy.get('[name="address"]').type("ola");
    cy.get('[name="terms"]').type("no terms");
    cy.get('[name="comments"]').type("no terms");
    cy.get('[name="poMemo"]').type("no terms");
    cy.get(".PrivateSwitchBase-input").check();
    // Dropdown Fields

    cy.contains("Suppliers *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Priority *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Stores *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Tax Procedures *")
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Parts Fields
    cy.get(
      ".bg-white.relative > .MuiGrid-root > .gap-2 > .MuiButtonBase-root",
    ).click();

    cy.get('[name="purchaseOrderItems.0.itemName"]')
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="purchaseOrderItems.0.quantity"]').type(5);
    cy.get('[name="purchaseOrderItems.0.unitPrice"]').type(100);
    cy.get('[name="purchaseOrderItems.0.discount"]').type(5);

    // Additional Service Fields
    cy.get(
      ":nth-child(4) > .MuiGrid-grid-sm-6 > .gap-2 > .MuiButtonBase-root",
    ).click();

    cy.get('[name="purchaseOrderSvc.0.serviceName"]')
      .closest(".commonSelect")
      .find("input")
      .first()
      .click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get('[name="purchaseOrderSvc.0.quantity"]').type(5);
    cy.get('[name="purchaseOrderSvc.0.unitPrice"]').type(10);
    cy.get('[name="purchaseOrderSvc.0.discount"]').type(5);

    // Date fields
    cy.get(
      ":nth-child(2) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click();
    cy.get(".MuiPickersDay-today").click({ multiple: true, force: true });

    cy.get(
      ":nth-child(4) > :nth-child(1) > :nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root",
    ).click();
    cy.get(".MuiPickersDay-today").click({ multiple: true, force: true });

    // Submit Form
    cy.get(
      ".MuiGrid-container.items-center > :nth-child(2) > .flex > .primary",
    ).click();

    // Authorize PO
    cy.get(".hide-on-print > .flex > .primary").click();
    cy.sign("canvas");
    cy.contains("OK").click({ force: true });

    // Save purchase Bill
    cy.get('[name="referenceNumber"]').type(randomRef);
    cy.get(".hide-on-print > .flex > .primary").click();
    cy.wait(600);
    // Authorize Bill
    cy.get(".hide-on-print > .flex > .primary").click();
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click();

    // Supplier payment
    cy.wait(600);
    cy.get('[name="referenceNumber"]').clear().type(randomRef1);
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
    cy.get(".hide-on-print > .flex > .primary").click({ force: true });

    // Stock receive

    cy.get(".hide-on-print > .flex > .primary").click({ force: true });
    // Condirm Stock receive
    cy.get(".hide-on-print > .flex > .primary").click();
    cy.wait(500);
    cy.get(".hide-on-print > .flex > .primary").click();

    // Goto listing
    cy.get(".hide-on-print > .flex > :nth-child(2)").click();
  });
});
