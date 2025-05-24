const AbPage = require('./ab/ab.page')
const BaseHeader = require('./BaseHeader')
const CatalogPage = require('./catalog/catalog.page')
const SearchModal = require('./SerchModal')

class PageObjects {
    constructor() {

        this.elements = {
            'кнопка Принять все cookie': '//a[@id="submit-button"]',
        }

        this.pages = {
            'заголовок страницы': new BaseHeader(),
            'страница Автобарахолка': new AbPage(),
            'страница Каталог': new CatalogPage(),
            'модальное окно поиска': new SearchModal(),
        }
    }

    getPage(pageName) {
        return this.pages[pageName]
    };

    getElement(elementName, pageName) {
        console.log("element:" + elementName + "And pageName:" + pageName)
        console.log("element:" + this.getPage(pageName).elements[elementName])
        return this.getPage(pageName).elements[elementName]
    }

    async open(path) {
        await browser.url(path);
    }

    async switchContextTo(elementName, sourceContext) {
        const element = await $('//*[@id="fast-search-modal"]/div/div/iframe');

        await element.waitForExist();
        await browser.switchToFrame(element);
    }

}

module.exports = PageObjects