import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import Category from "./Category";

@Entity('detail_category')
export default class DetailCategory {
	@PrimaryGeneratedColumn()
	idx!: number;

	@Column()
	name!: string;

	@JoinColumn({ name: 'fk_category_idx' })
	@ManyToOne(type => Category, {
		onDelete: 'CASCADE'
	})
	category!: Category;

	@RelationId((detailCategory: DetailCategory) => detailCategory.category)
	categoryIdx!: number;
}