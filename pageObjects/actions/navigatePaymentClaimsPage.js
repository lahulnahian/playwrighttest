const {Page} = require('playwright');
import { expect } from '@playwright/test';
const navigatePaymentClaimsPageLocators = require('../locators/navigatePaymentClaimsPage');



class NavigatePaymentClaimsPage {

    constructor(page) {
        this.page = page;
    }

    async clickOnNavigatePaymentClaimsLink() {
        await this.page
      .getByRole("banner")
      .getByRole("link", { name: navigatePaymentClaimsPageLocators.navigatepPaymentAndClaimsLink}).click();

    }

    async verifyNavigatePaymentsClaimsFirstPage(){

        await expect(
            this.page.getByRole("heading", { name: "Customer Payment and Claim" })
          ).toBeVisible();
          await expect(this.page.locator('#main')).toContainText(
            "Allied* Payments~ Claim Information> Phone #: 800-282-1446"
          );
          await this.page.getByRole("banner").getByRole("link", { name: "Home" }).click();
    }



}

module.exports = NavigatePaymentClaimsPage;