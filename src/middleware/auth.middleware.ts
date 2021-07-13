import { CanActivate, ExecutionContext } from "@nestjs/common";
import HttpError from "src/lib/httpError";
import { JWT_SECRET } from 'src/config/config';
import * as tokenLib from 'src/lib/tokenLib';
import jwt from 'jsonwebtoken';
import User from "src/models/User";

export default class AuthGuard implements CanActivate {
	public canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest();

		const token = request.headers['authorization'];

		if (token === undefined) {
			throw new HttpError(401, '토큰이 전송되지 않았습니다.');
		}

		request.user = this.validateToken(token);
		return true;
	}

	public validateToken(token: string): User {
		try {
			const verify: User = tokenLib.verifyToken(token) as User;
			return verify;
		} catch (error) {
			switch (error.message) {
				// 토큰에 대한 오류를 판단합니다.
				case 'INVALID_TOKEN':
				case 'TOKEN_IS_ARRAY':
				case 'NO_USER':
					throw new HttpError(401, '유효하지 않은 토큰입니다.');

				case 'EXPIRED_TOKEN':
					throw new HttpError(410, '토큰이 만료되었습니다.');

				default:
					throw new HttpError(500, '서버 오류입니다.');
			}
		}
	}
}