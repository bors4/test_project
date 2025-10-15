/**
 * CURRENCY_INFO содержит URL API запроса для получения по валюте передаваемой в виде параметров.
 * Например, https://api.nbrb.by/exrates/currencies[/{cur_id}], где cur_id внутренний ID валюты.
 * Запрос к "https://api.nbrb.by/exrates/currencies" возвращает массив объектов с информацией по всем валютам
 * EXCHANGE_RATE содержит URL API запроса для получения курсов валют на определённую дату.
 * Например, https://api.nbrb.by/exrates/rates/451 (451 это cur_id) возвращает курс EUR на сегодня.
 * Запрос к "https://api.nbrb.by/exrates/rates/" возвращает курсы всех валют на сегодня
 *
 * Подробнее об API по ссылке https://www.nbrb.by/apihelp/exrates
 */

/**
 * URL для получения информации о валютах
 */
export const CURRENCY_INFO = 'https://api.nbrb.by/exrates/currencies';

/**
 * URL для получения курсов валют
 */
export const EXCHANGE_RATE = 'https://api.nbrb.by/exrates/rates?periodicity=0';
