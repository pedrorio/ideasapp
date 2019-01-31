import { Injectable } from "@nestjs/common";

import { IdeaVote } from "../idea-vote.enum";
import { IdeaVoteService } from "../idea-vote.service";

@Injectable()
export class IdeaVoteUpvoteService {
  constructor(
    private ideaVoteService: IdeaVoteService
  ) {
  }

  async upvoteIdea(id: string, userId: string) {
   return await this.ideaVoteService.voteIdea(id, userId, IdeaVote.UP);
  }

}
