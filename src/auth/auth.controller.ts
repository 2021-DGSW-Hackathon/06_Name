import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import User from 'src/models/User';
import { AuthService } from './auth.service';
import SignInDto from './dto/signinDto';
import * as tokenLib from '../lib/tokenLib';
import returnLib from '../lib/return';
import SignUpDto from './dto/signupDto';

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

		return returnLib(200, '로그인 성공', { token: token });
	}

	@Post('/signup')
	@HttpCode(200)
	async signUp(@Body() signUpDto: SignUpDto) {
		await this.authService.signUp(signUpDto);

		return returnLib(200, '회원가입 성공');
	}
}
