//// this file test the login page of TerraBite

// these are the firebase buttons on screen
const authProviders = [
  {
    providerId: "google.com",
    textLong: "Sign in with Google",
    textShort: "Google",
  },
  {
    providerId: "facebook.com",
    textLong: "Sign in with Facebook",
    textShort: "Facebook",
  },
  {
    providerId: "password",
    textLong: "Sign in with email",
    textShort: "Email",
  },
];

describe("tests the login page", () => {
  it("goes to the base url", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  it("asserting the authentication methods", () => {
    // getting the div where they live
    cy.get("div#firebaseui_container > div > div > form > ul > li")
      .should("have.length", authProviders.length)
      .find("button")
      .each(($provider, index) => {
        cy.wrap($provider)
          .should(
            "have.attr",
            "data-provider-id",
            authProviders[index].providerId
          )
          .within((_) => {
            cy.root()
              .find("span.firebaseui-idp-text-long")
              .should("have.text", authProviders[index].textLong);
            cy.root()
              .find("span.firebaseui-idp-text-short")
              .should("have.text", authProviders[index].textShort);
          });
      });
  });
});
