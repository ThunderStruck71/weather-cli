import { access, writeFile, readFile } from 'fs/promises';
import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

export const saveKeyValue = async (key, value) => {
	let data = {};

	if (await isFileExists(filePath)) {
		const file = await readFile(filePath);
		data = JSON.parse(file);
	}

	data[key] = value;
	await writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
	if (await isFileExists(filePath)) {
		const file = await readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}

	return undefined;
}

const isFileExists = async (path) => {
	try {
		await promises.access(path, fs.constants.W_OK | fs.constants.R_OK);
		return true;
	} catch (err) {
		return false;
	}
}