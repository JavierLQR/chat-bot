import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthPusherDto } from '../pusher/dto/auth-pusher.dto'

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/pusher/autentication')
  autentication(@Body() authPusherDto: AuthPusherDto) {
    return this.authService.autentication(authPusherDto)
  }
}
