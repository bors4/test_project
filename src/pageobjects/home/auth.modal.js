class AutorizationModal {
	constructor() {
		this.elements = {
			'поле логин': '//input[@placeholder="Ник или e-mail"]',
			'поле пароль': '//input[@placeholder="Пароль"]',
			'кнопка Войти': '//button[normalize-space()="Войти"]',
		};
	}
}

module.exports = AutorizationModal;
