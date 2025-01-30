import chalk from "chalk"
import dedent from "dedent-js";
import { getIcon } from "./api.service.js";
import { convertMillibarIntoMmHg } from "../helpers/math.js";

export const printError = (error) => {
	console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
}

export const printSuccess = (message) => {
	console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
}

export const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] - сохранение города
		-h - вызов помощи
		-t [API_KEY] - сохранение токена
		`
	);
}

export const printWeather = (res) => {
	const icon = getIcon(res.weather[0].icon);

	console.log(
		dedent`${chalk.bgBlue(' SUCCESS ')} Погода в городе ${res.name}
		${icon} ${res.weather[0].description}
		Температура: ${res.main.temp}°C (ощущается как ${res.main.feels_like}°C)
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed} м/с
		Давление: ${convertMillibarIntoMmHg(res.main.pressure)} мм рт. ст.`
	);
}