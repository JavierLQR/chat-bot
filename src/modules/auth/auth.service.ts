import { HttpStatus, Injectable } from '@nestjs/common'

import { PusherService } from '../pusher/pusher.service'
import { AuthPusherDto } from '../pusher/dto/auth-pusher.dto'
import ApiResponse from 'src/common/utils/response.client'

@Injectable()
export class AuthService {
  constructor(private readonly pusherService: PusherService) {}

  /**
   * autenticacion
   */
  public autentication(authPusherDto: AuthPusherDto) {
    const auth = this.pusherService.autentication(authPusherDto)

    return ApiResponse({
      message: 'Autentication for channel success',
      data: {
        auth,
      },
      service: PusherService.name,
      statusCode: HttpStatus.OK,
    })
  }
}
