const { test, expect } = require("@playwright/test");
const { email, password, invalidEmail, invalidPassword } = require("./user.js");

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').fill(email); // вводим почту
  await page.locator('[placeholder="Пароль"]').fill(password); // вводим пароль
  await page.click('[data-testid="login-submit-btn"]'); //нажимаем кнопку войти
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.screenshot({ path: "./screenshorts/success.jpg" });
});

test("Unsuccessful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').fill(invalidEmail); // вводим почту
  await page.locator('[placeholder="Пароль"]').fill(invalidPassword); // вводим пароль
  await page.click('[data-testid="login-submit-btn"]'); //нажимаем кнопку войти
  await expect(page.locator("[data-testid=login-error-hint]")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
  await page.screenshot({ path: "./screenshorts/error.jpg" });
});
