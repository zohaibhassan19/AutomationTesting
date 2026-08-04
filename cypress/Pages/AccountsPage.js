class AccountsPage {
  // Locators
  visit() {
    cy.contains("Business Setup").trigger("mouseover").click({ force: true });
    cy.contains(".MuiListItemButton-root", "Accounts")
      .trigger("mouseover")
      .click({ force: true }); //
  }

  openCreateForm() {
    cy.get(".flex > div > .MuiButtonBase-root").click();
  }

  selectAccountType(type) {
    cy.get('[name="type"]').parent().click();
    cy.contains(type).click();
  }

  fillAccountTitle(title) {
    cy.get('[name="accountTitle"]').type(title);
  }

  fillBankName(bank) {
    cy.get('[name="bankName"]').type(bank);
  }

  fillAccountNumber(accountNumber) {
    cy.get('[name="accountNumber"]').type(accountNumber);
  }

  fillIban(iban) {
    cy.get('[name="iban"]').type(iban);
  }

  fillOpeningBalance(balance) {
    cy.get('[name="openingBalance"]').type(balance);
  }

  submitForm() {
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click({ force: true });
  }
}

export default new AccountsPage();
