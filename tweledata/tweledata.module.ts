import { Module } from '@nestjs/common';
import { TweledataService } from './tweledata.service';
import { TweledataResolver } from './tweledata.resolver';

@Module({
  providers: [TweledataService, TweledataResolver]
})
export class TweledataModule {}
