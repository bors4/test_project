class BaseHeader {

    constructor () {

        this.elements = {
        'Лого':                         this.mainLogo,
        'ссылка Каталог':               '//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]',
        'ссылка "Новости"':             this.hrefNews,
        'ссылка "Автобарахолка"':       this.hrefAb,
        'ссылка "Дома и квартиры"':     this.hrefR,
        'ссылка "Услуги"':              this.hrefS,
        'ссылка "Барахолка"':           this.hrefBaraholka,
        'ссылка "Форум"':               this.hrefForum,
        'ссылка "Курс"':                this.hrefKurs,
        'ссылка "Погода"':              this.hrefPogoda,
        
        //Поиск
        'поле поиска':                  this.inputSearch,
        'модальное окно поиска':        this.modalSearch,
        'чекбокс "К сравнению"':        this.checkBoxToEqual,

        //Контейнер кнопок авторизации/регистрации
        'кнопка "Вход"':                this.buttonEnter,
        'кнопка "Facebook"':            this.buttonFacebook,
        'кнопка "Vkontakte"':           this.buttonVk,
        'кнопка "Google"':              this.buttonGoogle,
        
        //Корзина
        'кнопка "Корзина"':             this.buttonCart,

        'кнопка "Принять все cookie"':  this.buttonAcceptCookie,
        }

        this.mainLogo           = '//div//a[@href="https://www.onliner.by"]/img'
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

        //Контейнер кнопок авторизации/регистрации
        this.buttonEnter        = '//*[@id="userbar"]//text()[.="Вход"]'
        this.buttonFacebook     = '//*[@id="userbar"]//*[@title="Facebook"]'
        this.buttonVk           = '//*[@id="userbar"]//*[@title="ВКонтакте"]'
        this.buttonGoogle       = '//*[@id="userbar"]//*[@title="Google"]'
        
        //Корзина
        this.buttonCart         = '//*[@id="userbar"]//*[@title="Корзина"]'

        //Cookie
        this.buttonAcceptCookie = '//a[@id="submit-button"]'
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
    async open(path) {
        await browser.url(path);
    }

    async hrefClick(hrefElement) {
        const element = $(hrefElement);
        await element.click();
    }

    async acceptCookie (){
        $(this.buttonAcceptCookie).click()
    }
}

module.exports = BaseHeader