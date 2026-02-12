import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://regautomation.cinccaperformance.com/UsersManagement/Account/Login?RETURN_URL=%2F');
  await page.locator('#logIDtxt').click();
  await page.locator('#logIDtxt').fill('autoRegA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('St@rtingLin3');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://regautomation.cinccaperformance.com/Home');
  await expect(page.getByRole('button', { name: ' Homeowners' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Vendors' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Banking' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Accounting' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' CCR' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' CCR' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Management' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Portfolio' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reports' })).toBeVisible();
  //await page.locator('a').filter({ hasText: /^Homeowners$/ }).click();
  //await expect(page.locator('iframe[name="displayOld"]').contentFrame().getByRole('heading', { name: 'Homeowner Listing' })).toBeVisible();
  //await expect(page.locator('iframe[name="displayOld"]').contentFrame().getByRole('heading')).toContainText('Homeowner Listing');
  //await expect(page.locator('#navbar')).toContainText('File');
  await page.getByRole('button', { name: 'File' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});