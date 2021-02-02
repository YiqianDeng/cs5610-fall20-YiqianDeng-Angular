import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/modules/${moduleId}/lessons`)
      .then(response => response.json())

  createLessonForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Lesson',
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/lessons/${lessonId}`, {
      method: 'DELETE',
    }).then(response => response.json())

  updateLesson = (lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/lessons/${lesson._id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
