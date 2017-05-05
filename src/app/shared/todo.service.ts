import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { todos } from './data';
import { Todo } from './todo';


@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
      this.todos = JSON.parse(localStorage.getItem('todos-Burenkova') || '[]');
      return this.todos;
  }

  createTodo(title: string){
      title = title.trim();

      if (title.length == 0){
        return;
      }

      let todo = new Todo(title);
      this.todos.push(todo);
      this.updateLocalStorage();
  }

  deleteTodo(todo: Todo){
      let index = this.todos.indexOf(todo);

      if (index > -1){
        this.todos.splice(index, 1);
        this.updateLocalStorage();
      }
  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed;
    this.updateLocalStorage();
  }

  renameTodo(todo: Todo){
    todo.title = todo.title.trim();
    if (todo.title.length == 0) {
      this.deleteTodo(todo);
      return;
    }

    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('todos-Burenkova', JSON.stringify(this.todos));
  }

  activeCounter(){
    let counter = 0;
    this.todos.forEach((todo) => {
      if (!todo.completed) {
        counter ++;
      }
    })
    return counter;
  }

  removeCompleted(){
    this.todos = this.todos.filter((todo) => {
      if (todo.completed == true) {
        return false;
      }
      return true;
    });

    this.updateLocalStorage();
  }
}
