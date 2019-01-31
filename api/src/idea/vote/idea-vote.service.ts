import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";
import { IdeaVote } from "./idea-vote.enum";
import { IdeaRO } from "../idea.ro";

@Injectable()
export class IdeaVoteService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async voteIdea(id: string, userId: string, vote: IdeaVote) {
    const idea = await this.ideaRepository.findOne(
      id,
      { relations: ["author", "upvotes", "downvotes"] }
    );

    if (!idea) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    const user = await this.userRepository.findOne(userId);

    const oppositeVote = vote === IdeaVote.UP ? IdeaVote.DOWN : IdeaVote.UP;

    const voteCount = idea[vote].filter(voter => voter.id === user.id).length;
    const oppositeVoteCount = idea[oppositeVote].filter(voter => voter.id === user.id).length;

    if (!oppositeVoteCount || !voteCount) {
      throw new HttpException("Unable to cast vote", HttpStatus.BAD_REQUEST);
    }

    if (oppositeVoteCount === voteCount) {

      idea[vote].push(user);
      await this.ideaRepository.save(idea);

    } else {

      idea[oppositeVote] = idea[oppositeVote].filter(voter => voter.id !== user.id);
      idea[vote] = idea[vote].filter(voter => voter.id !== user.id);
      await this.ideaRepository.save(idea);

    }

    return IdeaRO.fromIdea(idea);
  }

}
