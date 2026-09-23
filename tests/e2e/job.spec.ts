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

test("user can favorite a job", async ({ page }) => {
  await page.goto("/");

  // user clicks on first two jobs
  await page.getByRole("button", { name: "Senior Frontend Developer" }).click();
  await page.getByRole("button", { name: "Fullstack Developer" }).click();

  // heart shows up
  await expect(
    page.getByRole("button", { name: "Senior Frontend Developer💖" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Fullstack Developer💖" }),
  ).toBeVisible();

  // navigate to profile page
  await page.getByRole("link", { name: "Profile" }).click();

  // user removes first job
  await page
    .getByRole("button", { name: "Senior Frontend Developer💖" })
    .click();

  // first job removed, second still there
  await expect(
    page.getByRole("button", { name: "Senior Frontend Developer💖" }),
  ).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Fullstack Developer💖" }),
  ).toBeVisible();

  // check persistance on refresh
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Fullstack Developer💖" }),
  ).toBeVisible();

  // clear all button works
  await page.getByRole("button", { name: "Clear Favorites" }).click();

  await expect(
    page.getByRole("button", { name: "Fullstack Developer💖" }),
  ).not.toBeVisible();
});
