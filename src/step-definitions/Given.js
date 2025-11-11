import {Given} from '@wdio/cucumber-framework';
import HomePage from '../page-objects/home/home-page.js';
import PageObjects from '../page-objects/page-objects.js';

const pageobjects = new PageObjects();
const homePage = new HomePage();

Given(/^ссылка на сайт/, async () => {
  homePage.getURL();
});

Given(/я нахожусь на "([^"]*)"/, async (pageName) => {
  pageobjects.openPageByName(pageName);
});

Given(/устанавливаю cookie региона доставки "([^"]*)"/, async (regionName) => {
  await browser.setCookies({
    name: 'delivery-region-id',
    value: regionName,
    domain: '.onliner.by',
  });
});

Given(/я удаляю cookie/, async () => {
  await browser.deleteCookies();
});
