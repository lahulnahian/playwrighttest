import { test, expect } from '@playwright/test';




test('verfiy if agent can request a auto insurance quote', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await expect(page.locator('#skrollr-body')).toContainText('Your IndependentInsurance Agency');
  await expect(page.getByRole('link', { name: 'Request A Quote', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Request A Quote', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Free No-Obligation Quote Forms');
  await expect(page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
  await page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
  await expect(page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('David');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').press('CapsLock');
  await page.getByLabel('Last Name').fill('Beckham');
  await page.getByLabel('Email Address:').click();
  await page.getByLabel('Email Address:').fill('davidbeckham123@gmail.com');
  await page.getByLabel('Phone Number:').click();
  await page.getByLabel('Phone Number:').fill('6269912990');
  await page.getByLabel('Digit Zip:').click();
  await page.getByLabel('Digit Zip:').fill('34212');
  await page.getByRole('button', { name: 'Continue to Step 2... ' }).click();
  await expect(page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
  await expect(page.locator('#progress_id')).toContainText('Step 1 of 4');
});
