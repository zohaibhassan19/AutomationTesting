// Page Object Model
import AccountsPage from "../../pages/AccountsPage";

describe("Create Account", () => {
  // Random test data
  const randomAccountname = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("");
  const bankNames = ["Emirates NBD","Abu Dhabi Commercial Bank","Dubai Islamic Bank",
    "First Abu Dhabi Bank","UBL Bank",];
  const randomBank = bankNames[Math.floor(Math.random() * bankNames.length)];
  const randomIBAN ="AE" +Math.floor(Math.random() * 90 + 10) +Math.floor(Math.random() * 9000000000000000 + 1000000000000000);
  const randomAccountNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();

  it.only("Create account( type = bank )", () => {
    // Login and navigate to accounts page
    cy.loginCMS();
    AccountsPage.visit();

    // Open create account form
    AccountsPage.openCreateForm();

    // Fill bank account details
    AccountsPage.fillAccountTitle(randomAccountname);
    AccountsPage.fillBankName(randomBank);
    AccountsPage.fillAccountNumber(randomAccountNumber);
    AccountsPage.fillIban(randomIBAN);
    AccountsPage.fillOpeningBalance("5000");

    // Submit form
    AccountsPage.submitForm();
    cy.wait(1000);
  });

  it("Create account( type = Cash )", () => {
    // Login and navigate to accounts page
    cy.loginCMS();
    AccountsPage.visit();

    // Open create account form
    AccountsPage.openCreateForm();

    // Select account type as Cash
    AccountsPage.selectAccountType("Cash");

    // Fill cash account details
    AccountsPage.fillAccountTitle(randomAccountname);
    AccountsPage.fillOpeningBalance("2000");

    // Submit form
    AccountsPage.submitForm();
    cy.wait(1000);

    // Verify by navigating back to accounts list
    AccountsPage.visit();
  });
});
