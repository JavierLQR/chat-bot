import { IsNotEmpty, IsString } from 'class-validator'

export class AuthPusherDto {
  @IsString()
  @IsNotEmpty()
  socketId: string

  @IsNotEmpty()
  @IsString()
  channel: string
}
