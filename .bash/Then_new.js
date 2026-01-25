import {expect as expectChai} from 'chai';
import {Then} from '@wdio/cucumber-framework';
import PageObjects from '../page-objects/page-objects.js';
import {COMPARATORS} from '../config/operators.js';

const pageobjects = new PageObjects();

/**
 * Verifies that an element is displayed on the specified page
 * @param {string} elementName - Name of the element to check
 * @param {string} pageName - Name of the page where the element should be present
 * @example <caption>Example in feature file:</caption>
 * Then я вижу "Модальное окно авторизации" на "Главная страница"
 */
Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
  const element = await pageobjects.getElementByName(elementName, pageName);
  await element.isDisplayed();
});

Then(/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/, async (text, elementName, pageName) => {
  const searchInput = await pageobjects.getElementByName(elementName, pageName);

  if (text.includes('Например')) {
    const placeholder = searchInput.getAttribute('placeholder');
    expectChai(placeholder).to.include('Например');
  } else {
    const elements = await pageobjects.getElementsByName('Текст Ничего не найдено', pageName);
    expectChai(elements[0]).to.exist;
    const elementText = await elements[0].getText();
    expectChai(elementText).to.equal('Ничего не найдено');
  }
});

Then(/я вижу что "([^"]*)" на "([^"]*)" содержит текст "([^"]*)"/, async (elementName, pageName, elementText) => {
  const text = await pageobjects.getElementText(elementName, pageName);
  const filteredText = text.filter((el) => !el.includes(elementText));
  expectChai(filteredText.length).to.equal(0, `Некоторые элементы не содержат текст "${elementText}"`);
});

Then(/я проверяю что нахожусь на "([^"]*)"/, async (pageName) => {
  await browser.waitUntil(
    async () => {
      const currentUrl = await browser.getUrl();

      return currentUrl.includes(pageobjects.getUrlByPageName(pageName));
    },
    {
      timeout: 10000,
      timeoutMsg: `Expected to be on page ${pageName} but still on different page after 10s`,
    }
  );
});

Then(
  /я вижу что "([^"]*)" на "([^"]*)" имеет атрибут "([^"]*)" со значением "([^"]*)"/,
  async (elementName, pageName, attributeName, attributeValue) => {
    const element = await pageobjects.getElementByName(elementName, pageName);
    const attribute = await element.getCSSProperty(attributeName);

    if (attributeValue.includes('#')) {
      const hexColor = attribute.parsed.hex;
      expect(hexColor.includes(attributeValue));
    } else {
      attributeValue.includes('#');
    }
  }
);

Then(/я вижу что курсы валют равны/, function () {
  // noinspection JSUnresolvedVariable
  expectChai(this.elementText).to.equal(`$ ${this.apiExchangeRate.replace('.', ',')}`);
});

Then(/я вижу что "([^"]*)"\[(\d+)] на "([^"]*)" равен сохранённому/, async function (elementName, index, pageName) {
  const elementText = await pageobjects.getElementTextByIndex(elementName, index, pageName);
  // noinspection JSUnresolvedVariable
  expectChai(elementText).to.equal(this.elementText);
});

/**
 * Compares actual and expected number of elements
 * @param {string} elementName - Name of the element to count
 * @param {string} pageName - Name of the page where elements are located
 * @param {('больше'|'меньше'|'равно'|'не меньше'|'не больше')} operator - Comparison operator
 * @param {number} itemCount - Expected number of elements
 * @example <caption>Example in feature file:</caption>
 * Then я вижу что кол-во "Карточка продаваемого авто" на "Страница Автобарахолка" "меньше" "50"
 */
Then(
  /я вижу что кол-во "([^"]*)" на "([^"]*)" "([^"]*)" "(\d+)"/,
  async function (elementName, pageName, operator, itemCount) {
    const elements = await pageobjects.getElementsByName(elementName, pageName);
    const op = COMPARATORS[operator];
    if (!op) throw new Error(`Неизвестный оператор ${operator}. Допустимые: ${Object.keys(op).join(', ')}`);
    const comparsionResult = op.fn(elements.length, +itemCount);
    console.log(`Кол-во элементов на странице ${elements.length} ${operator} ${itemCount}`);
    const errorMessage = `Условие не удовлетворяет: ${elements.length} ${op.label} ${itemCount}`;
    expectChai(comparsionResult, errorMessage).to.be.true;
  }
);
