import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards, UsePipes } from "@nestjs/common";

import { IdeaService } from "./idea.service";
import { IdeaDTO } from "./idea.dto";
import { ValidatorPipe } from "../shared/validator.pipe";
import { AuthGuard } from "../shared/auth.guard";
import { User } from "../user/user.decorator";

@Controller("ideas")
export class IdeaController {
  private logger = new Logger("IdeaController");

  constructor(private ideaService: IdeaService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`IDEA ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Get()
  findAllIdeas() {
    return this.ideaService.findAllIdeas();
  }

  @Get(":id")
  findIdea(@Param("id") id: string) {
    return this.ideaService.findIdea(id);
  }

  @Post()
  @UsePipes(ValidatorPipe)
  @UseGuards(AuthGuard)
  createIdea(
    @User("id") userId: string,
    @Body() data: IdeaDTO
  ) {
    this.logData({ userId, data });
    return this.ideaService.createIdea(userId, data);
  }

  @Patch(":id")
  @UsePipes(ValidatorPipe)
  @UseGuards(AuthGuard)
  updateIdea(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() data: Partial<IdeaDTO>
  ) {
    this.logData({ id, userId, data });
    return this.ideaService.updateIdea(id, userId, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  deleteIdea(
    @Param("id") id: string,
    @User("id") userId: string,
  ) {
    this.logData({ id, userId });
    return this.ideaService.deleteIdea(id, userId);
  }

}
