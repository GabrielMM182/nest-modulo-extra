// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') // definir o endpoint
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get('list') // definir o caminho do endpoint ou definir apenas aqui
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id') // para receber a requisicao por um params
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT) // vamos definir qual o status code podendo definir dessa maneira ou passando o numero direto
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id') // para receber a requisicao por um params
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
