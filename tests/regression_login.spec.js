import { test, expect } from '@playwright/test';

test('login and navigation test', async ({ page }) => {
  await page.goto('https://regautomation.cinccaperformance.com/UsersManagement/Account/Login?RETURN_URL=%2F');
  await page.locator('#logIDtxt').fill('autoRegA');
  await page.getByRole('textbox', { name: 'Password' }).fill('St@rtingLin3');
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Instead of page.goto(), wait for a known element on the home page
  await expect(page.getByRole('button', { name: ' Homeowners' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Vendors' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Banking' })).toBeVisible();

  await page.getByRole('button', { name: 'File' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
