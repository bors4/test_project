const AbPage = require('./ab/ab.page')
const CatalogPage = require('./catalog/catalog.page')
class PageObjects {
    constructor (){
        this.pages = {
            "страница Автобарахолка": new AbPage(),
            "страница Каталог": new CatalogPage()
        }
        
        this.abpage = new AbPage()
        this.catalogpage = new CatalogPage()
    }

    getPage = (pageName) => {
        return this.pages[pageName]
    }
}

module.exports = PageObjects