import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses', component: CourseTableComponent},
  // {path: 'grid/courses', component: CourseGridComponent},
  {path: 'table/courses/:cid/modules', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
