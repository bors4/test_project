const BasePage = require('./base.page')
const URLs = require('../config/constants')

class HomePage extends BasePage {
    getURL () {
        return URLs.HOME;
    }

    locators = {
        href_catalog: '//a[contains(@href,"catalog")][2]//span[.="Каталог"]',
        main_logo: '//div//a[@href="https://www.onliner.by"]/img'
    }
}

module.exports = HomePage;