import { Page, expect } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  async verifyCartBadgeCount() {
    const cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');

    await expect(cartBadge).toHaveText("1");
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async verifyProductInCart() {
    const product = this.page.locator(".inventory_item_name");

    await expect(product).toHaveText("Sauce Labs Backpack");
  }
}
