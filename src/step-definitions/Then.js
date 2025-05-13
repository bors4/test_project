const {Then} = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/BaseHeader');
const CatalogPage = require('../pageobjects/catalog/catalog.page');

const baseHeader = new BaseHeader();
const catalogPage = new CatalogPage()

Then(/я вижу лого сайта/, async () => {
    const logo = $(baseHeader.mainLogo)
    expect(logo).toExist()
});

Then(/я вижу поле ввода для поиска товара/, async () => {
    const searchInput = browser.$(baseHeader.searchInput)
    await expect(searchInput).toExist()
});

Then(/я вижу текст примера товара для поиска/, async () => {
    const searchInput = await browser.$(baseHeader.searchInput)
    await expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')))
});

Then(/я вижу окно результатов поиска/, async () => {
    await browser.switchFrame($('iframe'))
    const modalSearch = await browser.$(baseHeader.modalSearch)
    await expect(modalSearch).toExist()
});

Then(/я вижу чекбокс "К сравнению"/, async () => {
    const checkBoxToEqual = browser.$(baseHeader.checkBoxToEqual)
    await expect(checkBoxToEqual).toExist()
})

Then(/я вижу заголовок раздела "([^"]*)"/, async (element) => {
    const section = catalogPage.elements[element]
    await expect(section).toBeDisplayed()
});