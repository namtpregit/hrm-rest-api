import { AutoMap } from '@automapper/classes';
import {
  // AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserRole } from './user-role.enum';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @AutoMap()
  @Column(DataType.BIGINT)
  id!: number;

  @AutoMap()
  @Column(DataType.STRING(255))
  first_name: string;

  @Column(DataType.STRING(255))
  @AutoMap()
  last_name: string;

  @Column(DataType.STRING(255))
  @AutoMap()
  email: string;

  @Column(DataType.STRING(255))
  @AutoMap()
  password: string;

  @Column(DataType.ENUM(UserRole.COMPANY_ADMIN))
  @AutoMap()
  role: UserRole;

  @CreatedAt
  @AutoMap()
  created_at: Date;

  @UpdatedAt
  @AutoMap()
  updated_at: Date;

  // @Column(DataType.BIGINT)
  // @AllowNull
  // @AutoMap()
  // company_id: number;

  // @ManyToOne(() => Company, (company) => company.users)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;
}
