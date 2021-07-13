import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [AuthModule, CommunityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
