const BasePage = require('./base.page')

class CatalogPage extends BasePage {
    constructor(){

        super()

        this.h_catalog = '//h1[contains(text(), "Каталог")]',
        this.h_popular = '//h2[contains(text(), "Популярные категории")]'
    }
}

module.exports = CatalogPage