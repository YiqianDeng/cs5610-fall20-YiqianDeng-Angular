import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../services/lesson-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons = [];
  moduleId: '';
  lessonId: '';

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

  createLessonForModule = () =>
    this.lessonService.createLessonForModule(this.moduleId)
      .then(lesson => this.lessons.push(lesson))


  constructor(private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const moduleId = params.mid;
      this.lessonId = params.lid;
      if (typeof moduleId !== 'undefined') {
        this.moduleId = moduleId;
        this.lessonService.findLessonForModule(moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });

  }

}
