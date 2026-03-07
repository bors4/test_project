import {Given} from '@wdio/cucumber-framework';
import HomePage from '../page-objects/home/home-page.js';
import PageObjects from '../page-objects/page-objects.js';

const pageobjects = new PageObjects();
const homePage = new HomePage();

Given(/^ссылка на сайт/, async () => {
  homePage.getURL();
});

Given(/я нахожусь на "([^"]*)"/, async (pageName) => {
  await pageobjects.openPageByName(pageName);
});

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

Given(/я удаляю cookie/, async () => {
  try {
    await browser.deleteCookies();
  } catch (error) {
    console.error(error);
  }
});
