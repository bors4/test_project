const { Then } = require('@wdio/cucumber-framework')
const BaseHeader = require('../pageobjects/BaseHeader')
const PageObjects = require('../pageobjects/PageObjects')

const baseHeader = new BaseHeader()
const pageobjects = new PageObjects()

Then(/я вижу элемент "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const page = pageobjects.getPage(pageName)
    const element = $(page.elements[elementName])
    expect(element).toExist()
});

Then(/я вижу "([^"]*)"/, async (elementName) => {
    const element = $(baseHeader.elements[elementName])
    await element.isDisplayed()
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

Then(/я вижу чекбокс "([^"]*)"/, async (elementName) => {
    const element = await $(baseHeader.elements[elementName])
    expect(element).toExist()
});

Then(/я вижу текст "([^"]*)" в "([^"]*)"/, async (text, elementName) => {
    const searchInput = $(baseHeader.elements[elementName])
    if (text.includes('Например'))
        await expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')))
    else {
        //conbaseHeader.elements['Ничего не найдено'].getText()
        //await expect($(baseHeader.elements['Ничего не найдено'])).toHaveText('Ничего не найдено')
        //await searchInput.waitForExist({ timeout: 5000 }); // Ожидаем появления
        console.log(await $(baseHeader.elements['Ничего не найдено']).getText())
    }
});

Then(/я вижу заголовок раздела "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const page = pageobjects.getPage(pageName)
    const section = $(page.elements[elementName])
    await expect(section).toExist()
});