const axios = require('axios');
const apiConfig = require('../config/api-config');

async function getExchangeRate(currencyName) {
  const response = await axios.get(apiConfig.EXCHANGE_RATE);
  const exchangeRate = response.data.find((item) => item.Cur_Abbreviation === currencyName).Cur_OfficialRate;

  return exchangeRate.toFixed(4);
}

module.exports = {
  getExchangeRate,
};
