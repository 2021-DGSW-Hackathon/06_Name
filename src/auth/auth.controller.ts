import { Body, Controller, Get, HttpCode, Post, Query, UseGuards } from '@nestjs/common';
import User from 'src/models/User';
import { AuthService } from './auth.service';
import SignInDto from './dto/signinDto';
import * as tokenLib from '../lib/tokenLib';
import SignUpDto from './dto/signupDto';
import { Token } from 'src/lib/tokenDeco';
import AuthGuard from 'src/middleware/auth.middleware';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
	) { }

	@Post('/signin')
	@HttpCode(200)
	async signIn(@Body() signInDto: SignInDto) {
		const user: User = await this.authService.getUser(signInDto);
		const token: string = await tokenLib.generateToken(user.id);

		return {
			status: 200,
			data: {
				token,
			},
			message: '로그인 성공'
		}
	}

	@Post('/signup')
	@HttpCode(200)
	async signUp(@Body() signUpDto: SignUpDto) {
		await this.authService.signUp(signUpDto);

		return {
			status: 200,
			message: '회원가입 성공'
		}
	}

	@Get('/check')
	@HttpCode(200)
	async checkId(@Query('userId') id: string) {
		await this.authService.getOne(id);

		return {
			status: 200,
			message: 'OK'
		}
	}

	@Get('/my')
	@UseGuards(new AuthGuard())
	@HttpCode(200)
	async myInfo(@Token() user: User) {
		const userInfo: User = await this.authService.getMyInfo(user);

		return {
			status: 200,
			data: {
				userInfo,
			},
			message: 'ok'
		}
	}
}
