const {Then} = require('@wdio/cucumber-framework')
const BaseHeader = require('../pageobjects/BaseHeader')
const PageObjects = require('../pageobjects/PageObjects')

const baseHeader = new BaseHeader()
const pageobjects = new PageObjects()

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const page = pageobjects.getPage(pageName)
    const element = $(page.elements[elementName])
    expect(element).toExist()
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

Then(/я вижу заголовок раздела "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const page = pageobjects.getPage(pageName)
    const section = $(page.elements[elementName])
    await expect(section).toExist()
});