import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as Pusher from 'pusher'

@Injectable()
export class PusherService {
  private readonly pusher: Pusher

  constructor(private readonly configService: ConfigService) {
    this.pusher = new Pusher({
      appId: this.configService.getOrThrow<string>('PUSHER_APP_ID'),
      key: this.configService.getOrThrow<string>('PUSHER_KEY'),
      secret: this.configService.getOrThrow<string>('PUSHER_SECRET'),
      cluster: this.configService.getOrThrow<string>('PUSHER_CLUSTER'),
      useTLS: true,
    })
  }

  /**
   * autenticacion
   */
  public async autentication() {}
}
