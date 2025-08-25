import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { PineconeService } from './pinecone.service'
import { CreatePineconeIndexDto } from './dto/create-pinecone.dto'

@Controller({
  path: 'pinecone',
})
export class PineconeController {
  constructor(private readonly pineconeService: PineconeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createIndex(@Body() createPineconeIndexDto: CreatePineconeIndexDto) {
    return this.pineconeService.createIndex(createPineconeIndexDto)
  }
}
