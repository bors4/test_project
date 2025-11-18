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

class PageObjects {
  constructor() {
    this.elements = {
      'Кнопка Принять все cookie': this.buttonAcceptAllCookies,
      'Модальное окно поиска': this.frameSearchModal,
    };

    this.pages = {
      'Главная страница': new HomePage(),
      'Заголовок страницы': new BaseHeader(),
      'Модальное окно авторизации': new AuthorizationModal(),
      'Модальное окно поиска': new SearchModal(),
      'Страница Авто': new AutoPage(),
      'Страница Автобарахолка': new AbPage(),
      'Страница Дома и квартиры': new RPage(),
      'Страница Каталог': new CatalogPage(),
      'Страница Клевер Onliner': new CleverPage(),
      'Страница Корзина': new CartPage(),
      'Страница Кошелек': new MoneyPage(),
      'Страница Курсы валют': new KursPage(),
      'Страница Люди': new PeoplePage(),
      'Страница Недвижимость': new RealtPage(),
      'Страница Погода': new PogodaPage(),
      'Страница Предложения продавцов': new CatalogPricesPage(),
      'Страница Технологии': new TechPage(),
      'Страница Услуги': new TasksPage(),
      'Страница Форум': new ForumPage(),
      'Страница каталог Мобильные телефоны': new CatalogMobileCat(),
    };
  }

  get buttonAcceptAllCookies() {
    return '//a[@id="submit-button"]';
  }

  get frameSearchModal() {
    return '//*[@id="fast-search-modal"]//iframe';
  }

  /**
   * @param {string} pageName
   */
  getPageObject(pageName) {
    return this.pages[pageName];
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   */
  async getElementByName(elementName, pageName) {
    const selector = this.getPageObject(pageName).elements[elementName];
    const element = $(selector);

    await element.waitForExist({
      timeout: 10_000,
      timeoutMsg: `Элемент "${elementName}" не найден на странице "${pageName}" по селектору: ${selector}`,
    });

    return element;
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   */
  async getElementsByName(elementName, pageName) {
    const selector = this.getPageObject(pageName).elements[elementName];

    await browser.waitUntil(
      async () => {
        const foundElements = await $$(selector);

        return foundElements.length > 0;
      },
      {
        timeout: 3000,
        timeoutMsg: `Элементы "${elementName}" на странице "${pageName}" не появились за 3 секунды.`,
      }
    );

    return $$(selector);
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   */
  async getElementText(elementName, pageName) {
    const element = await this.getElementByName(elementName, pageName);
    const elementText = await element.getText();
    assert.isNotEmpty(elementText, `Для "${elementName}" на "${pageName}" текст не определён`);

    return elementText;
  }

  /**
   * @param {string} elementName
   * @param {number} index
   * @param {string} pageName
   */
  async getElementTextByIndex(elementName, index, pageName) {
    const elements = await this.getElementsByName(elementName, pageName);

    if (index >= elements.length) {
      throw new Error(
        `Индекс ${index} выходит за пределы списка "${elementName}" (всего элементов: ${elements.length})`
      );
    }

    const element = elements[index];

    await browser.waitUntil(
      async () => {
        const text = await element.getText();

        return text.length > 0;
      },
      {
        timeout: 5000,
        timeoutMsg: `Текст для "${elementName}"[${index}] на странице "${pageName}" не появился за 5 секунд`,
      }
    );

    return await element.getText();
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   */
  async hoverElement(elementName, pageName) {
    const element = await this.getElementByName(elementName, pageName);
    await element.moveTo();

    try {
      await element.isDisplayed({withinViewport: true});
    } catch (error) {
      throw new Error(`Элемент "${element}" не находится в области видимости: ${error}`);
    }
  }

  /**
   * @param {string} pageName
   */
  async openPageByName(pageName) {
    const page = this.getPageObject(pageName);
    const element = $(page.siteLogo);
    await browser.url(page.getURL());

    const currentUrl = await browser.getUrl();
    assert(
      currentUrl.includes(page.getURL(), `Для ${pageName} ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`)
    );

    try {
      await element.waitForDisplayed();
    } catch (error) {
      throw new Error(`Логотип сайта отсутствует: ${error}`);
    }
  }

  /**
   * @param {string} pageName
   */
  getUrlByPageName(pageName) {
    const page = this.getPageObject(pageName);
    const pageURL = page.getURL();
    assert.isNotEmpty(pageURL, `Для ${pageName} не удалось определить URL`);

    return pageURL;
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   */
  async clickOnElement(elementName, pageName) {
    try {
      const element = await this.getElementByName(elementName, pageName);
      await element.waitForClickable({timeout: 3000});
      await element.click();
    } catch (error) {
      throw new Error(`Не удалось нажать на элемент "${elementName}" на странице "${pageName}": ${error.message}`);
    }
  }

  /**
   * @param {string} elementName
   * @param {number} index
   * @param {string} pageName
   */
  async clickOnElementByIndex(elementName, index, pageName) {
    const elements = await this.getElementsByName(elementName, pageName);

    try {
      await elements[index].waitForDisplayed({timeout: 5000});
      await elements[index].waitForClickable();
      await elements[index].isDisplayed({withinViewport: true});
    } catch (error) {
      throw new Error(`Элемент "${elements[index]}" не находится в области видимости: ${error}`);
    }

    await elements[index].click();
  }

  /**
   * @param {string} elementName
   * @param {string} pageName
   * @param {string} textToInsert
   */
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

    await element.setValue(textToInsert);
    await element.waitUntil(
      async function () {
        return (await this.getValue()) === textToInsert;
      },
      {
        timeout: 5000,
        timeoutMsg: `Текст "${textToInsert}" не появился в элементе`,
      }
    );
  }

  async cookieAccept() {
    const cookieButton = await $(this.buttonAcceptAllCookies);
    await cookieButton.waitForClickable({timeout: 10000});
    await cookieButton.click();
    await cookieButton.waitForDisplayed({reverse: true, timeout: 10000});
  }
}

export default PageObjects;
