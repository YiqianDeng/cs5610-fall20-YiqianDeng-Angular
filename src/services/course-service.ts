import {Injectable} from '@angular/core';


@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses`)
      .then(response => response.json())


  findCourseById = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses/${cid}`)
      .then(response => response.json())

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteCourse = (id) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses/${id}`, {
      method: 'DELETE',
    }).then(response => response.json())


  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())




}
