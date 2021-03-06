import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { CourseService } from "../../services/course.service";
import { CourseState } from "../../store/course.reducers";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getAllCourses } from "../../store/course.selectors";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor(
    private courseService: CourseService,
    private store: Store<CourseState>
  ) {
    this.courseService.getAllCourses().subscribe();
  }

  ngOnInit() {
    this.courses$ = this.store.select(getAllCourses);
  }

  deleteCourse(courseId: string) {}

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
