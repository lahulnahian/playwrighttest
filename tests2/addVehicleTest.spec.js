import { test, expect } from '@playwright/test';




test('verfiy that a user can add a new vehicle to the existing policty', async ({page}) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await page.locator('[aria-label="Support"]').waitFor();
    await page.locator('[aria-label="Support"]').hover();
    await page.locator('text=Add a Vehicle Form').waitFor();
    await page.locator('text=Add a Vehicle Form').click();
   await expect(page.locator('#title_div')).toContainText('Secure Add a Vehicle Request Form');


   //fill out the form 
   //fill first name
   await page.locator('#fname').fill('john');
   await page.locator('#lname').fill('doe');
   await page.locator('#email').fill("johndoe123@gmail.com");
   await page.locator('#phone').fill('9413300799');
   await page.locator('#zip').fill('32331');


   //plicy Number
   await page.locator('[name="form_data[policy_info][policy_number]"]').fill('123354325')


   //dropdown for dates
   await page.locator('[name="form_data[policy_info][_date_effective_date][month]"]').selectOption('February');
   await page.locator('[name="form_data[policy_info][_date_effective_date][day]"]').selectOption('February');
   await page.locator('[name="form_data[policy_info][_date_effective_date][year]"]').selectOption('February');



   await page.waitForTimeout(5000);




});
