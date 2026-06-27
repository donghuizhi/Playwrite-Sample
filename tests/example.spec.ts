import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setContent(`
    <html>
      <head>
        <title>Playwright</title>
      </head>
      <body>
        <h1>Playwright</h1>
      </body>
    </html>
  `);

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.setContent(`
    <html>
      <head>
        <title>Playwright</title>
      </head>
      <body>
        <a href="#installation">Get started</a>
        <h1 id="installation">Installation</h1>
      </body>
    </html>
  `);

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
