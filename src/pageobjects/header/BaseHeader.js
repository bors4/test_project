const SiteUrls = require('../../config/site.urls');
class BaseHeader {
	constructor() {
		this.elements = {
			'Лого сайта': `//div//a[@href="${SiteUrls.HOME}"]/img`,
			'ссылка Каталог': `//nav//a[@href="${SiteUrls.CATALOG}"]`,
			'ссылка Новости': `//div//a[@href="${SiteUrls.HOME}"]//span[.="Новости"]`,
			'ссылка Автобарахолка': `//nav//a[@href="${SiteUrls.AB}"]//span[.="Автобарахолка"]`,
			'ссылка Дома и квартиры': `//nav//li/a[@href="${SiteUrls.R}/pk"]`,
			'ссылка Услуги': `//nav//a[@href="${SiteUrls.TASKS}"]/span[.="Услуги"]`,
			'ссылка Барахолка': `//nav//a[@href="${SiteUrls.BARAHOLKA}"]//span[.="Барахолка"]`,
			'ссылка Форум': `//nav//a[@href="${SiteUrls.FORUM}/"]`,
			'ссылка Onliner Клевер': '//nav/a[contains(@href,"clever")]',
			'ссылка Курсы валют': `//nav//a[@href="${SiteUrls.KURS}/"]`,
			'ссылка Погода': `//nav//a[@href="${SiteUrls.POGODA}/"]`,
			'текст курс доллара': '//nav//span[contains(text(),"$ ")]',
			'дропдаун Новости': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',
			'дропдаун Автобарахолка': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',
			'дропдаун Дома и квартиры': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',

			//Поиск
			'поле поиска': '//input[@name="query"]',
			'модальное окно поиска': '//div[@id="fast-search-modal"]',
			//Контейнер кнопок авторизации/регистрации
			'кнопка Вход': '//div[text()="Вход"]',
			'кнопка Facebook': '//*[@id="userbar"]//*[@title="Facebook"]',
			'кнопка Vkontakte': '//*[@id="userbar"]//*[@title="ВКонтакте"]',
			'кнопка Google': '//*[@id="userbar"]//*[@title="Google"]',

			//Корзина
			'кнопка Корзина': '//*[@id="userbar"]//*[@title="Корзина"]',

			//Профиль
			'аватар профиля': '',
			'меню профиля': '//div[@id="userbar"]',

			//Другое
			'18+': '//nav/div[contains(text(), "18+")]',
		};

		this.searchInput = this.elements['поле поиска'];
	}
	/* 
	get functions
	*/
	async getTextFromSearchInput() {
		try {
			const placeholderText = await $(this.searchInput).getAttribute('placeholder');
			const start = placeholderText.indexOf('"') + 1;
			const end = placeholderText.indexOf('"', start + 1);
			return placeholderText.slice(start, end);
		} catch (error) {
			throw new Error('Текст для поиска не определён');
		}
	}
}

module.exports = BaseHeader;
