const BasePage = require('./base.page')
const URLs = require('../config/constants')

class HomePage extends BasePage {
    getURL() {
        return URLs.HOME;
    }

    locators = {
        main_logo:      '//div//a[@href="https://www.onliner.by"]/img',

        //Ссылки в заголовке
        href_catalog:   '//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]',
        href_news:      '//nav//a[contains(@href,"onliner")][1]//span[.="Новости"]',
        href_ab:        '//nav//a[contains(@href,"ab.")][1]//span[.="Автобарахолка"]',
        href_r:         '//nav//a[contains(@href,"r.")][1]//span[.="Дома и квартиры"]',
        href_s:         '//nav//a[contains(@href,"s.on")][1]/span[.="Услуги"]',
        href_baraholka: '//nav//a[contains(@href,"baraholka")][1]//span[.="Барахолка"]',
        href_forum:     '//nav//a[contains(@href,"forum")][1]//span[.="Форум"]',
        href_kurs:      '//nav//a[contains(@href, "kurs")]',
        href_pogoda:    '//nav//a[contains(@href, "pogoda")]',
        
        //Поиск
        input_search: '//input[@name="query"]',

        //Контйнер кнопок авторизации/регистрации
        button_enter:    '//*[@id="userbar"]//text()[.="Вход"]',
        button_facebook: '//*[@id="userbar"]//*[@title="Facebook"]',
        button_enter:    '//*[@id="userbar"]//*[@title="ВКонтакте"]',
        button_enter:    '//*[@id="userbar"]//*[@title="Google"]',
        button_cart:     '//*[@id="userbar"]//*[@title="Корзина"]'
    }
}

module.exports = HomePage;