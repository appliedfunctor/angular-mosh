import { Component } from '@angular/core';
import { CourseService } from './course.service'

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    providers: [CourseService]
})
export class CoursesComponent {
    title: String = "Courses Page Title";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}