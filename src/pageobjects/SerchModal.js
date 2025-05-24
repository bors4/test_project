class SearchModal {
    constructor() {
        this.elements = {
            'чекбокс К сравнению': '//input[contains(@data-bind, "compare")]',
            'Ничего не найдено': '//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]',//'//div[@id="search-page"]',//'//div[@class="search__bar"]//div/following-sibling::div[contains(text(), "Ничего не найдено")]',
            'закрыть окно поиска': '//*/span[@class="search__close"]',
        }
    }

    async closeSearchModal (){
        await $(this.elements["закрыть окно поиска"]).click()
    }
}

module.exports = SearchModal