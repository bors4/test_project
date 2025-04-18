Feature: Переход на страницу каталога

    Как пользователь я могу перейти на страницу каталога
    Scenario Outline: Переход с главной страницы на страницу каталога
    Given ссылка на сайта
    And я перехожу по ссылке
    Then я вижу лого сайта
    When я нажимаю на ссылку "Каталог" в заголовке
    Then я вижу заголовок раздела "<catalog_title>"
    And  я вижу заголовок раздела "<sub_catalog_title>"
    Examples:
        | catalog_title | sub_catalog_title  |
        | Каталог       | Популярные разделы |