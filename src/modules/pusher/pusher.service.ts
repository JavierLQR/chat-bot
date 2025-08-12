import { Injectable } from '@nestjs/common'
import { CreatePusherDto } from './dto/create-pusher.dto'
import { UpdatePusherDto } from './dto/update-pusher.dto'

@Injectable()
export class PusherService {
  create(createPusherDto: CreatePusherDto) {
    return 'This action adds a new pusher'
  }

  findAll() {
    return `This action returns all pusher`
  }

  findOne(id: number) {
    return `This action returns a #${id} pusher`
  }

  update(id: number, updatePusherDto: UpdatePusherDto) {
    return `This action updates a #${id} pusher`
  }

  remove(id: number) {
    return `This action removes a #${id} pusher`
  }
}
