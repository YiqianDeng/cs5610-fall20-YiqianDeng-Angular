import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/module-service';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  newCourseTitle = '';
  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  selectedCourse = {
    title: ''
  };
  selectedModule = {
    title: ''
  };
  selectedLesson = {
    title: ''
  };

  createCourse = (title) =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))
  // this.courses.push({_id: (new Date()).getTime() + '', title: title, editing: false})

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  selectCourse = (course) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course._id).then(modules => this.modules = modules);
  }

  createModuleForCourse = (selectedCourse) =>
    this.moduleService.createModuleForCourse(selectedCourse._id).then(module => this.modules.push(module))


  deleteModule = (module) =>
    this.moduleService.deleteModule(module._id)
      .then(status => this.modules = this.modules.filter(m => m._id !== module._id))
  // this.modules = this.modules.filter(m => m._id !== module._id)

  saveModule = (module) => {
    module.editing = false;
    this.moduleService.updateModule(module)
      .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m));
  }

  editModule = (module) =>
    module.editing = true

  selectModule = (module) => {
    this.selectedModule = module;
    this.lessonService.findLessonForModule(module._id).then(lessons => this.lessons = lessons);
  }

  deleteLesson = (lesson) =>
    this.lessonService.deleteLesson(lesson._id)
      .then(status => this.lessons = this.lessons.filter(l => l._id !== lesson._id))

  editLesson = (lesson) =>
    lesson.editing = true

  saveLesson = (lesson) => {
    lesson.editing = false;
    this.lessonService.updateLesson(lesson)
      .then(status => this.lessons = this.lessons.map(l => l._id === lesson._id ? lesson : l));
  }

  createLessonForModule = (selectedModule) =>
    this.lessonService.createLessonForModule(selectedModule._id)
      .then(lesson => this.lessons.push(lesson))

  selectLesson = (lesson) => {
    this.selectedLesson = lesson;
  }


  constructor(private courseService: CourseService,
              private moduleService: ModuleService,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }

}
