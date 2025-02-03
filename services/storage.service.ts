import { access, writeFile, readFile, constants } from 'fs/promises';
import { homedir } from 'os';
import { join } from 'path';
import { IGetObjectResult } from '../types/IGetObjectResult';

const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
	city: 'city',
	token: 'token'
}

export const saveKeyValue = async (key: string, value: string | boolean): Promise<void> => {
	let data: IGetObjectResult = {};

	if (await isFileExists(filePath)) {
		const file = await readFile(filePath);
		data = JSON.parse(file.toString());
	}

	data[key] = value;
	await writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key: string): Promise<string | undefined> => {
	if (await isFileExists(filePath)) {
		const file = await readFile(filePath);
		const data = JSON.parse(file.toString());
		return data[key];
	}

	return undefined;
}

const isFileExists = async (path: string): Promise<boolean> => {
	try {
		await access(path, constants.W_OK | constants.R_OK);
		return true;
	} catch (err) {
		return false;
	}
}