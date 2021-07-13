import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from 'src/models/Post';
import User from 'src/models/User';
import Category from 'src/models/Category';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, User, Category]),
  ],
  providers: [CommunityService],
  controllers: [CommunityController]
})
export class CommunityModule { }
