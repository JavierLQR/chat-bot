import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { LanchaingMitralService } from './lanchaing-mitral.service'
import { CreateLanchaingMitralDto } from './dto/create-lanchaing-mitral.dto'
import { UpdateLanchaingMitralDto } from './dto/update-lanchaing-mitral.dto'

@Controller('lanchaing-mitral')
export class LanchaingMitralController {
  constructor(
    private readonly lanchaingMitralService: LanchaingMitralService,
  ) {}

  @Post()
  create(@Body() createLanchaingMitralDto: CreateLanchaingMitralDto) {
    return this.lanchaingMitralService.create(createLanchaingMitralDto)
  }

  @Get()
  findAll() {
    return this.lanchaingMitralService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lanchaingMitralService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanchaingMitralDto: UpdateLanchaingMitralDto,
  ) {
    return this.lanchaingMitralService.update(+id, updateLanchaingMitralDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lanchaingMitralService.remove(+id)
  }
}
