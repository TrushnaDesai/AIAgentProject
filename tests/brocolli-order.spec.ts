import { test, expect } from '@playwright/test';

test('Add Brocolli to cart and place order', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Add Brocolli - 1 Kg to the cart
  await page.locator(".product:has-text('Brocolli')").locator('button:has-text("ADD TO CART")').click();

  // Proceed to cart
  await page.locator('a.cart-icon').click();
  await page.locator('button:has-text("PROCEED TO CHECKOUT")').click();

  // Place Order
  await page.locator('button:has-text("Place Order")').click();

  // Choose India as country
  await page.locator('select').selectOption({ label: 'India' });

  // Agree to terms and conditions
  await page.locator('input[type="checkbox"]').check();

  // Proceed
  await page.locator('button:has-text("Proceed")').click();

  // Verify confirmation messages
  const confirmation = page.locator('span').filter({ hasText: 'Thank you, your order has been placed successfully' });
  await expect(confirmation).toHaveText(/Thank you, your order has been placed successfully/);
  await expect(confirmation).toHaveText(/You'll be redirected to Home page shortly!!/);
});
