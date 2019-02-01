import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { IdeaRO } from "../idea.ro";
import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class IdeaNewestService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async findAllNewestIdeas(page: number = 1) {
    const ideas = await this.ideaRepository.find({
      relations: ["author", "upvotes", "downvotes", "comments"],
      take: 25,
      skip: 25 * (page - 1),
      order: { created: "DESC" }
    });

    return ideas.map(idea => IdeaRO.fromIdea(idea));
  }

}
