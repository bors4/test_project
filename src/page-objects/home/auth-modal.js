class AuthorizationModal {
  constructor() {
    this.elements = {
      'Поле Логин': this.inputLogin,
      'Поле Пароль': this.inputPassword,
      'Кнопка Войти': this.buttonLogin,
    };
  }

  static get inputLogin() {
    return '//input[@placeholder="Ник или e-mail"]';
  }

  static get inputPassword() {
    return '//input[@placeholder="Пароль"]';
  }

  static get buttonLogin() {
    return '//button[normalize-space()="Войти"]';
  }
}

module.exports = AuthorizationModal;
