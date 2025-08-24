import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
}
