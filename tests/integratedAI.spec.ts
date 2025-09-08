import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';
import { assert } from 'console';

test('Add Brocolli to cart and place order', async ({ page }) => {
  // Navigate to the website
  const aiargs={page,test};
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
const wheatPrice=  await ai("On Page 1 get the price of Wheat",aiargs);
const wheatDiscountPrice=  await ai("On Page 1 get the discount price of Wheat",aiargs);
console.log(`Wheat Price: ${wheatPrice} and Discount Price: ${wheatDiscountPrice}`);
await ai('Verify the discount price is less than the actual price',aiargs);
const difference= await ai("What is the difference between actual price and discount price",aiargs);
console.log(`Difference between actual price and discount price is ${difference}`);
assert(parseInt(wheatPrice)-parseInt(wheatDiscountPrice)===parseInt(difference));

});
//