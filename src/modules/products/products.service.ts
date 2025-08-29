import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { PineconeService } from '../pinecone/pinecone.service'

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly pineneconeService: PineconeService,
  ) {}

  /**
   * insertDataProductsFoods
   */
  public insertDataProductsFoods() {}

  public get PineconeStore() {
    return this.pineneconeService.PineconeStore
  }
}
