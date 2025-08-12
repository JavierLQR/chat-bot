import { Module } from '@nestjs/common'
import { GlobalsModules } from './config/globals.module'
import { PusherModule } from './modules/pusher/pusher.module'

@Module({
  imports: [GlobalsModules, PusherModule],
})
export class AppModule {}
