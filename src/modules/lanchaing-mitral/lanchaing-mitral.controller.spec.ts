import { Test, TestingModule } from '@nestjs/testing'
import { LanchaingMitralController } from './lanchaing-mitral.controller'
import { LanchaingMitralService } from './lanchaing-mitral.service'

describe('LanchaingMitralController', () => {
  let controller: LanchaingMitralController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanchaingMitralController],
      providers: [LanchaingMitralService],
    }).compile()

    controller = module.get<LanchaingMitralController>(
      LanchaingMitralController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
