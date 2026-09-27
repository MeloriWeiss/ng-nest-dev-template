import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@sl/api/auth';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@sl/api/users';
import { DatabaseMainModule } from '@sl/api/database-main';
import { ApiLogger, validateEnv } from '@sl/api/shared';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ApiAuthModule,
    DatabaseMainModule,
    UsersModule,
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
