const { switchToIFrame, switchToParent } = require("../utils/frameUtils");
const { setExecuteTimeout } = require("../utils/pageUtils");
class SearchModal {
	constructor() {
		this.elements = {
			"чекбокс К сравнению": '//input[contains(@data-bind, "compare")]',
			"Ничего не найдено": '//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]', //'//div[@id="search-page"]',//'//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]',
			"закрыть окно поиска": '//*/span[@class="search__close"]',
			"поле поиска": '//*/input[@placeholder="Поиск"]',
		};
	}

	async switchContextTo(sourceContext) {
		if (sourceContext != "родительский") {
			await switchToIFrame(sourceContext);
		} else {
			await switchToParent();
		}
	}
}

module.exports = SearchModal;
