import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";

import { UserEntity } from "../user/user.entity";
import { IdeaEntity } from "../idea/idea.entity";

@Entity("comment")
export class CommentEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column("text")
  comment: string;

  @ManyToOne(type => UserEntity, user => user.comments)
  author: UserEntity;

  @ManyToOne(type => IdeaEntity, idea => idea.comments)
  idea: IdeaEntity;
}
