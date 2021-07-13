import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Calendar from 'src/models/Calendar';
import Category from 'src/models/Category';
import { Repository } from 'typeorm';
import CalendarDto from './dto/calendarDto';

@Injectable()
export class CalendarService {
	constructor(
		@InjectRepository(Calendar)
		private readonly calRepository: Repository<Calendar>,
		@InjectRepository(Category)
		private readonly cateRepository: Repository<Category>
	) { }

	public async getCalendars(): Promise<Calendar[]> {
		const calendar: Calendar[] = await this.calRepository.createQueryBuilder()
			.where('date > LAST_DAY(NOW() - interval 1 month) AND date <= LAST_DAY(NOW())')
			.getMany();

		return calendar;
	}

	public async addCalendar(calendarDto: CalendarDto): Promise<void> {
		const isCategory: Category = await this.cateRepository.findOne({
			where: {
				idx: calendarDto.categoryIdx,
			}
		});

		const calendar: Calendar = new Calendar()
		calendar.content = calendarDto.content;
		calendar.date = calendarDto.date;
		calendar.category = isCategory;

		await this.calRepository.save(calendar);
	}
}