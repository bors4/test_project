import { Given } from '@wdio/cucumber-framework';

import HomePage from '../page-objects/home/home-page.js';
import PageObjects from '../page-objects/page-objects.js';

const pageobjects = new PageObjects();
const homePage = new HomePage();

/**
 * Gets the site URL
 * @example Given ссылка на сайт
 */
Given(/^ссылка на сайт/, async () => {
  homePage.getURL();
});

/**
 * Opens the specified page
 * @param {string} pageName - Name of the page to open
 * @example Given я нахожусь на "Главная страница"
 */
Given(/я нахожусь на "([^"]*)"/, async (pageName) => {
  await pageobjects.openPageByName(pageName);
});

/**
 * Sets delivery region cookie
 * @param {string} regionName - Region name for the cookie
 * @example Given устанавливаю cookie региона доставки "minsk"
 */
Given(/устанавливаю cookie региона доставки "([^"]*)"/, async (regionName) => {
  try {
    await browser.setCookies({
      name: 'delivery-region-id',
      value: regionName,
      domain: '.onliner.by',
    });
  } catch (error) {
    console.error(error);
  }
});

/**
 * Deletes all cookies
 * @example Given я удаляю cookie
 */
Given(/я удаляю cookie/, async () => {
  try {
    await browser.deleteCookies();
  } catch (error) {
    console.error(error);
  }
});
