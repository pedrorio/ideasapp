import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { IdeaService } from "./idea.service";
import { IdeaDTO } from "./idea.dto";

@Controller("idea")
export class IdeaController {
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
  createIdea(@Body() data: IdeaDTO) {
    return this.ideaService.createIdea(data);
  }
  
  @Patch(":id")
  updateIdea(@Param("id") id: string, @Body() data: Partial<IdeaDTO>) {
    return this.ideaService.updateIdea(id, data);
  }
  
  @Delete(":id")
  deleteIdea(@Param("id") id: string) {
    return this.ideaService.deleteIdea(id);
  }
  
}
