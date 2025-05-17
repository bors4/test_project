const AbPage = require('./ab/ab.page')
const BaseHeader = require('./BaseHeader')
const CatalogPage = require('./catalog/catalog.page')

class PageObjects {
    constructor() {
        this.pages = {
            "заголовок страницы": new BaseHeader(),
            "страница Автобарахолка": new AbPage(),
            "страница Каталог": new CatalogPage()
        }
    }

    getPage(pageName){
        return this.pages[pageName]
    };

    getElement (element, pageName){
        return this.getPage(pageName).elements[element]
    }


}

module.exports = PageObjects