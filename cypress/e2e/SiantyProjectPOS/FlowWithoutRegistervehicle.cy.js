// cypress/e2e/SiantyProjectPOS/POSMainFlow.cy.js

import POSMainFlowPage from '../../pages/POSMainFlowPage';

describe("POS Main Flow", () => {

  it("Vehicle detail page to Return cash", () => {
    cy.loginPOS();
    cy.wait(400);

    POSMainFlowPage.clickMainMenu();
    POSMainFlowPage.goToVehicles();
    POSMainFlowPage.OpenDetailPage();

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