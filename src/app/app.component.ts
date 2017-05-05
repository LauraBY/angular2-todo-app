import { Component } from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';
import { TodoService } from './shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'ToDo List';
    count: number;

    constructor(private todoService: TodoService) {
      this.count = 0;
    }

    addTodoItem() {
      this.count = this.todoService.activeCounter();
    }
}
