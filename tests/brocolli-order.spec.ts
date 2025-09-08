test('Add Brocolli, Cucumber, Orange to cart and place order', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Add Brocolli - 1 Kg to the cart
  await page.locator(".product:has-text('Brocolli')").locator('button:has-text("ADD TO CART")').click();

  // Add Cucumber to the cart
  await page.locator(".product:has-text('Cucumber')").locator('button:has-text("ADD TO CART")').click();

  // Add Orange to the cart
  await page.locator(".product:has-text('Orange')").locator('button:has-text("ADD TO CART")').click();

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

  // Verify confirmation message
  const confirmation = page.locator('span').filter({ hasText: 'Thank you, your order has been placed successfully' });
  await expect(confirmation).toHaveText(/Thank you, your order has been placed successfully/);
});
import { test, expect } from '@playwright/test';

test('Add Brocolli to cart and place order', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Add Brocolli - 1 Kg to the cart and verify price
  const brocolli = page.locator(".product:has-text('Brocolli')");
  const brocolliPrice = await brocolli.locator('.product-price').textContent();
  await brocolli.locator('button:has-text("ADD TO CART")').click();
  console.log('Brocolli Price:', brocolliPrice);

  // Add Carrot - 1 Kg to the cart and verify price
  const carrot = page.locator(".product:has-text('Carrot')");
  const carrotPrice = await carrot.locator('.product-price').textContent();
  await carrot.locator('button:has-text("ADD TO CART")').click();
  console.log('Carrot Price:', carrotPrice);

  // Add Mango - 1 Kg to the cart and verify price
  const mango = page.locator(".product:has-text('Mango')");
  const mangoPrice = await mango.locator('.product-price').textContent();
  await mango.locator('button:has-text("ADD TO CART")').click();
  console.log('Mango Price:', mangoPrice);

  // Add Walnuts - 1/4 Kg to the cart and verify price
  const walnuts = page.locator(".product:has-text('Walnuts')");
  const walnutsPrice = await walnuts.locator('.product-price').textContent();
  await walnuts.locator('button:has-text("ADD TO CART")').click();
  console.log('Walnuts Price:', walnutsPrice);

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
  //await ai("What is the message on screen")
  await expect(confirmation).toHaveText(/Thank you, your order has been placed successfully/);
  await expect(confirmation).toHaveText(/You'll be redirected to Home page shortly!!/);
});
