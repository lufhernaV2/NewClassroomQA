const { test } = require('@playwright/test');
import HomePage from '../page-objects/homePage';

test('booking single room', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToUrl('https://automationintesting.online/');
  await homePage.bookSingleRoomE2EFlow();
});

test('failed booking', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToUrl('https://automationintesting.online/');
  await homePage.failedBooking();
});
