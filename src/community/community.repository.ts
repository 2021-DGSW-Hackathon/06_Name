import Post from "src/models/Post";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Post)
export default class CommunityRepository extends Repository<Post>  {
	public getPosts(): Promise<Post[]> {
		return this.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.category', 'category')
			.getMany();
	}

	public searchPost(title: string): Promise<Post[]> {
		return this.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.category', 'category')
			.where('title like :title', { title: `%${title}%` })
			.getMany();
	}
}