import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async createArticle(
    title: string,
    content: string,
    userId: string,
    recruitment: string,
    techStack: string,
    teamMember: number,
    position: string,
    proceed: string,
    deadline: Date,
    link: string,
  ) {
    const article = await this.articleRepository.save({
      title: title,
      content: content,
      userId: userId,
      recruitment: recruitment,
      techStack: techStack,
      teamMember: teamMember,
      position: position,
      proceed: proceed,
      deadline: deadline,
      link: link,
    });

    return article;
  }

  async getArticle(articleId: string) {
    const article = await this.articleRepository.findOne({
      where: {
        id: articleId,
      },
    });

    if (article) {
      article.views += 1;
      await this.articleRepository.save(article);
    } else {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }

    return article;
  }

  async getAllArticles() {
    return await this.articleRepository.find();
  }

  async modifyArticle(
    userId: string,
    articleId: string,
    title: string,
    content: string,
    recruitment: string,
    techStack: string,
    teamMember: number,
    position: string,
    proceed: string,
    deadline: Date,
    link: string,
  ) {
    const article = await this.articleRepository.findOne({
      where: {
        id: articleId,
        userId: userId,
      },
    });

    if (!article) {
      throw new UnauthorizedException('본인의 게시글이 아닙니다.');
    }

    const updateResult = await this.articleRepository.update(
      { id: articleId },
      {
        title: title,
        content: content,
        recruitment: recruitment,
        techStack: techStack,
        teamMember: teamMember,
        position: position,
        proceed: proceed,
        deadline: deadline,
        link: link,
      },
    );

    return { affected: updateResult?.affected };
  }

  async removeArticle(userId: string, articleId: string) {
    const deleteResult = await this.articleRepository.delete({
      id: articleId,
      userId: userId,
    });

    return { affected: deleteResult?.affected };
  }

  async getPopularArticles() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const popularArticles = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.createdAt > :oneWeekAgo', { oneWeekAgo })
      .orderBy('article.views', 'DESC')
      .take(10)
      .getMany();

    return popularArticles;
  }
}
