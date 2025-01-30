import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

export const getWeather = async (city) => {
	const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

	if (!token) {
		throw new Error('Не задан ключ API, установите его, используя команду -t [API_TOKEN]');
	}

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric'
		}
	});

	return data;
}