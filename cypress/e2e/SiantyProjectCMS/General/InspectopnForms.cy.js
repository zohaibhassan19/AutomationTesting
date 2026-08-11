describe("General", () => {

  // Creating Random data
  const randomTitle = `Inspection${Array.from({ length: 3 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")}`;
  const randomSection1 = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomInvalidDescription = "A".repeat(501);
  const randomValidDescription = "Sgf".repeat(3);
  const randomArabicTitle = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomArabicSection1 = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomForm1 = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randomArabicForm1 = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");

  it("Create Inspection Forms", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Inspection Forms")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({
      force: true,
    });

    // Fill form

    cy.get('[name="title"]').type(randomTitle);
    cy.get('[name="secondaryTitle"]').type(randomArabicTitle);

    // Verify description  field 500 limit
    cy.get(
      "#form > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root",
    ).type(randomInvalidDescription);
    cy.get('[name="sections.0.title"]').type(randomSection1);
    cy.get('[name="sections.0.secondaryTitle"]').type(randomArabicTitle);

    cy.get('.MuiInputBase-root > [name="description"]')
      .clear()
      .type(randomValidDescription);

    // Form item fields
    cy.get('[name="sections.0.inspectionFormItems.0.title"]').type(randomForm1);
    cy.get('[name="sections.0.inspectionFormItems.0.secondaryTitle"]').type(
      randomArabicForm1,
    );
    cy.get(
      ".css-1l34vrx > .MuiGrid-container > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root",
    ).type(randomInvalidDescription);

    // Vehicle Type Dropdown
    cy.contains("Vehicle Type *")
      .closest(".commonSelect").find("input").first().click({ force: true });
    cy.get('[class*="-option"]').eq(0).click({ force: true });

    // Submit form for validation verification
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
    cy.contains("Description must be under 500 characters");

    // Submit form
    cy.get('[name="sections.0.inspectionFormItems.0.description"]')
      .clear().type(randomValidDescription);
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();

    cy.contains("Inspection Form created successfully");

    // =============== Status change & Delete method ========================= //
    
    cy.get("#styled-input").type(randomTitle);
    cy.get(".MuiGrid-root > .text-white").click(); // Click on submit button for search

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

     cy.get('.cursor-pointer.font-medium') .click({ multiple: true,force: true });
      cy.get('.MuiDialogActions-root > .MuiButton-contained') .click({ multiple: true,force: true });
      cy.contains('Status changed successfully')

    cy.get(":nth-child(1) > .MuiTableCell-paddingNone > .MuiBox-root > #long-button",).click({ force: true });
    cy.contains("Delete").click({ force: true });
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click({force: true,});
  });
});
