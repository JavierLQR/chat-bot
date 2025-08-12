// globals.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule as Environment } from '@nestjs/config'
import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [
    Environment.forRoot({
      isGlobal: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class GlobalsModules {}
