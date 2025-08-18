const { Given } = require('@wdio/cucumber-framework');
const HomePage = require('../page-objects/home/home-page');
const PageObjects = require('../page-objects/page-objects');

require('dotenv').config();

const pageobjects = new PageObjects();
const homePage = new HomePage();

const login = process.env.TEST_USER_LOGIN;

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
