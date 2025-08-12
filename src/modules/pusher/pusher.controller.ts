import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { PusherService } from './pusher.service'
import { CreatePusherDto } from './dto/create-pusher.dto'
import { UpdatePusherDto } from './dto/update-pusher.dto'

@Controller('pusher')
export class PusherController {
  constructor(private readonly pusherService: PusherService) {}

  @Post()
  create(@Body() createPusherDto: CreatePusherDto) {
    return this.pusherService.create(createPusherDto)
  }

  @Get()
  findAll() {
    return this.pusherService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pusherService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePusherDto: UpdatePusherDto) {
    return this.pusherService.update(+id, updatePusherDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pusherService.remove(+id)
  }
}
