import { test, expect } from '@playwright/test';
const baseUrl = 'https://insurancewebsitedemo.com/';

test('verfiy if a user is able to send a secure message to 2nd office', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Contact Information');
  await page.getByRole('link', { name: 'Main Location' }).click();
  await expect(page.getByRole('link', { name: '2nd office' })).toBeVisible();
  await page.getByRole('link', { name: '2nd office' }).click();
  await page.getByText('Send a Secure Message').click();
  await expect(page.getByRole('heading', { name: 'Secure Contact Form' })).toBeVisible();
  await expect(page.getByRole('group')).toContainText('General Inquiry');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').press('CapsLock');
  await page.getByLabel('First Name').fill('David');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').press('CapsLock');
  await page.getByLabel('Last Name').fill('Beckham');
  await page.getByLabel('Email Address:').click();
  await page.getByLabel('Email Address:').fill('davidbeckham123@gmail.com');
  await page.getByLabel('Phone Number:').click();
  await page.getByLabel('Phone Number:').fill('1234999018');
  await page.getByLabel('Digit Zip:').click();
  await page.getByLabel('Digit Zip:').fill('11321');
  await page.getByLabel('Message:').click();
  await page.getByLabel('Message:').press('CapsLock');
  await page.getByLabel('Message:').fill('I want to test');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.locator('#main')).toContainText('Thank you for contacting Demo Insurance Agency. A representative will contact you shortly regarding your submission.');
  await page.getByText('Send a message:Contact Us').click();

  async function newFunction() {
    await page.getByText('Send a Secure Message').click();
  }
});