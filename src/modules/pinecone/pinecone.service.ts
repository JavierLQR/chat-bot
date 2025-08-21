import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Pinecone } from '@pinecone-database/pinecone'
import ApiResponse from 'src/common/utils/response.client'
import { CreatePineconeIndexDto } from './dto/create-pinecone.dto'

@Injectable()
export class PineconeService {
  private readonly pinecone: Pinecone
  private readonly logger: Logger = new Logger(PineconeService.name)

  constructor(private readonly configService: ConfigService) {
    this.pinecone = new Pinecone({
      apiKey: this.configService.getOrThrow<string>('PINECONE_API_KEY'),
      maxRetries: 3,
    })
  }

  /**
   * createIndex
   */
  public async createIndex(createPineconeIndexDto: CreatePineconeIndexDto) {
    const {
      name,
      deletionProtection,
      dimension,
      metric,
      spec,
      tags,
      vectorType,
    } = createPineconeIndexDto
    this.logger.verbose('Creating Pinecone index...')
    try {
      await this.pinecone.createIndex({
        name,
        vectorType,
        dimension,
        metric,
        spec,
        deletionProtection,
        tags,
      })

      this.logger.verbose('Pinecone index created successfully')

      return ApiResponse({
        message: 'Pinecone index created successfully',
        service: PineconeService.name,
        statusCode: HttpStatus.OK,
      })
    } catch (error) {
      this.logger.error('Error creating Pinecone index:', error)
      throw new InternalServerErrorException(
        'Failed to create Pinecone index',
        {
          cause: error,
          description: (error as Error).message,
        },
      )
    }
  }
}
