import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("Add Product To Cart Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addBackpackToCart();

  await inventoryPage.verifyCartBadgeCount();

  await inventoryPage.openCart();

  await inventoryPage.verifyProductInCart();
});
