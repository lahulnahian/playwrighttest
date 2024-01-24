
const {Page} = require('playwright');
const commonLocators = require('../locators/common');
import { expect } from '@playwright/test';


class CommonPage {

    constructor(page){
        this.page = page;
    }


    async visitHomePage(){
        await this.page.goto('https://insurancewebsitedemo.com/');
    }

    async waitForScrollBody(){
        const scrollBody = await this.page.locator(commonLocators.scrollBody);
         scrollBody.waitFor();
         await expect(scrollBody).toContainText('Your IndependentInsurance Agency');
    }
}

module.exports = CommonPage;

