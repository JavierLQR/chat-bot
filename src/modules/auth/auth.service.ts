import { Injectable } from '@nestjs/common'
import { PusherService } from '../pusher/pusher.service'
import { AuthPusherDto } from '../pusher/dto/auth-pusher.dto'

@Injectable()
export class AuthService {
  constructor(private readonly pusherService: PusherService) {}

  /**
   * autenticacion
   */
  public autentication(authPusherDto: AuthPusherDto) {
    return this.pusherService.autentication(authPusherDto)
  }
}
