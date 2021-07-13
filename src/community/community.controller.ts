import { Body, Controller, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CommunityService } from './community.service';
import AuthGuard, * as authMiddleware from 'src/middleware/auth.middleware';
import PostEntity from 'src/models/Post';

@Controller('community')
export class CommunityController {
	constructor(
		private readonly comService: CommunityService,
	) { }

	@Get('/')
	@HttpCode(200)
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

	@Get('/search')
	@HttpCode(200)
	async searchPosts(@Query('title') title: string) {
		const post: PostEntity[] = await this.comService.searchPost(title);

		return {
			status: 200,
			data: {
				post,
			},
			message: '글 검색 성공'
		}
	}

	@Get('/category/:idx')
	@HttpCode(200)
	async getPostsByCategory(@Param('idx') categoryIdx: number) {
		const post: PostEntity[] = await this.comService.getPostsByCategory(categoryIdx);

		return {
			status: 200,
			data: {
				post,
			},
			message: '글 조회 성공(by category)'
		}
	}

	@Post('/')
	@UseGuards(new AuthGuard())
	@HttpCode(200)
	async addPost(@Body() )
}
