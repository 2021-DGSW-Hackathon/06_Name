import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import Category from "./Category";
import User from "./User";

@Entity('post')
export default class Post {
    @PrimaryGeneratedColumn()
    idx!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;

    @JoinColumn({ name: 'fk_user_id' })
    @ManyToOne(type => User, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    user!: User | null;

    @RelationId((post: Post) => post.user)
    userId!: string;

    @JoinColumn({ name: 'fk_category_idx' })
    @ManyToOne(type => Category, {
        onDelete: 'CASCADE'
    })
    category!: Category;

    @RelationId((post: Post) => post.category)
    categoryIdx!: number;
}