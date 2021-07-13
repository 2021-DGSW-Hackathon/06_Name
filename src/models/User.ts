import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export default class User {
	@PrimaryColumn()
	id!: string;

	@Column()
	pw!: string;

	@Column()
	name!: string;

	@Column()
	nickName!: string;
}