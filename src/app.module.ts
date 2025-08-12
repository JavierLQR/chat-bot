import { Module } from '@nestjs/common'
import { GlobalsModules } from './config/globals.module'

@Module({
  imports: [GlobalsModules],
})
export class AppModule {}
