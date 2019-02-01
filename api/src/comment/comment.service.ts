import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { CommentEntity } from "./comment.entity";
import { UserEntity } from "./../user/user.entity";
import { CommentRO } from "./comment.ro";
import { CommentDTO } from "./comment.dto";
import { CommentPolicy } from "./comment.policy";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async findAllComments() {
    const comments = await this.commentRepository.find({ relations: ["author", "upvotes", "downvotes"] });

    if (!comments) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return comments.map(comment => CommentRO.fromComment(comment));
  }

  async findComment(id: string) {
    const comment = await this.commentRepository.findOne(id, { relations: ["author", "upvotes", "downvotes"] });

    if (!comment) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return CommentRO.fromComment(comment);
  }

  async createComment(userId: string, data: CommentDTO) {
    const user = await this.userRepository.findOne(userId);
    const comment = await this.commentRepository.create({ ...data, author: user });

    await this.commentRepository.save(comment);
    return CommentRO.fromComment(comment);
  }

  async updateComment(id: string, userId: string, data: Partial<CommentDTO>) {
    const user = await this.userRepository.findOne(userId);
    let comment = await this.commentRepository.findOne(id, { relations: ["author", "upvotes", "downvotes"] });

    if (!comment) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    CommentPolicy.authorize(user, comment);
    await this.commentRepository.update(id, data);

    comment = await this.commentRepository.findOne(id, { relations: ["author", "upvotes", "downvotes"] });
    return CommentRO.fromComment(comment);
  }

  async deleteComment(id: string, userId: string) {
    const user = await this.userRepository.findOne(userId);
    const comment = await this.commentRepository.findOne(id, { relations: ["author", "upvotes", "downvotes"] });

    if (!comment) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    CommentPolicy.authorize(user, comment);
    await this.commentRepository.delete(id);

    return CommentRO.fromComment(comment);
  }

}
