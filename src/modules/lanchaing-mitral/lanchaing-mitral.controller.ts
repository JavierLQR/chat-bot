import { Controller } from '@nestjs/common'
import { LanchaingMitralService } from './lanchaing-mitral.service'

@Controller('lanchaing-mitral')
export class LanchaingMitralController {
  constructor(
    private readonly lanchaingMitralService: LanchaingMitralService,
  ) {}
}
