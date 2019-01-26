import { Injectable } from "@nestjs/common";
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
    return await this.ideaRepository.find();
  }
  
  async findIdea(id: string) {
    return await this.ideaRepository.findOne(id);
  }
  
  async createIdea(data: IdeaDTO) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }
  
  async updateIdea(id: string, data: Partial<IdeaDTO>) {
    await this.ideaRepository.update(id, data);
    return await this.ideaRepository.findOne(id);
  }
  
  async deleteIdea(id: string) {
    const idea = await this.ideaRepository.findOne(id);
    await this.ideaRepository.delete(id);
    return idea;
  }
  
}
