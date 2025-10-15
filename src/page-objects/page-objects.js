import {assert} from 'chai';
import HomePage from './home/home-page.js';
import AbPage from './ab/ab-page.js';
import BaseHeader from './header/base-header.js';
import CatalogPage from './catalog/catalog-page.js';
import RPage from './r/r-page.js';
import TasksPage from './tasks/tasks-page.js';
import ForumPage from './forum/forum-page.js';
import CleverPage from './header/clever/clever-page.js';
import KursPage from './kurs/kurs-page.js';
import PogodaPage from './pogoda/pogoda-page.js';
import CartPage from './cart/cart-page.js';
import AutoPage from './auto/auto-page.js';
import PeoplePage from './people/people-page.js';
import MoneyPage from './money/money-page.js';
import TechPage from './tech/tech-page.js';
import RealtPage from './realt/realt-page.js';
import SearchModal from './header/search/search-modal.js';
import CatalogMobileCat from './catalog/cat/electronics/catalog-mobile-page.js';
import CatalogPricesPage from './catalog/catalog-prices-page.js';
import AuthorizationModal from './home/auth-modal.js';

import dotenv from 'dotenv';
dotenv.config();

class PageObjects {
  constructor() {
    this.elements = {
      'Кнопка Принять все cookie': this.buttonAcceptAllCookies,
      'Модальное окно поиска': this.frameSearchModal,
    };

    this.pages = {
      'Главная страница': new HomePage(),
      'Заголовок страницы': new BaseHeader(),
      'Страница Автобарахолка': new AbPage(),
      'Страница Каталог': new CatalogPage(),
      'Страница Дома и квартиры': new RPage(),
      'Страница Услуги': new TasksPage(),
      'Страница Форум': new ForumPage(),
      'Модальное окно поиска': new SearchModal(),
      'Страница Клевер Onliner': new CleverPage(),
      'Страница Курсы валют': new KursPage(),
      'Страница Погода': new PogodaPage(),
      'Страница Корзина': new CartPage(),
      'Страница Люди': new PeoplePage(),
      'Страница Авто': new AutoPage(),
      'Страница Кошелек': new MoneyPage(),
      'Страница Технологии': new TechPage(),
      'Страница Недвижимость': new RealtPage(),
      'Страница каталог Мобильные телефоны': new CatalogMobileCat(),
      'Страница Предложения продавцов': new CatalogPricesPage(),
      'Модальное окно авторизации': new AuthorizationModal(),
    };
  }

  get buttonAcceptAllCookies() {
    return '//a[@id="submit-button"]';
  }

  get frameSearchModal() {
    return '//*[@id="fast-search-modal"]//iframe';
  }

  getPageObject(pageName) {
    return this.pages[pageName];
  }

  async getElementByName(elementName, pageName) {
    const element = await $(this.getPageObject(pageName).elements[elementName]);
    await element.waitForExist({timeout: 10000});

    return element;
  }

  async getElementsByName(elementName, pageName) {
    const elements = await $$(this.getPageObject(pageName).elements[elementName]);

    return elements;
  }

  async getElementText(elementName, pageName) {
    const element = await this.getElementByName(elementName, pageName);
    const elementText = await element.getText();
    assert.isNotEmpty(elementText, `Для "${elementName}" на "${pageName}" текст не определён`);

    return elementText;
  }

  async getElementTextByIndex(elementName, index, pageName) {
    const elements = await this.getElementsByName(elementName, pageName);
    const elementText = await elements[index].getText();
    assert.isNotEmpty(elementText, `Для "${elementName}"[${index}] на "${pageName}" текст не определён`);

    return elementText;
  }

  async hoverElement(elementName, pageName) {
    const element = await this.getElementByName(elementName, pageName);
    await element.moveTo();

    try {
      await element.isDisplayed({withinViewport: true});
    } catch (error) {
      throw new Error(`Элемент "${element}" не находится в области видимости: ${error}`);
    }
  }

  async openPageByName(pageName) {
    const page = this.getPageObject(pageName);
    const element = $(page.siteLogo);
    await browser.url(page.getURL());

    const currentUrl = await browser.getUrl();
    assert(currentUrl.includes(page.getURL(), `Для ${pageName} ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`));

    try {
      await element.waitForDisplayed();
    } catch (error) {
      throw new Error(`Логотип сайта отсутствует: ${error}`);
    }
  }

  getUrlByPageName(pageName) {
    const page = this.getPageObject(pageName);
    const pageURL = page.getURL();
    assert.isNotEmpty(pageURL, `Для ${pageName} не удалось определить URL`);

    return pageURL;
  }

  async clickOnElement(elementName, pageName) {
    const element = await this.getElementByName(elementName, pageName);
    await element.waitForClickable();
    await element.click();
  }

  async clickOnElementByIndex(elementName, index, pageName) {
    const elements = await this.getElementsByName(elementName, pageName);
    await elements[index].waitForClickable();
    await elements[index].click();
  }

  async setTextTo(elementName, pageName, textToInsert) {
    const element = await this.getElementByName(elementName, pageName);
    await element.waitForDisplayed();

    if (textToInsert === 'login') {
      await element.setValue(process.env.TEST_USER_LOGIN);

      return;
    }

    if (textToInsert === 'password') {
      await element.setValue(process.env.TEST_USER_PASSWORD);

      return;
    }

    try {
      await element.setValue(textToInsert);
    } catch (error) {
      throw new Error(`Текст не был вставлен: ${error}`);
    }
  }

  async cookieAccept() {
    const cookieButton = await $(this.buttonAcceptAllCookies);
    await cookieButton.waitForClickable({timeout: 10000});
    await cookieButton.click();
    await cookieButton.waitForDisplayed({reverse: true, timeout: 10000});
  }
}

export default PageObjects;
