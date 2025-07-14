class BaseHeader {
	constructor() {
		this.elements = {
			'Лого сайта': '//div//a[@href="https://www.onliner.by"]/img',
			'ссылка Каталог': '//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]',
			'ссылка Новости': '//nav//a[contains(@href,"onliner")][1]//span[.="Новости"]',
			'ссылка Автобарахолка': '//nav//a[contains(@href,"ab.")][1]//span[.="Автобарахолка"]',
			'ссылка Дома и квартиры': '//nav//a[contains(@href,"r.")][1]//span[.="Дома и квартиры"]',
			'ссылка Услуги': '//nav//a[contains(@href,"s.on")][1]/span[.="Услуги"]',
			'ссылка Барахолка': '//nav//a[contains(@href,"baraholka")][1]//span[.="Барахолка"]',
			'ссылка Форум': '//nav//a[contains(@href,"forum")][1]//span[.="Форум"]',
			'ссылка Onliner Клевер': '//nav/a[contains(@href,"clever")]',
			'ссылка Курсы валют': '//nav//a[contains(@href, "kurs")]',
			'текст курс доллара': '//nav//a[contains(@href, "kurs")]/span',
			'ссылка Погода': '//nav//a[contains(@href, "pogoda")]',
			'дропдаун Новости': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',
			'дропдаун Автобарахолка': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',
			'дропдаун Дома и квартиры': '//*[contains(@class, "b-main-navigation__dropdown_visible")]',

			//Поиск
			'поле поиска': '//input[@name="query"]',
			'модальное окно поиска': '//div[@id="fast-search-modal"]',
			//Контейнер кнопок авторизации/регистрации
			'кнопка "Вход"': '//*[@id="userbar"]//text()[.="Вход"]',
			'кнопка "Facebook"': '//*[@id="userbar"]//*[@title="Facebook"]',
			'кнопка "Vkontakte"': '//*[@id="userbar"]//*[@title="ВКонтакте"]',
			'кнопка "Google"': '//*[@id="userbar"]//*[@title="Google"]',

			//Корзина
			'кнопка Корзина': '//*[@id="userbar"]//*[@title="Корзина"]',

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
