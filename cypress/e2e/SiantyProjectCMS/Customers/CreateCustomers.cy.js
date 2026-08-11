describe("Customers", () => {

  // Creating Random data
  const randomName = Array.from({ length: 4 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomCompanyName = Array.from({ length: 4 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicName = Array.from({ length: 4 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomCompanyArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomEmail = `test_${Math.random().toString(36).substring(2, 3)}@gmail.com`;
  const randomCompanyEmail = `test_${Math.random().toString(36).substring(2, 3)}@gmail.com`;
  const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const password = Array.from({ length: 12 },() => chars[Math.floor(Math.random() * chars.length)],).join("");

  it.only("Create Individual Customers", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Customers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Customers List")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({ force: true});
    cy.get('.MuiList-root > [tabindex="0"]').click({ force: true });

    // Fill form

    cy.get('[name="name"]').type(randomName);
    cy.get('[name="secondaryName"]').type(randomArabicName);
    cy.get('[name="phone"]').type(10010);
    cy.get('[name="address"]').type("Asola");
    cy.contains("Source")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get(".PrivateSwitchBase-input").check();

    cy.get('[name="username"]').type(randomEmail);
    cy.get('[name="password"]').type(password);
    cy.get('[name="confirmPassword"]').type(password);
    cy.get(".PrivateSwitchBase-input").uncheck();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // Delete method
    cy.get("#styled-input").type(randomName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

    cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button").click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({
      force: true,
    });
  });

  // ================================================================================================================= //

  it("Create Client", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(400);

    // Visit Create form
    cy.contains("Customers").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Customers List")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});
    cy.get('.MuiList-root > [tabindex="-1"]').click({ force: true });

    // Fill form

    cy.get('[name="account.title"]').type(randomCompanyName);
    cy.get('[name="account.secondaryTitle"]').type(randomCompanyArabicName);
    cy.get('[name="account.taxNumber"]').type(3123213);
    cy.get('[name="account.email"]').type(randomCompanyEmail);
    cy.get('[name="account.phone"]').type(434242);
    cy.get('[name="account.creditLimit"]').type(9000000);
    cy.get('[name="account.creditPeriod"]').type(900);

    cy.contains("Price List")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.contains("Company Type")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Address fields
    cy.get('[name="addressesRequest.address"]').type("Chakwal");
    cy.get('[name="addressesRequest.buildingNumber"]').type("A321");
    cy.get('[name="addressesRequest.street"]').type("A321");
    cy.get('[name="addressesRequest.district"]').type("A321");
    cy.get('[name="addressesRequest.city"]').type("A321");
    cy.get('[name="addressesRequest.country"]').type("A321");
    cy.get('[name="addressesRequest.postalCode"]').type("A321");
    // User details
    cy.get('[name="name"]').type(randomName);
    cy.get('[name="secondaryName"]').type(randomArabicName);
    cy.get('[name="phone"]').type(10010);
    cy.get('[name="address"]').type("Asola");
    cy.contains("Source")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    cy.get(".PrivateSwitchBase-input").check();

    cy.get('[name="username"]').type(randomEmail);
    cy.get('[name="password"]').type(password);
    cy.get('[name="confirmPassword"]').type(password);
    cy.get(".PrivateSwitchBase-input").uncheck();

    // Submit Form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    // Status change & Delete method
    cy.get("#styled-input").type(randomName);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

     cy.get('.text-green-500.cursor-pointer') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
  });
})



