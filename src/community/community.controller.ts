import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CommunityService } from './community.service';
import AuthGuard, * as authMiddleware from 'src/middleware/auth.middleware';
import PostEntity from 'src/models/Post';

@Controller('community')
export class CommunityController {
	constructor(
		private readonly comService: CommunityService,
	) { }

	@Get('/')
	async getPosts() {
		const post: PostEntity[] = await this.comService.getPosts();

		return {
			status: 200,
			data: {
				post,
			},
			message: '글 조회 성공'
		}
	}
}
