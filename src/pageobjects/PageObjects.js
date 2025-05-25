const AbPage = require('./ab/ab.page')
const BaseHeader = require('./BaseHeader')
const CatalogPage = require('./catalog/catalog.page')
const SearchModal = require('./SerchModal')

class PageObjects {
    constructor() {

        this.elements = {
            'кнопка Принять все cookie': '//a[@id="submit-button"]',
            'фрейм окно поиска': '//*[@id="fast-search-modal"]/div/div/iframe'
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
        //console.log("element:" + elementName + "And pageName:" + pageName)
        //console.log("element:" + this.getPage(pageName).elements[elementName])
        return this.getPage(pageName).elements[elementName]
    }

    async open(path) {
        await browser.url(path)
    }

    async switchContextTo(sourceContext) {
        console.log(sourceContext)
        
        if (sourceContext != "родительский") {
            console.log('Переключение контекста')
            const iframe = await $(this.elements[sourceContext])
            await iframe.waitForDisplayed({ timeout: 3000 })
            await browser.switchFrame(iframe)
        }
        else {
            console.log('Переключение контекста на родительский')
            await browser.switchToParentFrame();
        }
        const currentContext = await browser.execute(() => {
            return window.self === window.top ? 'main' : 'iframe'
        });
        console.log(`Текущий контекст: ${currentContext}`)
    }

}

module.exports = PageObjects