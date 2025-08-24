class CleverPage {
  constructor() {
    this.elements = {
      'Кнопка Оформить карту': CleverPage.buttonApplyCard,
    };
  }

  static get buttonApplyCard() {
    return '//header//a[.="Оформить карту"]';
  }
}

module.exports = CleverPage;
