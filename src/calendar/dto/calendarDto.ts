import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class CalendarDto {
	@IsNotEmpty()
	@IsString()
	content!: string;

	@IsNotEmpty()
	@IsDateString()
	date!: Date;

	@IsNotEmpty()
	@IsNumber()
	categoryIdx!: number;
}