import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillCheckoutInformation() {
    await this.page.locator('[data-test="firstName"]').fill("Tukaram");

    await this.page.locator('[data-test="lastName"]').fill("Domane");

    await this.page.locator('[data-test="postalCode"]').fill("560064");
  }

  async continueCheckout() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyOrderSuccess() {
    const successMessage = this.page.locator(".complete-header");

    await expect(successMessage).toHaveText("Thank you for your order!");
  }
}
