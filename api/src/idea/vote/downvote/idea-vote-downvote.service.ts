import { Injectable } from "@nestjs/common";
import { IdeaVoteService } from "../idea-vote.service";
import { IdeaVote } from "../idea-vote.enum";

@Injectable()
export class IdeaVoteDownvoteService {
  constructor(
    private ideaVoteService: IdeaVoteService
  ) {
  }

  async downvoteIdea(id: string, userId: string) {
   return await this.ideaVoteService.voteIdea(id, userId, IdeaVote.DOWN);
  }

}
