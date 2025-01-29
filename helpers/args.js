export const getArgs = (args) => {
	const res = {}
	const [executor, file, ...rest] = args;

	rest.forEach((el, index, array) => {
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