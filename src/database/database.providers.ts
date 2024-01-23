import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'hrm-rest-api',
      });
      sequelize.addModels([User]);
      await sequelize.sync({
        alter: true,
      });
      return sequelize;
    },
    autoLoadEntities: true,
  },
];
