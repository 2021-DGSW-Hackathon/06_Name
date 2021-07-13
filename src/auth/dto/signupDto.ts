import { IsNotEmpty, IsString } from "class-validator";

export default class SignInDto {
	@IsNotEmpty()
	@IsString()
	id!: string;

	@IsNotEmpty()
	@IsString()
	pw!: string;

	@IsNotEmpty()
	@IsString()
	name!: string;

	@IsNotEmpty()
	@IsString()
	nickName!: string;
}