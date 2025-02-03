export interface IGetWeatherResult {
	name: string;
	weather: IWeatherData[];
	main: IMainData;
	wind: IWindData
}

interface IWeatherData {
	description: string;
	icon: string;
}

interface IMainData {
	temp: number;
	feels_like: number;
	humidity: number;
	pressure: number;
}

interface IWindData {
	speed: number;
}