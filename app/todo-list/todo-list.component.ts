import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';


@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  @Input() count: number

  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit(){
      this.todos = this.todoService.getTodos();
      this.count = this.todoService.activeCounter();
  }

  delete(todo: Todo){
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo){
    this.todoService.toggleTodo(todo);
  }

  rename(todo: Todo){
    this.todoService.renameTodo(todo);
  }

  updateCount(){
    this.count = this.todoService.activeCounter();
  }
}
