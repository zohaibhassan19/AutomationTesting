describe("Business", () => {
  
  const randomAccountname = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const bankNames = ["Emirates NBD","Abu Dhabi Commercial Bank","Dubai Islamic Bank",
                     "First Abu Dhabi Bank","UBL Bank",];
  const randomBank = bankNames[Math.floor(Math.random() * bankNames.length)];
  const randomIBAN ="AE" +Math.floor(Math.random() * 90 + 10) +Math.floor(Math.random() * 9000000000000000 + 1000000000000000);
  const randomAccountNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  
  it("Account Tranfer", () => {
    cy.visit("http://dev2.sianty.com/#/login");

    cy.loginCMS();
    // Visit create form
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Inter Account Transfers")
      .trigger("mouseover").click({ force: true }); //
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true});
    // From Account
    cy.contains("From Account *")
      .closest(".commonSelect").find("input").first().click();
    cy.get('[id^="react-select"][id$="-option-0"]').first().click();

    // To Account
    cy.contains("To Account *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[id^="react-select"][id$="-option-0"]').first().click({ force: true });

    cy.get('[name="amount"]').type("1000");
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click(); // bank transfer Done
  });
});
