import {expect, expect as expectChai} from 'chai';
import {Then} from '@wdio/cucumber-framework';
import PageObjects from '../page-objects/page-objects.js';

const pageobjects = new PageObjects();

/**
 * @example Then я вижу "Модальное окно авторизации" на "Главная страница"
 */

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
  const element = await pageobjects.getElementByName(elementName, pageName);
  await element.isDisplayed();
});

Then(/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/, async (text, elementName, pageName) => {
  const searchInput = await pageobjects.getElementByName(elementName, pageName);

  if (text.includes('Например')) {
    const placeholder = searchInput.getAttribute('placeholder');
    expect(placeholder).to.include('Например');
  } else {
    const elements = await pageobjects.getElementsByName('Текст Ничего не найдено', pageName);
    expect(elements[0]).to.exist;
    const elementText = await elements[0].getText();
    expect(elementText).to.equal('Ничего не найдено');
  }
});

Then(/я вижу что "([^"]*)" на "([^"]*)" содержит текст "([^"]*)"/, async (elementName, pageName, elementText) => {
  const text = await pageobjects.getElementText(elementName, pageName);
  expectChai(text).to.include(elementText);
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

/***
 * @todo переписать с использованием parseFloat()
 */
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
 * @todo доработать шаг: добавить обработку операторов сравнения
 */
Then(
  /я вижу что кол-во "([^"]*)" на "([^"]*)" "([^"]*)" "(\d+)"/,
  async function (elementName, pageName, operator, itemCount) {
    const elements = await pageobjects.getElementsByName(elementName, pageName);
    expectChai(elements.length, `Условие не удовлетворяет ${elements.length} меньше ${itemCount}`).to.be.lessThan(
      itemCount
    );
  }
);
