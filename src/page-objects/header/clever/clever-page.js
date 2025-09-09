class CleverPage {
  constructor() {
    this.elements = {
      'Кнопка Оформить карту': this.buttonApplyCard,
    };
  }

  get buttonApplyCard() {
    return '//header//a[.="Оформить карту"]';
  }
}

module.exports = CleverPage;
