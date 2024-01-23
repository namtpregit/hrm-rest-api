import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';
// import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';
// import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
