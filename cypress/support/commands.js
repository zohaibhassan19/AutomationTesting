// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginCMS", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.wait(500);
  cy.visit(Cypress.env("cmsUrl"));
  cy.get('[name="email"]').type(Cypress.env('cmsEmail'));
  cy.get('[name="password"]').type(Cypress.env("cmsPassword"));
  cy.contains("Log In").click();
  //cy.wait(3000)
});

Cypress.Commands.add("loginPOS", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.wait(500);
  cy.visit(Cypress.env('posUrl'));
  cy.get("#username").type(Cypress.env(posEmail));
  cy.get("#password").type(Cypress.env(posPassword));
  cy.get("#stationId").type(Cypress.env(StationId));
  cy.contains("Login").click();
  //cy.wait(3000)
});
// Verify API / Status code / response message
Cypress.Commands.add(
  "verifyApi",
  (method, url, statusCode = 200, message = null) => {
    cy.intercept(method, `**${url}**`).as("apiCall");
    cy.wait("@apiCall").then((interception) => {
      expect(interception.response.statusCode).to.eq(statusCode);
      cy.log("Status Code: " + interception.response.statusCode);
      cy.log("Response: " + JSON.stringify(interception.response.body));
      if (message) {
        expect(interception.response.body.message).to.eq(message);
      }
    });
  },
);

// Dropdown format
/*
// Open Dropdown
cy.contains('Label Name *').closest('.commonSelect').find('input').first().click()

// Select Option (change index: 0=first, 1=second, 2=third)
cy.get('[class*="-option"]').eq(0).click()
*/

// For Signature
Cypress.Commands.add("sign", (selector) => {
  cy.get(selector).then(($canvas) => {
    const canvas = $canvas[0];
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    // Simulate drawing a simple signature
    canvas.dispatchEvent(
      new MouseEvent("mousedown", {
        clientX: rect.left + 20,
        clientY: rect.top + 60,
        buttons: 1,
      }),
    );

    canvas.dispatchEvent(
      new MouseEvent("mousemove", {
        clientX: rect.left + 80,
        clientY: rect.top + 30,
        buttons: 1,
      }),
    );

    canvas.dispatchEvent(
      new MouseEvent("mousemove", {
        clientX: rect.left + 140,
        clientY: rect.top + 70,
        buttons: 1,
      }),
    );

    canvas.dispatchEvent(
      new MouseEvent("mousemove", {
        clientX: rect.left + 200,
        clientY: rect.top + 40,
        buttons: 1,
      }),
    );

    canvas.dispatchEvent(
      new MouseEvent("mouseup", {
        clientX: rect.left + 240,
        clientY: rect.top + 50,
        buttons: 0,
      }),
    );
  });
});
