// cypress/pages/POSMainFlowPage.js

class POSMainFlowPage {

  // Random Data
  randomVIN = `VIN${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`.substring(0, 17);
  randomRefNo = `REF${Date.now()}`.substring(0, 10);
  randomRefNo1 = `REF${Date.now() + 1}`.substring(0, 10);
  randomUAEPlate = `${Math.floor(1000 + Math.random() * 9000)}${'ABCDEFGHJKLMNPRSTUVWXYZ'[Math.floor(Math.random() * 23)]}`;
  randomSecondaryPlateNumber = `${Math.floor(1000 + Math.random() * 9000)}${'ABCDEFGHJKLMNPRSTUVWXYZ'[Math.floor(Math.random() * 23)]}`;

  // Navigation
  clickMainMenu() {
    cy.get('.logo-main-menu').click({ multiple: true });
  }

  goToVehicles() {
    cy.get('a[href="#/vehicles"]').click({ force: true, multiple: true });
  }

  clickAddVehicle() {
    cy.get('.flex > .ant-btn').click({ force: true, multiple: true });
  }

  // Vehicle Form
  enterVIN(vin) {
    cy.get('.ant-input-affix-wrapper > #vehicle_vin').type(vin);
  }

  clickPlateNumber() {
    cy.get('.ant-form-item-control-input-content > #vehicle_plateNumber').click({ multiple: true });
  }

  selectPlateRegion() {
    cy.get('#plateRegion > :nth-child(2) > :nth-child(2)').click({ multiple: true });
  }

  enterPlateCode(plate) {
    cy.get('#code').type(plate);
  }

  confirmPlateModal() {
    cy.get('.ant-modal-footer > .ant-btn').click({ multiple: true });
  }

  enterSecondaryPlate(plate) {
    cy.get('.ant-form-item-control-input-content > #vehicle_secondaryPlateNumber').type(plate);
  }

  selectExistingCustomer() {
    cy.get('.gap-2 > .gap-1 > .ant-btn-default').click({ multiple: true });
  }

  selectVehicleType() {
    cy.get('#rc_select_1').click({ force: true, multiple: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true, multiple: true });
  }

  selectYear() {
    cy.get('.ant-select-selection-search > #vehicle_year').click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(0).click({ force: true, multiple: true });
  }

  selectTransmission() {
    cy.get('.ant-select-selection-search > #vehicle_transmission').click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(1).click({ force: true, multiple: true });
  }

  selectFuelType() {
    cy.get('.ant-select-selection-search > #vehicle_fuelType').click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(1).click({ force: true, multiple: true });
  }

  selectCustomerDropdown() {
    cy.get('#rc_select_13').click({ force: true, multiple: true });
    cy.wait(500);
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(0).click({ force: true, multiple: true });
  }

  selectMakeAndModel() {
    cy.wait(2000);
    cy.get('.ant-form-item-control-input-content > #vehicle_makeId').click({ force: true, multiple: true });
    cy.get('[data-row-key="68"] > .p-0 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #field > .ant-radio-button-wrapper').click({ force: true, multiple: true });
    cy.get('[data-row-key="614"] > .p-0 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #field > .ant-radio-button-wrapper').click({ force: true, multiple: true });
    cy.wait(1000);
  }

  registerVehicle() {
    cy.get('.mb-4 > .justify-end > .ant-btn-primary').click({ force: true, multiple: true });
    cy.wait(1000);
  }

  // Job Card
  createJobCard() {
    cy.get('.ant-btn-primary').click({ force: true, multiple: true });
  }

  enterOdometer(value) {
    cy.get('#odometer').type(value);
  }

  selectFuelLevel(level) {
    cy.contains('.ant-slider-mark-text', level).click({ force: true, multiple: true });
  }

  submitJobCard() {
    cy.get('.ant-form-item-control-input-content > .ant-btn').click({ force: true, multiple: true });
  }

  // Add Parts
  clickAddButton() {
    cy.wait(2000);
    cy.get('.gradient-button').click({ multiple: true, force: true });
  }

  selectPart() {
    cy.get('.ant-dropdown-menu-item').eq(2).click({ multiple: true });
    cy.wait(500);
    cy.get(':nth-child(1) > .ant-card > .ant-card-body > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner').click({ force: true, multiple: true });
    cy.get('.ant-col.flex > .ant-btn-primary').click({ force: true, multiple: true });
    cy.wait(2000);
  }

  // Work Order
  createWorkOrder() {
    cy.contains('span', 'Create Work Order').parent().scrollIntoView().click({ force: true, multiple: true });
    cy.get('.ant-modal-content', { timeout: 15000 }).should('be.visible');
    cy.contains('.ant-btn', 'Select All').click({ force: true, multiple: true });
    cy.get('.ant-btn-primary.ant-btn-block').contains('Submit').click({ force: true, multiple: true });
    cy.wait(2000);
  }

  // Invoice
  issueInvoice() {
    cy.contains('.ant-btn', 'Issue Invoice').click({ force: true, multiple: true });
    cy.wait(500);
    cy.get('.ant-dropdown-menu-item').eq(0).click({ force: true, multiple: true });
    cy.wait(1000);
    cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click({ force: true, multiple: true });
  }

  // Payments
  createPayment(refNo) {
    cy.contains('.ant-menu-item', 'Payments').click({ force: true, multiple: true });
    cy.get(':nth-child(2) > .flex > .ant-btn').click({ force: true, multiple: true });
    cy.get('#referenceNo').type(refNo);
    cy.get('#rc_select_28').click({ force: true, multiple: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true, multiple: true });
    cy.get('.justify-between > .ant-btn').click({ force: true, multiple: true });
    cy.wait(1000);
  }

  // Credit Notes
  createCreditNote() {
    cy.contains('.ant-menu-item', 'Credit Notes').click({ force: true, multiple: true });
    cy.get(':nth-child(2) > .flex > .ant-btn').click({ force: true, multiple: true });
    cy.get('#inventoryForm_reason').type('Automation remarks');
    cy.get('.ant-checkbox-inner').click({ force: true, multiple: true });
    cy.get('.ant-table-footer > .flex > .ant-btn').click({ force: true, multiple: true });
    cy.wait(4000);
  }

  // Return Cash
  createReturnCash(refNo) {
    cy.contains('.ant-menu-item', 'Return Cash').click({ force: true, multiple: true });
    cy.get(':nth-child(2) > .flex > .ant-btn').click({ force: true, multiple: true });
    cy.get('#rc_select_35').click({ force: true, multiple: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true, multiple: true });
    cy.wait(500);
    cy.get('#paymentMode').closest('.ant-select').find('.ant-select-selector').click({ force: true });
    cy.wait(1000);
    cy.contains('.ant-select-item-option-content', 'Cash').click({ force: true });
    cy.get('#referenceNo').type(refNo);
    cy.get('#remarks').type('Automation');
    cy.get('.ant-form > .flex > .ant-btn').click({ force: true, multiple: true });
  }
}

export default new POSMainFlowPage();