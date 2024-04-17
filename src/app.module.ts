import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';
// import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';
// import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    UsersModule,
    // SequelizeModule.forRootAsync({
    //   useFactory: () => ({
    //     dialect: 'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: '',
    //     database: 'hrm-rest-api',
    //     models: [User],
    //     autoLoadModels: true,
    //     synchronize: true,
    //   }),
    // }),
    DatabaseModule,
    AuthModule,
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'hrm-rest-api',
    //   models: [User],
    //   // autoLoadModels: true,
    //   synchronize: true,
    //   autoLoadModels: true,
    // }),
  ],
  providers: [AppService],
})
export class AppModule {}
