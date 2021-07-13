import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from 'src/models/Post';
import { Repository } from 'typeorm';
import CommunityRepository from './community.repository';

@Injectable()
export class CommunityService {
	constructor(
		@InjectRepository(Post)
		private readonly comRepository: Repository<Post>,
		@InjectRepository(Post)
		private readonly communityRepository: CommunityRepository,
	) { }

	async getPosts(): Promise<Post[]> {
		return this.communityRepository.getPosts();
	}

	async searchPost(title: string): Promise<Post[]> {
		return this.communityRepository.searchPost(title);
	}
}
