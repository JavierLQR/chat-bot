import { Module } from '@nestjs/common'
import { PusherService } from './pusher.service'

@Module({
  controllers: [],
  providers: [PusherService],
  exports: [PusherService],
})
export class PusherModule {}
