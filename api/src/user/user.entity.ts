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

@Entity("user")
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({
    type: "text",
    unique: true
  })
  username: string;

  @Column("text")
  password: string;

  @OneToMany(type => IdeaEntity, idea => idea.author)
  ideas: IdeaEntity[];

  @ManyToMany(type => IdeaEntity, { cascade: true })
  @JoinTable()
  bookmarks: IdeaEntity[];

  @OneToMany(type => CommentEntity, comment => comment.author)
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
