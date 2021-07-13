import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class PostDto {
	@IsNotEmpty()
	@IsString()
	title!: string;

	@IsNotEmpty()
	@IsString()
	content!: string;

	@IsNotEmpty()
	@IsNumber()
	categoryIdx!: number;
}