import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules: any[] = [];
  moduleId: '';
  courseId: '';

  deleteModule = (module) =>
    this.moduleService.deleteModule(module._id)
      .then(status => this.modules = this.modules.filter(m => m._id !== module._id))
  // this.modules = this.modules.filter(m => m._id !== module._id)

  saveModule = (module) => {
    module.editing = false;
    this.moduleService.updateModule(module)
      .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m));
  }

  createModuleForCourse = () =>
    this.moduleService.createModuleForCourse(this.courseId).then(m => this.modules.push(m))


  editModule = (module) =>
    module.editing = true

  constructor(private activeRoute: ActivatedRoute,
              private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const courseId = params.cid;
      this.moduleId = params.mid;
      if (typeof courseId !== 'undefined') {
        this.courseId = courseId;
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
