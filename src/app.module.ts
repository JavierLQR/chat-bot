import { Module } from '@nestjs/common'
import { GlobalsModules } from './config/globals.module'
import { PusherModule } from './modules/pusher/pusher.module'
import { AuthModule } from './modules/auth/auth.module'
import { PineconeModule } from './modules/pinecone/pinecone.module'

@Module({
  imports: [GlobalsModules, PusherModule, AuthModule, PineconeModule],
})
export class AppModule {}
