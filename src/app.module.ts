import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommunityModule } from './community/community.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { LikeModule } from './like/like.module';
import { CalendarModule } from './calendar/calendar.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, CommunityModule, SubscribeModule, LikeModule, CalendarModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
