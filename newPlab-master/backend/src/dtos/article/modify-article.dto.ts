import { PartialType, PickType } from '@nestjs/swagger';
import { ArticleEntity } from 'src/entities/article.entity';

export class modifyArticleDto extends PartialType(
  PickType(ArticleEntity, [
    'title',
    'content',
    'recruitment',
    'techStack',
    'teamMember',
    'position',
    'proceed',
    'deadline',
    'link',
  ]),
) {}
