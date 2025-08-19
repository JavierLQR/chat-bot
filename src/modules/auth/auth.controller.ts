import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthPusherDto } from '../pusher/dto/auth-pusher.dto'

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/pusher/autentication')
  @HttpCode(HttpStatus.OK)
  autentication(@Body() authPusherDto: AuthPusherDto) {
    return this.authService.autentication(authPusherDto)
  }
}
