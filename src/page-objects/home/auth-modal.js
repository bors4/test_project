class AuthorizationModal {
	constructor() {
		this.elements = {
			'Поле Логин': this.inputLogin,
			'Поле Пароль': this.inputPassword,
			'Кнопка Войти': this.buttonLogin,
		};
	}

	get inputLogin() {
		return '//input[@placeholder="Ник или e-mail"]';
	}

	get inputPassword() {
		return '//input[@placeholder="Пароль"]';
	}

	get buttonLogin() {
		return '//button[normalize-space()="Войти"]';
	}
}

module.exports = AuthorizationModal;
