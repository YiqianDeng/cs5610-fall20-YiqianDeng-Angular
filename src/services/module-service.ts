import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses/${courseId}/modules`)
      .then(response => response.json())

  createModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Module',
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/modules/${moduleId}`, {
      method: 'DELETE',
    }).then(response => response.json())

  updateModule = (module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yiqiandeng/modules/${module._id}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
