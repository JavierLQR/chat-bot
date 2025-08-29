import { PartialType } from '@nestjs/mapped-types'
import { CreateLanchaingMitralDto } from './create-lanchaing-mitral.dto'

export class UpdateLanchaingMitralDto extends PartialType(
  CreateLanchaingMitralDto,
) {}
