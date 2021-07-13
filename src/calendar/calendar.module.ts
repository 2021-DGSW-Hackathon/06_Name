import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Calendar from 'src/models/Calendar';
import Category from 'src/models/Category';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Calendar, Category])],
  controllers: [CalendarController],
  providers: [CalendarService]
})
export class CalendarModule { }
