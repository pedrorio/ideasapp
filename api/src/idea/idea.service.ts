import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { IdeaEntity } from "./idea.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IdeaDTO } from "./idea.dto";

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>
  ) {
  }

  async findAllIdeas() {
    const ideas = await this.ideaRepository.find();

    if (!ideas) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return ideas;
  }

  async findIdea(id: string) {
    const idea = await this.ideaRepository.findOne(id);

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return idea;
  }

  async createIdea(data: IdeaDTO) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async updateIdea(id: string, data: Partial<IdeaDTO>) {
    let idea = await this.ideaRepository.findOne(id);

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    await this.ideaRepository.update(id, data);

    idea = await this.ideaRepository.findOne(id);
    return idea;
  }

  async deleteIdea(id: string) {
    const idea = await this.ideaRepository.findOne(id);

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    await this.ideaRepository.delete(id);
    return idea;
  }

}
