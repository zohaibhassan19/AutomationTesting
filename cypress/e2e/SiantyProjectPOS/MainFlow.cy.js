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


