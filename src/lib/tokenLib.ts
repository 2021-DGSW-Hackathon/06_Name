import { BadRequestException, GoneException, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config';

export const generateToken = (id: string): string => {
	const payload = {
		id,
	};

	const options: SignOptions = {
		expiresIn: '7d',
	};

	return jwt.sign(payload, JWT_SECRET, options);
};

export const decodedToken = (token: string) => {
	return jwt.decode(token);
}

export const verifyToken = (token: string) => {
	return jwt.verify(token, JWT_SECRET);
};