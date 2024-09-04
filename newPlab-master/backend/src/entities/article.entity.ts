import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';
import { UserEntity } from './user.entity';
import { IsString } from 'class-validator';

@Entity('Article')
export class ArticleEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: false, nullable: false, length: 1000 })
  content: string;

  @IsString()
  @Column('varchar', { unique: false, nullable: false, length: 50 })
  title: string;

  @Column('bigint', { unique: false, nullable: false })
  userId: string;

  @Column('int', { default: 0, nullable: false })
  views: number;

  @Column('varchar', { length: 300, nullable: false })
  recruitment: string;

  @Column('varchar', { length: 50, nullable: false })
  techStack: string;

  @Column('int', { nullable: false })
  teamMember: number;

  @Column('varchar', { length: 50, nullable: false })
  position: string;

  @Column('varchar', { length: 300, nullable: false })
  proceed: string;

  @Column('date', { nullable: false })
  deadline: Date;

  @Column('varchar', { nullable: false })
  link: string;

  @ManyToOne(() => UserEntity, (user) => user.articles)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;
}
