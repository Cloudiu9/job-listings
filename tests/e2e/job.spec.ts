import { test, expect } from "@playwright/test";

test("homepage filters job listings", async ({ page }) => {
  await page.goto("/");

  // initial state
  await expect(
    page.getByRole("button", { name: "Senior Frontend Developer" }),
  ).toBeVisible();

  // add frontend filter
  await page.getByRole("button", { name: "Frontend" }).nth(3).click();

  // Filterbar appears
  await expect(page.getByRole("button", { name: "Clear" })).toBeVisible();

  // add react filter
  await page.getByRole("button", { name: "React" }).first().click();

  // correct jobs appear
  await expect(
    page.getByRole("button", { name: "Junior Frontend Developer" }).first(),
  ).toBeVisible();

  await expect(
    page.getByRole("button", { name: "Front-end Dev" }).first(),
  ).toBeVisible();

  // clear filters
  await page.getByRole("button", { name: "Clear" }).click();

  // All jobs visible again
  await expect(
    page.getByRole("button", { name: "Senior Frontend Developer" }),
  ).toBeVisible();
});
