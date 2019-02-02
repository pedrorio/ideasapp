import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { compare, hash } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { IdeaEntity } from "../idea/idea.entity";
import { jwtSecret } from "../app.constants";
import { CommentEntity } from "../comment/comment.entity";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("user")
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  @ApiModelProperty()
  id: string;

  @CreateDateColumn()
  @ApiModelProperty()
  created: Date;

  @UpdateDateColumn()
  @ApiModelProperty()
  updated: Date;

  @Column({
    type: "text",
    unique: true
  })
  @ApiModelProperty()
  username: string;

  @Column("text")
  @ApiModelProperty()
  password: string;

  @OneToMany(type => IdeaEntity, idea => idea.author)
  @ApiModelProperty({
    type: [IdeaEntity]
  })
  ideas: IdeaEntity[];

  @ManyToMany(type => IdeaEntity, { cascade: true })
  @JoinTable()
  @ApiModelProperty({
    type: [IdeaEntity]
  })
  bookmarks: IdeaEntity[];

  @OneToMany(type => CommentEntity, comment => comment.author)
  @ApiModelProperty({
    type: [CommentEntity]
  })
  comments: CommentEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  async comparePassword(candidatePassword: string) {
    return await compare(candidatePassword, this.password);
  }

  get token() {
    const { id, username } = this;
    return jwt.sign({
        id, username
      },
      jwtSecret,
      { expiresIn: "7d" });
  }
}
