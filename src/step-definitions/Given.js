const { Given } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/home/home.page');
const PageObjects = require('../pageobjects/PageObjects');

const pageobjects = new PageObjects();
const homePage = new HomePage();

Given(/^ссылка на сайт/, async () => {
	await homePage.getURL();
});

Given(/я нахожусь на странице "([^"]*)"/, async (pageName) => {
	pageobjects.openPageByName(pageName);
});
