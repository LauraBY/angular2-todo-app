import { Component, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../shared/todo.service';


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})


export class TodoFormComponent {
  @Output() add = new EventEmitter();

  title: string = '';

  constructor(private todoService: TodoService){
  }

  onSubmit(){
      this.todoService.createTodo(this.title);
      this.add.emit(null);
  }
}
