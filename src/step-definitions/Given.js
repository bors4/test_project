const { Given } = require("@wdio/cucumber-framework");
const HomePage = require("../pageobjects/home/home.page");

const homePage = new HomePage();

Given(/^ссылка на сайт/, async () => {
	await homePage.getURL();
});