import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from './entities/user.entity';
import { LabEntity } from './entities/lab.entity';
import { ArticleEntity } from './entities/article.entity';
import { UserAuthority } from './entities/user-authority.entity';
import { LabInformationEntity } from './entities/lab-info.entity';

dotenv.config();

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [
    UserEntity,
    LabEntity,
    ArticleEntity,
    UserAuthority,
    LabInformationEntity,
  ],
  synchronize: false,
  logging: true,
});
