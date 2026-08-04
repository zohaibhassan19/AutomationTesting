describe("General", () => {

  // Creating Random data
  const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000,).toString();
  const randomArabicName = Array.from({ length: 6 }, () =>String.fromCharCode(0x0621 + Math.floor(Math.random() * 28)),).join("");
  const randomEmail = `${Array.from({ length: 8 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join("")}@email.com`;
  const randomName = Array.from({ length: 6 }, () =>String.fromCharCode(65 + Math.floor(Math.random() * 26)),).join("");
  const randompassword = Array.from(
    { length: 9 },
    () =>
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"[
        Math.floor(Math.random() * 72)
      ],
  ).join("");

  it("Create Users", () => {
    // Call login Function
    cy.loginCMS();
    cy.wait(1000);

    // Visit Create form
    cy.contains("General").trigger("mouseover").click({ force: true });

    cy.contains(".MuiListItemButton-root", "Users")
      .trigger("mouseover").click({ force: true });
    cy.get(".justify-between > .flex > div > .MuiButtonBase-root").click({force: true,});

    // Fill form
    cy.get('[name="name"]').type(randomName);
    cy.get('[name="secondaryName"]').type(randomArabicName);
    cy.get('[name="username"]').type(randomEmail);
    cy.get('[name="password"]').type(randompassword);
    cy.get('[name="confirmPassword"]').type(randompassword);
    cy.get('[name="phone"]').type(randomNumber);
    cy.get(":nth-child(9) > .MuiFormControl-root > .MuiInputBase-root").type("random address");

    // Open Dropdown

    cy.contains("User's Type *")
      .closest(".commonSelect").find("input").first().click();
      
    // Shuffle array and pick new type everytime
    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    const indices = [0, 1, 2, 3, 4, 5, 6];
    const shuffled = shuffleArray(indices);
    const randomIndex = shuffled[0];
    cy.get('[class*="-option"]').eq(randomIndex).click();

    // Submit form
    cy.get(".formSubmitBtn > .MuiButtonBase-root").click();
  });
});
