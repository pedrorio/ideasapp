import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { IdeaEntity } from "./idea.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IdeaDTO } from "./idea.dto";
import { UserEntity } from "../user/user.entity";
import { IdeaRO } from "./idea.ro";
import { IdeaPolicy } from "./idea.policy";

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async findAllIdeas() {
    const ideas = await this.ideaRepository.find({ relations: ["author"] });

    if (!ideas) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return ideas.map(idea => IdeaRO.fromIdea(idea));
  }

  async findIdea(id: string) {
    const idea = await this.ideaRepository.findOne(id, { relations: ["author"] });

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return IdeaRO.fromIdea(idea);
  }

  async createIdea(userId: string, data: IdeaDTO) {
    const user = await this.userRepository.findOne(userId);
    const idea = await this.ideaRepository.create({ ...data, author: user });

    await this.ideaRepository.save(idea);
    return IdeaRO.fromIdea(idea);
  }

  async updateIdea(id: string, userId: string, data: Partial<IdeaDTO>) {
    const user = await this.userRepository.findOne(userId);
    let idea = await this.ideaRepository.findOne(id, { relations: ["author"] });

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    IdeaPolicy.authorize(user, idea);
    await this.ideaRepository.update(id, data);

    idea = await this.ideaRepository.findOne(id, {relations: ["author"]});
    return IdeaRO.fromIdea(idea);
  }

  async deleteIdea(id: string, userId: string) {
    const user = await this.userRepository.findOne(userId);
    const idea = await this.ideaRepository.findOne(id, { relations: ["author"] });

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    IdeaPolicy.authorize(user, idea);
    await this.ideaRepository.delete(id);

    return IdeaRO.fromIdea(idea);
  }

}
