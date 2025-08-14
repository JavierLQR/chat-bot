import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PusherModule } from '../pusher/pusher.module'

@Module({
  imports: [PusherModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
