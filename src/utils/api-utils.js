import axios from 'axios';
import {EXCHANGE_RATE} from '../config/api-config.js';

/**
 * Получить курс валюты по её аббревиатуре
 * @param {string} currencyName
 * @returns {Promise<string>}
 */
export async function getExchangeRate(currencyName) {
  const response = await axios.get(EXCHANGE_RATE);
  const exchangeRate = response.data.find((item) => item.Cur_Abbreviation === currencyName)?.Cur_OfficialRate;

  return exchangeRate ? exchangeRate.toFixed(4) : null;
}
