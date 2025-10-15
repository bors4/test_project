import {switchToIFrame, switchToParent} from '../../../utils/frame-utils.js';

class SearchModal {
  constructor() {
    this.elements = {
      'Чекбокс К сравнению': this.checkboxToCompare,
      'Текст Ничего не найдено': this.textNoResults,
      'Закрыть окно поиска': this.closeSearchButton,
      'Поле поиска': this.inputSearch,
    };
  }

  get checkboxToCompare() {
    return '//input[contains(@data-bind, "compare")]';
  }

  get textNoResults() {
    return '//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]';
  }

  get closeSearchButton() {
    return '//*/span[@class="search__close"]';
  }

  get inputSearch() {
    return '//*/input[@placeholder="Поиск"]';
  }

  async switchContextTo(sourceContext) {
    if (sourceContext === 'родительский') {
      await switchToParent();
    } else {
      await switchToIFrame(sourceContext);
    }
  }
}

export default SearchModal;
