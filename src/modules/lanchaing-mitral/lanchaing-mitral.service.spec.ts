import { Test, TestingModule } from '@nestjs/testing'
import { LanchaingMitralService } from './lanchaing-mitral.service'

describe('LanchaingMitralService', () => {
  let service: LanchaingMitralService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanchaingMitralService],
    }).compile()

    service = module.get<LanchaingMitralService>(LanchaingMitralService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
