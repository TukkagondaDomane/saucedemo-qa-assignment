import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Successful Checkout Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  const checkoutPage = new CheckoutPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

  await checkoutPage.clickCheckout();

  await checkoutPage.fillCheckoutInformation();

  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await checkoutPage.verifyOrderSuccess();
});
