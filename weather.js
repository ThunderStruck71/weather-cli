#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Не передан токен');
		return;
	}

	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен сохранен');
	} catch (err) {
		printError(err.message);
	}
}

const getForecast = async () => {
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(city);
		console.log(weather);
	} catch (err) {
		if (err?.response?.status === 404) {
			printError('Неверно указан город');
		} else if (err?.response?.status === 401) {
			printError('Неверно указан токен');
		} else {
			printError(err.message);
		}
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	
	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		// Сохранить город
	}
	if (args.t) {
		return saveToken(args.t);
	}
	
	return getForecast();
}

initCLI();