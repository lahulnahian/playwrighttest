import { test, expect } from '@playwright/test';
const CommonPage = require('../pageObjects/actions/common');
const NavigatePaymentClaimsPage = require('../pageObjects/actions/navigatePaymentClaimsPage');

let commonPage;
let NavigatePaymentClaimsFirstPage;


test.describe('insurance website for a user to use features', () => {
  
  


  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    await commonPage.visitHomePage();
    await commonPage.waitForScrollBody();
  });



  test("verify user is able to navigate payments and claims", async ({
    page,
  }) => {
    const navigatePaymentClaimsPage = new NavigatePaymentClaimsPage(page);
    await navigatePaymentClaimsPage.clickOnNavigatePaymentClaimsLink();
    await navigatePaymentClaimsPage.verifyNavigatePaymentsClaimsFirstPage();
   
  });




  test("verfiy user can go instant health quote page", async ({ page }) => {
    await page
      .getByRole("link", { name: "Request A Quote", exact: true })
      .click();
    await expect(page.locator("h1")).toContainText(
      "Free No-Obligation Quote Forms"
    );
    await expect(
      page.getByRole("link", { name: "Instant Health Quote" })
    ).toBeVisible();
    await page.getByRole("link", { name: "Instant Health Quote" }).click();
    await page.getByRole("banner").getByRole("link", { name: "Home" }).click();
  });

  test("verify user is able to write a review for the app ", async ({
    page,
  }) => {
    await page.getByLabel("About").click();
    await expect(page.locator("h1")).toContainText(
      "About Demo Insurance Agency"
    );
    await expect(
      page.getByRole("link", { name: "Write a Review" })
    ).toBeVisible();
    await page.getByRole("link", { name: "Write a Review" }).click();
    await expect(page.locator("h1")).toContainText("Write a Review");
    await page.getByRole("banner").getByRole("link", { name: "Home" }).click();
  });

  test("verify user is able to navigate to the survey form", async ({
    page,
  }) => {
    await page.getByLabel("Support").click();
    await expect(page.locator("h1")).toContainText("Client Support Services");
    await expect(
      page.getByRole("link", { name: "Survey Survey" })
    ).toBeVisible();
    await page.getByRole("link", { name: "Survey Survey" }).click();
    await expect(page.locator("h1")).toContainText("Secure Survey Form");
    await page.getByRole("banner").getByRole("link", { name: "Home" }).click();
  });

  test.afterEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.pause("");
  });
});
