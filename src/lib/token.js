import * as jwt from 'jsonwebtoken';

export const decodedToken = () => {
	const SToken = sessionStorage.getItem('authorization');
	if (SToken) {
		return jwt.decode(SToken);
	}
}