class CatalogPricesPage {
  constructor() {
    this.elements = {
      'Кнопка Купить': this.buttonOffer,
      'Кнопка Перейти в корзину': this.buttonInCart,
    };
  }

  get buttonOffer() {
    return '(//a[contains(text(),"Купить")])[2]';
  }

  get buttonInCart() {
    return '(//a[contains(text(),"Перейти в корзину")])';
  }
}

export default CatalogPricesPage;
