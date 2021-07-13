import { BadRequestException, GoneException, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config';

export const generateKey = (id: string): string => {
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
	try {
		return jwt.verify(token, JWT_SECRET);
	} catch (err) {
		switch (err.message) {
			case 'jwt must be provided':
				throw new BadRequestException('토큰이 전송되지 않았습니다');
			case 'jwt malformed':
			case 'invalid token':
			case 'invalid signature':
				throw new UnauthorizedException('위조된 토큰입니다');
			case 'jwt expired':
				throw new GoneException('토큰이 만료되었습니다');
			default:
				Logger.error(err);
				throw new InternalServerErrorException('다시 시도해 주세요');
		}
	}
}