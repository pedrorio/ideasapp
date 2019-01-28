import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { compare, hash } from "bcryptjs";
import { Exclude, Expose } from "class-transformer";
import * as jwt from "jsonwebtoken";
import { jwtSecret } from "../config/constants";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: "text",
    unique: true
  })
  username: string;

  @Exclude()
  @Column("text")
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  toResponseObject() {
    const { id, created, username } = this;
    return { id, created, username };
  }

  async comparePassword(candidatePassword: string) {
    return await compare(candidatePassword, this.password);
  }

  @Expose()
  private get token() {
    const { id, username } = this;
    return jwt.sign({
      id, username
    },
      jwtSecret,
      {expiresIn: "7d"});
  }
}
