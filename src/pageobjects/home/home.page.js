const BasePage = require('../base.page')
const URLs = require('../../config/constants')

class HomePage extends BasePage {
    getURL() {
        return URLs.HOME;
    }

    constructor() {

        super();

        this.elements = {
        'Лого':         this.mainLogo,
        
        
        }

        this.mainLogo           = '//div//a[@href="https://www.onliner.by"]/img',

        //Ссылки в заголовке
        this.hrefCatalog        = '//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]'
        this.hrefNews           = '//nav//a[contains(@href,"onliner")][1]//span[.="Новости"]'
        this.hrefAb             = '//nav//a[contains(@href,"ab.")][1]//span[.="Автобарахолка"]'
        this.hrefR              = '//nav//a[contains(@href,"r.")][1]//span[.="Дома и квартиры"]'
        this.hrefS              = '//nav//a[contains(@href,"s.on")][1]/span[.="Услуги"]'
        this.hrefBaraholka      = '//nav//a[contains(@href,"baraholka")][1]//span[.="Барахолка"]'
        this.hrefForum          = '//nav//a[contains(@href,"forum")][1]//span[.="Форум"]'
        this.hrefKurs           = '//nav//a[contains(@href, "kurs")]'
        this.hrefPogoda         = '//nav//a[contains(@href, "pogoda")]'

        //Поиск
        this.inputSearch        = '//input[@name="query"]'
        this.modalSearch        = '//div[@id="search-page"]'
        this.checkBoxToEqual    = '//input[contains(@data-bind, "compare")]'

        //Контйнер кнопок авторизации/регистрации
        this.buttonEnter        = '//*[@id="userbar"]//text()[.="Вход"]'
        this.buttonFacebook     = '//*[@id="userbar"]//*[@title="Facebook"]'
        this.buttonVk           = '//*[@id="userbar"]//*[@title="ВКонтакте"]'
        this.buttonGoogle       = '//*[@id="userbar"]//*[@title="Google"]'
        this.buttonCart         = '//*[@id="userbar"]//*[@title="Корзина"]'
    }

    /* 
get functions
*/
    async getTextFromSearchInput() {
        const placeholderText = await $(this.inputSearch).getAttribute('placeholder');
        const start = placeholderText.indexOf('"') + 1;
        const end = placeholderText.indexOf('"', start + 1);
        return placeholderText.slice(start, end);
    }

/* 
set functions
*/
    async setTextToSearch(){
        const searchInput = await browser.$(this.inputSearch)
        const textToSearch = await this.getTextFromSearchInput()
        await searchInput.setValue(textToSearch)
    }

/* 
other functions
*/
    async hrefCatalogClick() {
        const hrefCatalog = this.hrefCatalog;
        await $(hrefCatalog).click();
    }

}

module.exports = HomePage;