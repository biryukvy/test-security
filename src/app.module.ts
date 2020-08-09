import { Module } from '@nestjs/common';
import { SsjsInjectionsModule } from './ssjs-injections/ssjs-injections.module';

@Module({
  imports: [SsjsInjectionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
