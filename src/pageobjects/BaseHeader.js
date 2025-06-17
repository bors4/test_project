class BaseHeader {
	constructor() {
		this.elements = {
			"Лого сайта": '//div//a[@href="https://www.onliner.by"]/img',
			"ссылка Каталог":
				'//nav//a[contains(@href,"catalog")][2]//span[.="Каталог"]',
			"ссылка Новости":
				'//nav//a[contains(@href,"onliner")][1]//span[.="Новости"]',
			"ссылка Автобарахолка":
				'//nav//a[contains(@href,"ab.")][1]//span[.="Автобарахолка"]',
			"ссылка Дома и квартиры":
				'//nav//a[contains(@href,"r.")][1]//span[.="Дома и квартиры"]',
			"ссылка Услуги": '//nav//a[contains(@href,"s.on")][1]/span[.="Услуги"]',
			"ссылка Барахолка":
				'//nav//a[contains(@href,"baraholka")][1]//span[.="Барахолка"]',
			"ссылка Форум": '//nav//a[contains(@href,"forum")][1]//span[.="Форум"]',
			"ссылка Курс": '//nav//a[contains(@href, "kurs")]',
			"ссылка Погода": '//nav//a[contains(@href, "pogoda")]',
            "дропдаун Новости": '//*[contains(@class, "b-main-navigation__dropdown_visible")]',

			//Поиск
			"поле поиска": '//input[@name="query"]',
			"модальное окно поиска": '//div[@id="fast-search-modal"]',
			//Контейнер кнопок авторизации/регистрации
			'кнопка "Вход"': '//*[@id="userbar"]//text()[.="Вход"]',
			'кнопка "Facebook"': '//*[@id="userbar"]//*[@title="Facebook"]',
			'кнопка "Vkontakte"': '//*[@id="userbar"]//*[@title="ВКонтакте"]',
			'кнопка "Google"': '//*[@id="userbar"]//*[@title="Google"]',

			//Корзина
			'кнопка "Корзина"': '//*[@id="userbar"]//*[@title="Корзина"]',
		};
	}

	/* 
    get functions
    */
	async getTextFromSearchInput(searchInput) {
		const placeholderText = await $(searchInput).getAttribute("placeholder");
		const start = placeholderText.indexOf('"') + 1;
		const end = placeholderText.indexOf('"', start + 1);
		return placeholderText.slice(start, end);
	}

	/* 
    set functions
    */
	async setTextToSearch(searchInput, textToSearch) {
		$(searchInput).setValue(textToSearch);
	}

	/* 
    other functions
    */
	async acceptCookie() {
		$(this.buttonAcceptCookie).click();
	}
}

module.exports = BaseHeader;
