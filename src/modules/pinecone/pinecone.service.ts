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

  /**
   * Constructor for the PineconeService class.
   * @param configService - The ConfigService used to retrieve configuration values.
   */
  constructor(private readonly configService: ConfigService) {
    this.pinecone = new Pinecone({
      apiKey: this.configService.getOrThrow<string>('PINECONE_API_KEY'),
      maxRetries: 3,
    })
  }

  /**
   * createIndex
   * Creates a new Pinecone index with the provided specifications.
   * @param createPineconeIndexDto - Data Transfer Object containing index specifications.
   * @returns A promise that resolves to an ApiResponse indicating success or failure.
   * @throws InternalServerErrorException if the index creation fails.
   *
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
    this.logger.verbose('Creating Pinecone index...', createPineconeIndexDto)
    try {
      // await this.pinecone.createIndex({
      //   name,
      //   vectorType,
      //   dimension,
      //   metric,
      //   spec,
      //   deletionProtection,
      //   tags,
      // })

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
