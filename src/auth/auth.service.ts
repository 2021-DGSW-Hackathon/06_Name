import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/User';
import { Repository } from 'typeorm';
import SignInDto from './dto/signinDto';
import SignUpDto from './dto/signupDto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) { }

	async getUser(signinDto: SignInDto): Promise<User> {
		const { id, pw } = signinDto;
		let user: User | undefined;

		try {
			user = await this.userRepository.createQueryBuilder()
				.where('id = :id', { id })
				.andWhere('pw = :pw', { pw })
				.getOne();
		} catch (err) {
			throw new InternalServerErrorException('서버 오류')
		}

		if (user === undefined) {
			throw new UnauthorizedException('id 또는 비밀번호가 틀렸습니다');
		}

		return user;
	}

	async getOne(userId: string): Promise<User> {
		const user: User | undefined = await this.userRepository.findOne({
			where: {
				id: userId,
			}
		});

		if (user !== undefined) {
			throw new UnauthorizedException('이미 존재하는 아이디');
		}

		return user;
	}

	async signUp(signupDto: SignUpDto): Promise<void> {
		let user: User | undefined;
		try {
			user = await this.userRepository.findOne({
				where: {
					id: signupDto.id,
					pw: signupDto.pw
				}
			});

			await this.userRepository.save(signupDto);
		} catch (err) {
			throw new InternalServerErrorException('서버 오류');
		}

		if (user !== undefined) {
			throw new UnauthorizedException('이미 존재하는 계정');
		}
	}
}
