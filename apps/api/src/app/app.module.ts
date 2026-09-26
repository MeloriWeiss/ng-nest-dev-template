import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@sl/api/auth';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@sl/api/users';
import { DatabaseMainModule } from '@sl/api/database-main';
import { ApiLogger, validateEnv } from '@sl/api/shared';
import { AccountsModule } from '@sl/api/accounts';
import { MapsModule } from '@sl/api/maps';
import { TexturesModule } from '@sl/api/texture-packs';
import { ForumModule } from '@sl/api/forum';
import { HealthController } from './health.controller';
import { AdminModule } from '@sl/api/admin';

@Module({
  imports: [
    ApiAuthModule,
    DatabaseMainModule,
    UsersModule,
    AccountsModule,
    MapsModule,
    TexturesModule,
    ForumModule,
    AdminModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      validate: validateEnv,
    }),
  ],
  controllers: [HealthController],
  providers: [ApiLogger],
})
export class AppModule {}
