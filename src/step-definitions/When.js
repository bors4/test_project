import { When } from '@wdio/cucumber-framework';

import BaseHeader from '../page-objects/header/base-header.js';
import SearchModal from '../page-objects/header/search/search-modal.js';
import PageObjects from '../page-objects/page-objects.js';
import { getExchangeRate } from '../utils/api-utils.js';
import * as BrowserUtils from '../utils/browser-utils.js';

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();
const searchmodal = new SearchModal();

/**
 * Accepts all cookies
 * @example When я принимаю cookie
 */
When(/я принимаю cookie/, async () => {
  await pageobjects.cookieAccept();
});

/**
 * Waits for specified number of seconds
 * @param {number} timeToWait - Time to wait in seconds
 * @example When я ожидаю [5] секунд
 */
When(/я ожидаю \[(\d+)] секунд/, async (timeToWait) => {
  await browser.pause(timeToWait * 1000);
});

/**
 * Clicks on element
 * @param {string} elementName - Name of the element to click
 * @param {string} pageName - Name of the page where element is located
 * @example When я нажимаю на "Ссылка О нас" на "Главная страница"
 */
When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
  await pageobjects.clickOnElement(elementName, pageName);
});

/**
 * Clicks on element by index
 * @param {string} elementName - Name of the element to click
 * @param {number} index - Index of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я нажимаю на "Карточка"[0] на "Страница Автобарахолка"
 */
When(/я нажимаю на "([^"]*)"\[(\d+)] на "([^"]*)"/, async (elementName, index, pageName) => {
  await pageobjects.clickOnElementByIndex(elementName, index, pageName);
});

/**
 * Takes placeholder text from search field and enters it
 * @param {string} elementName - Name of the element to enter text
 * @param {string} pageName - Name of the page where element is located
 * @example When я беру текст из примера в плейсхолдере поля поиска и ввожу в "Поле поиска" на "Главная страница"
 */
When(
  /я беру текст из примера в плейсхолдере поля поиска и ввожу в "([^"]*)" в "([^"]*)"/,
  async (elementName, pageName) => {
    const textToSearch = await baseHeader.getTextFromSearchInput();
    await pageobjects.setTextTo(elementName, pageName, textToSearch);
  }
);

/**
 * Enters text into element
 * @param {string} text - Text to enter
 * @param {string} elementName - Name of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я ввожу "телефон" в "Поле поиска" на "Главная страница"
 */
When(/я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"/, async (text, elementName, pageName) => {
  await pageobjects.setTextTo(elementName, pageName, text);
});

/**
 * Switches browser context
 * @param {string} sourceContext - Target context name
 * @example When я переключаю контекст на "iframe"
 */
When(/я переключаю контекст на "([^"]*)"/, async (sourceContext) => {
  await searchmodal.switchContextTo(sourceContext);
});

/**
 * Hovers mouse over element
 * @param {string} element - Name of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я навожу указатель мыши на "Кнопка" на "Главная страница"
 */
When(/я навожу указатель мыши на "([^"]*)" на "([^"]*)"/, async (element, pageName) => {
  await pageobjects.hoverElement(element, pageName);
});

/**
 * Switches to inactive browser tab
 * @example When я перехожу на неактивную вкладку в браузере
 */
When(/я перехожу на неактивную вкладку в браузере/, async () => {
  await BrowserUtils.switchWindow();
});

/**
 * Scrolls to element
 * @param {string} elementName - Name of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я скролю к "Футер" на "Главная страница"
 */
When(/я скролю к "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
  const element = await pageobjects.getElementByName(elementName, pageName);
  await BrowserUtils.scrollTo(element);
});

/**
 * Scrolls to element by index
 * @param {string} elementName - Name of the element
 * @param {number} index - Index of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я скролю к "Карточка"[0] на "Страница Автобарахолка"
 */
When(/я скролю к "([^"]*)"\[(\d+)] на "([^"]*)"/, async (elementName, index, pageName) => {
  const element = await pageobjects.getElementByIndex(elementName, index, pageName);
  await BrowserUtils.scrollTo(element);
});

/**
 * Refreshes current page
 * @example When я обновляю страницу
 */
When(/я обновляю страницу/, async () => {
  await browser.refresh();
});

/**
 * Clicks browser navigation button (back/forward)
 * @param {string} actionName - Button name (back/forward)
 * @example When я нажимаю на кнопку "back" браузера
 */
When(/я нажимаю на кнопку "([^"]*)" браузера/, async (actionName) => {
  await BrowserUtils.browserAction(actionName);
});

/**
 * Gets exchange rate from API
 * @param {string} currencyName - Currency name
 * @param {string} onDate - Date for the rate
 * @example When я с помощью API НБ РБ получаю курс "USD" на "01.01.2024"
 */
When(/я с помощью API НБ РБ получаю курс "([^"]*)" на "([^"]*)"/, async function (currencyName, onDate) {
  this.apiExchangeRate = await getExchangeRate(currencyName, onDate);
});

/**
 * Saves element text to context
 * @param {string} elementName - Name of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я сохраняю текст элемента "Заголовок" на "Главная страница"
 */
When(/я сохраняю текст элемента "([^"]*)" на "([^"]*)"/, async function (elementName, pageName) {
  this.elementText = await pageobjects.getElementText(elementName, pageName);
});

/**
 * Saves element text by index to context
 * @param {string} elementName - Name of the element
 * @param {number} index - Index of the element
 * @param {string} pageName - Name of the page where element is located
 * @example When я сохраняю текст элемента "Карточка"[0] на "Страница Автобарахолка"
 */
When(/я сохраняю текст элемента "([^"]*)"\[(\d+)] на "([^"]*)"/, async function (elementName, index, pageName) {
  this.elementText = await pageobjects.getElementTextByIndex(elementName, index, pageName);
});

/**
 * Selects option from dropdown by visible text
 * @param {string} selectOption - Option text to select
 * @param {string} elementName - Name of the dropdown element
 * @param {string} pageName - Name of the page where dropdown is located
 * @example When я выбираю из списка "USD" для "Селект валюты" на "Страница Курсы валют"
 */
When(/я выбираю из списка "([^"]*)" для "([^"]*)" на "([^"]*)"/, async function (selectOption, elementName, pageName) {
  const element = await pageobjects.getElementByName(elementName, pageName);
  await element.selectByVisibleText(selectOption);
});

/**
 * Selects option from dropdown by index
 * @param {number} index - Index of the option to select
 * @param {string} elementName - Name of the dropdown element
 * @param {string} pageName - Name of the page where dropdown is located
 * @example When я выбираю из списка значение с индексом [0] для "Селект валюты" на "Страница Курсы валют"
 */
When(
  /я выбираю из списка значение с индексом \[(\d+)] для "([^"]*)" на "([^"]*)"/,
  async function (index, elementName, pageName) {
    const element = await pageobjects.getElementByName(elementName, pageName);
    await element.selectByIndex(index);
  }
);
