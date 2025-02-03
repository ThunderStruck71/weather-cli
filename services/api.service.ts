import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

export const getIcon = (icon: string): string => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
		default:
			return '';
	}
};

export const getWeather = async (city: string): Promise<any> => {
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