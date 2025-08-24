import { Controller } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller({
  path: 'products',
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
}
