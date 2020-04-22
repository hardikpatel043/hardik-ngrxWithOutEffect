import { Course } from "./../model/course.model";
import { CourseState } from "../store/course.reducers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { coursesLoaded } from "../store/course.actions";
import { tap } from "rxjs/operators";

@Injectable()
export class CourseService {
  http: HttpClient;

  constructor(http: HttpClient, private store: Store<CourseState>) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      tap((result: any) => {
        this.store.dispatch(coursesLoaded({ courses: result }));
      })
    );
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>("/api/courses", course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete("/api/courses/" + courseId);
  }

  updateCourse(
    courseId: string | number,
    changes: Partial<Course>
  ): Observable<any> {
    return this.http.put("/api/courses/" + courseId, changes);
  }
}
