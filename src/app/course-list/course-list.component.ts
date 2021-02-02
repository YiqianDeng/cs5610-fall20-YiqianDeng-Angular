import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  newCourseTitle = '';
  courses = [];
  courseId = '';


  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;
    })

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }


}
