import { Module } from '@nestjs/common'
import { GlobalsModules } from './config/globals.module'
import { PusherModule } from './modules/pusher/pusher.module'
import { AuthModule } from './modules/auth/auth.module'
import { PineconeModule } from './modules/pinecone/pinecone.module'
import { ProductsModule } from './modules/products/products.module'
import { LanchaingMitralModule } from './modules/lanchaing-mitral/lanchaing-mitral.module'

@Module({
  imports: [
    GlobalsModules,
    PusherModule,
    AuthModule,
    PineconeModule,
    ProductsModule,
    LanchaingMitralModule,
  ],
})
export class AppModule {}
