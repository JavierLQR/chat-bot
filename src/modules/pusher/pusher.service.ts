import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as Pusher from 'pusher'

import { AuthPusherDto } from './dto/auth-pusher.dto'
import { TriggerDto } from './entities/pusher.entity'

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

  private typeChannel(channel: string): 'presence' | 'private' | 'public' {
    const recordChannel: Record<string, 'presence' | 'private' | 'public'> = {
      'presence-': 'presence',
      'private-': 'private',
      'public-': 'public',
    }
    return recordChannel[channel.split('-')[0] + '-'] || 'public'
  }

  /**
   * trigger event to pusher
   */
  public async trigger(triggerDto: TriggerDto) {}

  /**
   * autenticacion
   */
  public autentication(authPusherDto: AuthPusherDto): string {
    const { channel, socketId } = authPusherDto
    const { auth } = this.pusher.authorizeChannel(socketId, channel)
    return auth
  }
}
