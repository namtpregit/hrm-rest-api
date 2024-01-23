import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  first322: string;

  @Column
  lastNams2222: string;

  @Column({ defaultValue: true })
  isActive2: boolean;
}
