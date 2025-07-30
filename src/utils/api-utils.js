const axios = require('axios');
const apiConfig = require('../config/api-config');

export async function getExchangeRate(currencyName, onDate) {
	const response = await axios.get(apiConfig.EXCHANGE_RATE);
	const exchangeRate = response.data.find((item) => {
		return item.Cur_Abbreviation == currencyName;
	}).Cur_OfficialRate;
	return exchangeRate.toFixed(4);
}
