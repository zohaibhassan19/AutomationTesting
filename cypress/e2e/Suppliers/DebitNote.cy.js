describe('Suppliers',()=>{
   
     // Creating Random data    
     const randomRef = `REF-${Math.random().toString(36).substring(2, 5)}`;
    

it('Create Debit Note',()=>{
    
        // Call login Function   
      cy.loginCMS()
      cy.wait(400);

      // Visit Create form
    cy.contains('Suppliers') .trigger('mouseover') .click({ force: true });
  
    cy.contains('.MuiListItemButton-root', "Debit Notes") .trigger('mouseover') .click({ force: true });
     cy.get('.justify-between > .flex > div > .MuiButtonBase-root') .click( {force: true})
   
    // Fill form 

    cy.contains('Supplier Bills *').closest('.commonSelect').find('input').first().click({ force: true })
     cy.get('[class*="-option"]').eq(5).click({ force: true })
     cy.get('[name="referenceNumber"]') .type(randomRef)
     cy.wait(500)

     // Submit Form
     cy.get('.hide-on-print > .flex > .primary') .scrollIntoView() .click()
     cy.wait(500)
     cy.get('.hide-on-print > .flex > .primary') .scrollIntoView() .click()
     cy.contains('button', 'Back to list').click({ force: true })
})
})