const {Then} = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/home/home.page');
const CatalogPage = require('../pageobjects/catalog/catalog.page');

const homePage = new HomePage();
const catalogPage = new CatalogPage()

Then(/я вижу лого сайта/, async () => {
    const logo = browser.$(homePage.mainLogo)
    expect(logo).toExist()
});

Then(/я вижу поле ввода для поиска товара/, async () => {
    const searchInput = browser.$(homePage.searchInput)
    await expect(searchInput).toExist()
});

Then(/я вижу текст примера товара для поиска/, async () => {
    const searchInput = await browser.$(homePage.searchInput)
    await expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')))
});

Then(/я вижу окно результатов поиска/, async () => {
    await browser.switchFrame($('iframe'))
    const modalSearch = await browser.$(homePage.modalSearch)
    await expect(modalSearch).toExist()
});

Then(/я вижу чекбокс "К сравнению"/, async () => {
    const checkBoxToEqual = browser.$(homePage.checkBoxToEqual)
    await expect(checkBoxToEqual).toExist()
})

Then(/я вижу заголовок раздела "Каталог"/, async () => {
    const logo = $(catalogPage.h_catalog)
    expect(logo).toExist()
});

Then(/я вижу заголовок раздела "Популярные разделы"/, async () => {
    const logo = $(catalogPage.h_popular)
    expect(logo).toExist()
})