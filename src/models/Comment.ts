import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import Post from "./Post";
import User from "./User";

@Entity('comment')
export default class Comment {
	@PrimaryGeneratedColumn()
	idx!: number;

	@Column()
	content!: string;

	@JoinColumn({ name: 'fk_user_id' })
	@ManyToOne(type => User, {
		onDelete: 'SET NULL',
		onUpdate: 'CASCADE'
	})
	user!: User | null;

	@RelationId((comment: Comment) => comment.user)
	userId!: string;

	@JoinColumn({ name: 'fk_post_idx' })
	@ManyToOne(type => Post, {
		onDelete: 'CASCADE',
	})
	post!: Post;
}