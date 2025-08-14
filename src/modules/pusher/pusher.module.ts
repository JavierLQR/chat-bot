import { Module } from '@nestjs/common'
import { PusherService } from './pusher.service'

@Module({
  controllers: [],
  providers: [PusherService],
})
export class PusherModule {}
