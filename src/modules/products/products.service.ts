import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { PineconeService } from '../pinecone/pinecone.service'
import { LanchaingMitralService } from '../lanchaing-mitral/lanchaing-mitral.service'

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly pineneconeService: PineconeService,
    private readonly lanchaingMitralService: LanchaingMitralService,
  ) {}

  /**
   * insertDataProductsFoods
   */
  public async insertDataProductsFoods() {
    const store = await this.PineconeStore.fromExistingIndex(
      this.lanchaingMitralService.MistralAIEmbeddings,
      {
        namespace: 'products-foods',
        maxRetries: 3,
        maxConcurrency: 5,
      },
    )

  }

  public get PineconeStore() {
    return this.pineneconeService.PineconeStore
  }
}
