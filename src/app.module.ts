import { Module } from '@nestjs/common'
import { GlobalsModules } from './config/globals.module'
import { PusherModule } from './modules/pusher/pusher.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [GlobalsModules, PusherModule, AuthModule],
})
export class AppModule {}
