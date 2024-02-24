import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  mail_address: string;

  @Column
  password: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
