// cypress/e2e/SiantyProjectPOS/POSMainFlow.cy.js

import POSMainFlowPage from '../../pages/POSMainFlowPage';

describe("POS Main Flow", () => {

  it("Vehicle Register to Return cash", () => {
    cy.loginPOS();
    cy.wait(400);

    POSMainFlowPage.clickMainMenu();
    POSMainFlowPage.goToVehicles();
    POSMainFlowPage.clickAddVehicle();

    POSMainFlowPage.enterVIN(POSMainFlowPage.randomVIN);
    POSMainFlowPage.clickPlateNumber();
    POSMainFlowPage.selectPlateRegion();
    POSMainFlowPage.enterPlateCode(POSMainFlowPage.randomUAEPlate);
    POSMainFlowPage.confirmPlateModal();
    POSMainFlowPage.enterSecondaryPlate(POSMainFlowPage.randomSecondaryPlateNumber);
    POSMainFlowPage.selectExistingCustomer();

    POSMainFlowPage.selectVehicleType();
    POSMainFlowPage.selectYear();
    POSMainFlowPage.selectTransmission();
    POSMainFlowPage.selectFuelType();
    POSMainFlowPage.selectCustomerDropdown();
    POSMainFlowPage.selectMakeAndModel();
    POSMainFlowPage.registerVehicle();

    POSMainFlowPage.createJobCard();
    POSMainFlowPage.enterOdometer(100);
    POSMainFlowPage.selectFuelLevel('75%');
    POSMainFlowPage.submitJobCard();

    POSMainFlowPage.clickAddButton();
    POSMainFlowPage.selectPart();

    POSMainFlowPage.createWorkOrder();
    POSMainFlowPage.issueInvoice();

    POSMainFlowPage.createPayment(POSMainFlowPage.randomRefNo);
    POSMainFlowPage.createCreditNote();
    POSMainFlowPage.createReturnCash(POSMainFlowPage.randomRefNo1);
  });
});


/*describe("POS Main Flow", () => {

  // Creating Random data
  const randomVIN = `VIN${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`.substring(0, 17);
  const randomRefNo = `REF${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`.substring(0, 3);
  const randomRefNo1 = `REF${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`.substring(0, 3);
  const randomUAEPlate = `${Math.floor(1000 + Math.random() * 9000)}${'ABCDEFGHJKLMNPRSTUVWXYZ'[Math.floor(Math.random() * 23)]}`;
  const randomSecondaryPlateNumber = `${Math.floor(1000 + Math.random() * 9000)}${'ABCDEFGHJKLMNPRSTUVWXYZ'[Math.floor(Math.random() * 23)]}`;

it("Vehicle Register to Return cash", () => {
    // Call login Function
    cy.loginPOS();
    cy.wait(400);

    cy.get('.logo-main-menu').click({ multiple: true })
    cy.get('a[href="#/vehicles"]').click({ force: true, multiple: true });
    cy.get('.flex > .ant-btn').click({ force: true, multiple: true });

    // Vehicle Register Form open

    // Fill form 
    cy.get('.ant-input-affix-wrapper > #vehicle_vin').type(randomVIN)
    cy.get('.ant-form-item-control-input-content > #vehicle_plateNumber').click({ multiple: true })
    cy.get('#plateRegion > :nth-child(2) > :nth-child(2)').click({ multiple: true })  // For platenumber field
    cy.get('#code').type(randomPlateNumber)
    cy.get('.ant-modal-footer > .ant-btn').click({ multiple: true })
    cy.get('.ant-form-item-control-input-content > #vehicle_secondaryPlateNumber').type(randomSecondaryPlateNumber)
    cy.get('.gap-2 > .gap-1 > .ant-btn-default').click({ multiple: true }) // select existing customer

    // Dropdown Fields
    
    cy.get('#rc_select_1').click({ force: true, multiple: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true, multiple: true });

    // Year of Manufacture
    cy.get('.ant-select-selection-search > #vehicle_year')
      .click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(0).click({ force: true, multiple: true });

    cy.get('.ant-select-selection-search > #vehicle_transmission')
      .click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(1).click({ force: true, multiple: true });

    cy.get('.ant-select-selection-search > #vehicle_fuelType')
      .click({ force: true, multiple: true });
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(1).click({ force: true, multiple: true });

    cy.get('#rc_select_13').click({ force: true, multiple: true });
    cy.wait(500)
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option').eq(0).click({ force: true, multiple: true });


    // Select Make & Model
    cy.wait (2000)
    cy.get('.ant-form-item-control-input-content > #vehicle_makeId').click({ force: true, multiple: true });
    cy.get('[data-row-key="68"] > .p-0 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #field > .ant-radio-button-wrapper').click({ force: true, multiple: true });
    cy.get('[data-row-key="614"] > .p-0 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #field > .ant-radio-button-wrapper').click({ force: true, multiple: true });
    cy.wait(1000)
    // Register vehicle
    cy.get('.mb-4 > .justify-end > .ant-btn-primary').click({ force: true, multiple: true });

    cy.wait(1000)
     
    // Vehicle register > Create Jobcard 

    cy.get('.ant-btn-primary').click({ force: true, multiple: true });
    cy.get('#odometer').type(100)
    cy.contains('.ant-slider-mark-text', '75%').click({ force: true, multiple: true });
    cy.get('.ant-form-item-control-input-content > .ant-btn').click({ force: true, multiple: true }); 

    // Jobcard Created : Add part / Service / Package
    cy.wait(2000)
    cy.get('.gradient-button').click({ multiple: true, force: true });

    // Add part in JC
    cy.get('.ant-dropdown-menu-item').eq(2).click({ multiple: true }); 
    cy.wait(500)
    cy.get(':nth-child(1) > .ant-card > .ant-card-body > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner').click({ force: true, multiple: true });
    cy.get('.ant-col.flex > .ant-btn-primary').click({ force: true, multiple: true });

    cy.wait(2000);
    // // Add Service in JC
    // cy.get('.gradient-button')  .click({ multiple: true,force: true });
    // cy.get('.ant-dropdown-menu-item').eq(1).click(); 
    // cy.wait(500)
    // cy.get(':nth-child(1) > .ant-card > .ant-card-body > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner') .click({ force: true });
    // cy.get('.ant-col.flex > .ant-btn-primary') .scrollIntoView() .click({ force: true });

    // cy.wait(500)
    // // Add Pckage in JC
    // cy.get('.gradient-button')  .click({ multiple: true,force: true });
    // cy.get('.ant-dropdown-menu-item').eq(0).click(); 
    // cy.wait(500)
    // cy.get(':nth-child(1) > .ant-card > .ant-card-body > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner') .click({ force: true });
    // cy.get('.ant-col.flex > .ant-btn-primary')  .click({ force: true });

    
  cy.contains('span', 'Create Work Order')
    .parent()
    .scrollIntoView()
    .click({ force: true, multiple: true });

  cy.get('.ant-modal-content', { timeout: 15000 }).should('be.visible');

  // Select All in table
  cy.contains('.ant-btn', 'Select All').click({ force: true, multiple: true });

  // Submit
  cy.get('.ant-btn-primary.ant-btn-block').contains('Submit').click({ force: true, multiple: true });

  // WO Created : Create invoice
  cy.wait(2000)

  cy.contains('.ant-btn', 'Issue Invoice').click({ force: true, multiple: true });
  cy.wait(500)
  cy.get('.ant-dropdown-menu-item').eq(0).click({ force: true, multiple: true });
  cy.wait(1000)
  cy.get('.ant-modal-confirm-btns > .ant-btn-primary') .click({ force: true, multiple: true });
  // Invoice Issue
  
  // Create Payment
cy.contains('.ant-menu-item', 'Payments').click({ force: true, multiple: true });
cy.get(':nth-child(2) > .flex > .ant-btn') .click({ force: true, multiple: true });
cy.get('#referenceNo') .type(randomRefNo)
cy.get('#rc_select_28') .click({ force: true, multiple: true });
cy.get('[class*="-option"]').eq(0) .click({ force: true, multiple: true });
cy.get('.justify-between > .ant-btn') .click({ force: true, multiple: true });
cy.wait(1000)
// Create Credit Notes
cy.contains('.ant-menu-item', 'Credit Notes').click({ force: true, multiple: true });
cy.get(':nth-child(2) > .flex > .ant-btn') .click({ force: true, multiple: true });
cy.get('#inventoryForm_reason') .type("Automation remarks")
cy.get('.ant-checkbox-inner') .click({ force: true, multiple: true });
cy.get('.ant-table-footer > .flex > .ant-btn') .click({ force: true, multiple: true });
cy.wait(4000)

// Create Return Cash
cy.contains('.ant-menu-item', 'Return Cash').click({ force: true, multiple: true });
cy.get(':nth-child(2) > .flex > .ant-btn') .click({ force: true, multiple: true });
cy.get('#rc_select_35') .click({ force: true, multiple: true });
cy.get('[class*="-option"]').eq(0) .click({ force: true, multiple: true });

cy.wait(500)
cy.get('#paymentMode')
  .closest('.ant-select')
  .find('.ant-select-selector')
  .click({ force: true });
cy.wait(1000);
cy.contains('.ant-select-item-option-content', 'Cash').click({ force: true });

cy.get('#referenceNo') .type(randomRefNo1)
cy.get('#remarks') .type('Automation')

cy.get('.ant-form > .flex > .ant-btn') .click({ force: true, multiple: true });

  })
})*/