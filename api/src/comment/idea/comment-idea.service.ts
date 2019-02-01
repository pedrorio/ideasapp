import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { CommentEntity } from "../comment.entity";
import { CommentRO } from "../comment.ro";
import { IdeaEntity } from "../../idea/idea.entity";

@Injectable()
export class CommentIdeaService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>
  ) {
  }

  async findAllCommentsByIdea(id: string) {
    const idea = await this.ideaRepository.findOne(id);

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    const comments = await this.commentRepository.find({ where: { idea }, relations: ["author", "idea"] });

    return comments.map(comment => CommentRO.fromComment(comment));
  }

}