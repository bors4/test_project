class CatalogPricesPage {
  constructor() {
    this.elements = {
      'Кнопка Купить': this.buttonOffer,
      'Кнопка Перейти в корзину': this.buttonInCart,
    };
  }

  get buttonOffer() {
    return '//div[contains(@class, "offers-list__part_action_specific")]//a[contains(text(), "Купить")]';
  }

  get buttonInCart() {
    return '(//a[contains(text(),"Перейти в корзину")])';
  }
}

export default CatalogPricesPage;
