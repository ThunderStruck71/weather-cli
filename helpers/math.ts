export const convertMillibarIntoMmHg = (pressure: number): number => {
	const num = pressure * 0.75;
	return Math.round(num * 100) / 100;
}