import { IGetObjectResult } from "../types/IGetObjectResult";

export const getArgs = (args: string[]): IGetObjectResult => {
	const res: IGetObjectResult = {}
	const [executor, file, ...rest] = args;

	rest.forEach((el: string, index: number, array: string[]) => {
		if (el.charAt(0) === '-') {
			if (index === array.length - 1) {
				res[el.substring(1)] = true;
			} else if (array[index + 1].charAt(0) !== '-') {
				res[el.substring(1)] = array[index + 1];
			} else {
				res[el.substring(1)] = true;
			}
		}
	});

	return res;
}