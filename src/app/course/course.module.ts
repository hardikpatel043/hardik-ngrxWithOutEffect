import { CommonModule } from "@angular/common";
import { CourseService } from "./services/course.service";
import { CoursesListComponent } from "./component/courses-list/courses-list.component";
import { CreateCourseComponent } from "./component/create-course/create-course.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { courseReducer } from "./store/course.reducers";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [CoursesListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    StoreModule.forFeature("courses", courseReducer)
  ],
  providers: [CourseService],
  bootstrap: [],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule {}
