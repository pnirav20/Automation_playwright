import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://timesheet.psplhyd.com/');
  await page.locator('#txtUserName').fill('b1751');
  await page.locator('#txtUserName').press('Tab');
  await page.locator('#txtPassword').fill('b1751');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Holiday List' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});