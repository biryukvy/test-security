import { Module } from '@nestjs/common';
import { SsjsInjectionsController } from './ssjs-injections.controller';

@Module({
  controllers: [SsjsInjectionsController]
})
export class SsjsInjectionsModule {}
