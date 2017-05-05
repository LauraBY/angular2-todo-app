import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';


@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})


export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() rename = new EventEmitter();

  editing: boolean = false;
  // title: string = '';

  constructor(private todoService: TodoService) {
  }

  onToggle(){
    this.toggle.emit(this.todo);
    this.update.emit(null);
  }

  onDelete(){
    this.delete.emit(this.todo);
    this.update.emit(null);
  }

  edit() {
    this.editing = true;
  }

  save() {
    this.rename.emit(this.todo);
    this.update.emit(null);
    this.editing = false;
  }
}
