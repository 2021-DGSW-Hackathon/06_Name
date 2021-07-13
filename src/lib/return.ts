export default (status: number, message: string, data?: object | string | number) => {
	return {
		status,
		message,
		data,
	};
};