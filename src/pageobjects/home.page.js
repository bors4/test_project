const BasePage = require('./base.page')
const URLs = require('../config/constants')

class HomePage extends BasePage {
    getURL() {
        return URLs.HOME;
    }

    constructor () {

        super();
        
        this.main_logo = '//div//a[@href="https://www.onliner.by"]/img'

        //Ссылки в заголовке
        this.hrefCatalog = '//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]'
        this.hrefNews = '//nav//a[contains(@href,"onliner")][1]//span[.="Новости"]'
        this.hrefAb = '//nav//a[contains(@href,"ab.")][1]//span[.="Автобарахолка"]'
        this.hrefR = '//nav//a[contains(@href,"r.")][1]//span[.="Дома и квартиры"]'
        this.hrefS = '//nav//a[contains(@href,"s.on")][1]/span[.="Услуги"]'
        this.hrefBaraholka = '//nav//a[contains(@href,"baraholka")][1]//span[.="Барахолка"]'
        this.hrefForum = '//nav//a[contains(@href,"forum")][1]//span[.="Форум"]'
        this.hrefKurs = '//nav//a[contains(@href, "kurs")]'
        this.hrefPogoda = '//nav//a[contains(@href, "pogoda")]'
        
        //Поиск
        this.inputSearch = '//input[@name="query"]'
        this.modalSearch = '//div[@id="search-page"]'

        //Контйнер кнопок авторизации/регистрации
        this.buttonEnter = '//*[@id="userbar"]//text()[.="Вход"]'
        this.buttonFacebook = '//*[@id="userbar"]//*[@title="Facebook"]'
        this.buttonVk = '//*[@id="userbar"]//*[@title="ВКонтакте"]'
        this.buttonGoogle = '//*[@id="userbar"]//*[@title="Google"]'
        this.buttonCart = '//*[@id="userbar"]//*[@title="Корзина"]'
    }

    getTextFromSearchInput() {
        searchExample = searchInput.getAttribute('placeholder')
        startText = searchExample.indexOf("&quot;", 1)
        endText = searchExample.indexOf("&quot;", 2)
        textToSearch = searchExample.slice(startText + 1, endText)
        return textToSearch
    }
}

module.exports = HomePage;