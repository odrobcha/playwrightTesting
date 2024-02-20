import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.getByRole('link', { name: 'English 6,782,000+ articles' }).click();
    await page.locator('a').filter({ hasText: 'Mike Sadler' }).click();

    await expect(page.getByText('Mike Sadler', { exact: true })).toBeVisible();
});

