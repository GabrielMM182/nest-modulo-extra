import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'curso para aprender nest',
      price: 100,
      tags: ['node', 'nest', 'js', 'ts'],
      avaliable: true,
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );

    if (!course) {
      throw new HttpException(`Couse ID ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCouse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCouse >= 0) {
      this.courses.splice(indexCouse, 1);
    }
  }
}
