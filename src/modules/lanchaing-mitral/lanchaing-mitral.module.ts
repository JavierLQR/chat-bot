import { Module } from '@nestjs/common'
import { LanchaingMitralService } from './lanchaing-mitral.service'
import { LanchaingMitralController } from './lanchaing-mitral.controller'

@Module({
  controllers: [LanchaingMitralController],
  providers: [LanchaingMitralService],
})
export class LanchaingMitralModule {}
