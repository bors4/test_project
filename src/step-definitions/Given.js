const { Given } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/home/home.page');
const PageObjects = require('../pageobjects/PageObjects');

require('dotenv').config();

const pageobjects = new PageObjects();
const homePage = new HomePage();

const login = process.env.TEST_USER_LOGIN;

Given(/^ссылка на сайт/, async () => {
	homePage.getURL();
});

Given(/я нахожусь на странице "([^"]*)"/, async (pageName) => {
	pageobjects.openPageByName(pageName);
});

Given(/я авторизован на сайте/, async (pageName) => {
	pageobjects.openPageByName(homePage.getURL());
});
