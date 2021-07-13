import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export default class Category {
	@PrimaryGeneratedColumn()
	idx!: number;

	@Column()
	name!: string;
}