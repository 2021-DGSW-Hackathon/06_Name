import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from 'src/models/Post';
import { Repository } from 'typeorm';

@Injectable()
export class CommunityService {
	constructor(
		@InjectRepository(Post)
		private readonly comRepository: Repository<Post>
	) { }

	public async getPosts(): Promise<Post[]> {
		const posts: Post[] = await this.comRepository.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.category', 'category')
			.getMany();

		return posts;
	}

	public async searchPost(word: string): Promise<Post[]> {
		const posts: Post[] = await this.comRepository.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.category', 'category')
			.where('title LIKE :word', { word: `%${word}%` })
			.getMany();

		return posts;
	}

	public async getPostsByCategory(categoryIdx: number): Promise<Post[]> {
		const posts: Post[] = await this.comRepository.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.category', 'category')
			.where('fk_category_idx = :categoryIdx', { categoryIdx })
			.getMany();

		return posts;
	}
}
