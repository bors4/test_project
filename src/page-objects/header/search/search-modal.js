const {switchToIFrame, switchToParent} = require('../../../utils/frame-utils');

const SiteUrls = require('../../../config/site-urls');

class SearchModal {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Чекбокс К сравнению': SearchModal.checkboxToCompare,
      'Текст Ничего не найдено': SearchModal.textNoResults,
      'Закрыть окно поиска': SearchModal.closeSearchButton,
      'Поле поиска': SearchModal.inputSearch,
    };
  }

  static get checkboxToCompare() {
    return '//input[contains(@data-bind, "compare")]';
  }

  static get textNoResults() {
    return '//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]';
  }

  static get closeSearchButton() {
    return '//*/span[@class="search__close"]';
  }

  static get inputSearch() {
    return '//*/input[@placeholder="Поиск"]';
  }

  static async switchContextTo(sourceContext) {
    if (sourceContext !== 'родительский') {
      await switchToIFrame(sourceContext);
    } else {
      await switchToParent();
    }
  }
}

module.exports = SearchModal;
