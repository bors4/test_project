const BasePage = require('../BaseHeader')

class CatalogPage extends BasePage {
    constructor() {

        super()

        this.elements = {
            'Каталог':                  '//h1[contains(text(), "Каталог")]',
            'Популярные категории':     '//h2[contains(text(), "Популярные категории")]'
        }
    }
}

module.exports = CatalogPage