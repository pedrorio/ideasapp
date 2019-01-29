import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { compare, hash } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { jwtSecret } from "../config/constants";
import { IdeaEntity } from "../idea/idea.entity";

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(type => IdeaEntity, idea => idea.author)
  ideas: IdeaEntity[];

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
