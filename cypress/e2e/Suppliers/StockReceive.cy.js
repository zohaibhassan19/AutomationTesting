describe('Suppliers',()=>{

it('Create Stock Receive',()=>{
    
        // Call login Function   
      cy.loginCMS()
      cy.wait(400);

      // Visit Create form
    cy.contains('Suppliers') .trigger('mouseover') .click({ force: true });
  
    cy.contains('.MuiListItemButton-root', "Stock Receives") .trigger('mouseover') .click({ force: true });
     cy.get('.justify-between > .flex > div > .MuiButtonBase-root') .click( {force: true})
   
    // Fill form 

    cy.contains('Suppliers *').closest('.commonSelect').find('input').first().click({ force: true })
     cy.get('[class*="-option"]').eq(1).click({ force: true })
      cy.contains('Stores *').closest('.commonSelect').find('input').first().click({ force: true })
     cy.get('[class*="-option"]').eq(1).click({ force: true })

     

     // Parts Fields
     cy.get(':nth-child(1) > :nth-child(1) > .MuiGrid-root > .gap-2 > .MuiButtonBase-root').click({ multiple: true, force: true })
     cy.get('[name="stockReceiptItems.0.itemName"]') .closest('.commonSelect') .find('input') .first() .click({ force: true })
     cy.get('[class*="-option"]').eq(0).click({ force: true })

     cy.get('[name="stockReceiptItems.0.quantity"]') .type(5)
     cy.get('[name="stockReceiptItems.0.unitPrice"]').type(100)
     cy.get('[name="stockReceiptItems.0.discount"]').type(5)

       // Submit Form
     cy.get('.hide-on-print > .flex > .primary') .click()
})
})