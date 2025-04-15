const BasePage = require('./base.page')

class CatalogPage extends BasePage {
    locators = {
        h_catalog: '//h1[contains(text(), "Каталог")]',
        h_popular: '//h2[contains(text(), "Популярные категории")]'
    }
}

module.exports = CatalogPage