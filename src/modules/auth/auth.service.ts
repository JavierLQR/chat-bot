import { Injectable } from '@nestjs/common'
import { PusherService } from '../pusher/pusher.service'

@Injectable()
export class AuthService {
  constructor(private readonly pusherService: PusherService) {}

  /**
   * autenticacion
   */
  public async autentication() {}
}
