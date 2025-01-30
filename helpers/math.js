export const convertMillibarIntoMmHg = (pressure) => {
	const num = pressure * 0.75;
	return Math.round(num * 100) / 100;
}