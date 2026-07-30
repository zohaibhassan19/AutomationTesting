// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// 1. Hide fetch/XHR requests from command log (cleaner logs)
const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
  style.setAttribute('data-hide-command-log-request', '')
  app.document.head.appendChild(style)
}



// 2. Ignore uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('did not return a valid number')) {
    return false // prevents Cypress from failing/reloading on this error
  }
  return true // let all other uncaught exceptions fail tests as normal
})

// 3. Print test name in console
Cypress.on('test:before:run', (test) => {
  console.log('Running test:', test.title)
})
// 4. Scroll and click
Cypress.Commands.add('scrollAndClick', (selector) => {
  cy.get(selector).scrollIntoView().click()
})

Cypress.on('uncaught:exception', (err) => {
  const ignoreErrors = [
    'ResizeObserver',
    'ResizeObserver loop',
    'undelivered notifications'
  ];
  
  if (ignoreErrors.some(msg => err.message.includes(msg))) {
    return false;
  }
  return true;
});

// cypress/support/e2e.js

Cypress.on('uncaught:exception', (err) => {
  // List of error messages to ignore
  const ignoredErrorMessages = [
    'ResizeObserver',
    'ResizeObserver loop',
    'undelivered notifications',
    'insertBefore',
    'NotFoundError'
  ];

  // Check if the error message matches any in the ignore list
  const shouldIgnore = ignoredErrorMessages.some(msg => err.message.includes(msg));

  // Return false to prevent Cypress from failing the test
  return !shouldIgnore;
});