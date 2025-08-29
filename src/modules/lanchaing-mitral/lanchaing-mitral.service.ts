import { MistralAIEmbeddings } from '@langchain/mistralai'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class LanchaingMitralService {
  private readonly mistralAIEmbeddings: MistralAIEmbeddings

  constructor(private readonly configService: ConfigService) {
    this.mistralAIEmbeddings = new MistralAIEmbeddings({
      apiKey: this.configService.getOrThrow<string>('MISTRAL_API_KEY'),
      maxConcurrency: 5,
      maxRetries: 3,
    })
  }

  public get MistralAIEmbeddings() {
    return this.mistralAIEmbeddings
  }
}
