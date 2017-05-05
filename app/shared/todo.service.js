"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_1 = require('./data');
var todo_1 = require('./todo');
var TodoService = (function () {
    function TodoService() {
        this.todos = data_1.todos;
    }
    TodoService.prototype.getTodos = function () {
        this.todos = JSON.parse(localStorage.getItem('todos-Burenkova') || '[]');
        return this.todos;
    };
    TodoService.prototype.createTodo = function (title) {
        title = title.trim();
        if (title.length == 0) {
            return;
        }
        var todo = new todo_1.Todo(title);
        this.todos.push(todo);
        this.updateLocalStorage();
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.updateLocalStorage();
        }
    };
    TodoService.prototype.toggleTodo = function (todo) {
        todo.completed = !todo.completed;
        this.updateLocalStorage();
    };
    TodoService.prototype.renameTodo = function (todo) {
        todo.title = todo.title.trim();
        if (todo.title.length == 0) {
            this.deleteTodo(todo);
            return;
        }
        this.updateLocalStorage();
    };
    TodoService.prototype.updateLocalStorage = function () {
        localStorage.setItem('todos-Burenkova', JSON.stringify(this.todos));
    };
    TodoService.prototype.activeCounter = function () {
        var counter = 0;
        this.todos.forEach(function (todo) {
            if (!todo.completed) {
                counter++;
            }
        });
        return counter;
    };
    TodoService.prototype.removeCompleted = function () {
        this.todos = this.todos.filter(function (todo) {
            if (todo.completed == true) {
                return false;
            }
            return true;
        });
        this.updateLocalStorage();
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map