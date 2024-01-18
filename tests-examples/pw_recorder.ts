import { test, expect } from '@playwright/test';

test('login logout', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});