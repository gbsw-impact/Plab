import { PickType } from '@nestjs/swagger';
import { ArticleEntity } from 'src/entities/article.entity';

export class CreateArticleDto extends PickType(ArticleEntity, [
  'title',
  'content',
  'recruitment',
  'teamMember',
  'position',
  'techStack',
  'proceed',
  'deadline',
  'link',
]) {}
