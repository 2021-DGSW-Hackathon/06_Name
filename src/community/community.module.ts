import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from 'src/models/Post';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [CommunityService],
  controllers: [CommunityController]
})
export class CommunityModule { }
