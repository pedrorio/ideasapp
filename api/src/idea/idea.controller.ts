import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UsePipes } from "@nestjs/common";

import { IdeaService } from "./idea.service";
import { IdeaDTO } from "./idea.dto";
import { ValidatorPipe } from "../shared/validator.pipe";

@Controller("ideas")
export class IdeaController {
  private logger = new Logger("IdeaController");
  constructor(private ideaService: IdeaService) {
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
  createIdea(@Body() data: IdeaDTO) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.createIdea(data);
  }

  @Patch(":id")
  @UsePipes(ValidatorPipe)
  updateIdea(@Param("id") id: string, @Body() data: Partial<IdeaDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.updateIdea(id, data);
  }

  @Delete(":id")
  deleteIdea(@Param("id") id: string) {
    return this.ideaService.deleteIdea(id);
  }

}
