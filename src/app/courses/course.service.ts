import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    getCourses(): String[] {
        return ["Course1", "Course2", "Course3", "Course4"];
    }
}