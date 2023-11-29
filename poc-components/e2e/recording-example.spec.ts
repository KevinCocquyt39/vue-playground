import { test, expect } from "@playwright/test";

test("select options and test result", async ({ page }) => {
    await page.goto("http://localhost:5174/");
    await page.getByTestId("customer-select").selectOption("Kevin");
    await page.getByTestId("shipping-address-select").selectOption("Moerbruggeplein 4");
    await expect(page.getByTestId("form-result")).toHaveText("1 - 1");
});
