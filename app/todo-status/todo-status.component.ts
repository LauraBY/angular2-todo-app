import { Component, Input } from '@angular/core';
import { TodoService } from '../shared/todo.service';


@Component({
    moduleId: module.id,
    selector: 'todo-status',
    templateUrl: 'todo-status.component.html',
    styleUrls: ['todo-status.component.css']
})


export class TodoStatusComponent {
  @Input() count: number;

  constructor(private todoService: TodoService) {
  }

  removeCompleted(){
    this.todoService.removeCompleted();
  }
}
