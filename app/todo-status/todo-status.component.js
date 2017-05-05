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
var todo_service_1 = require('../shared/todo.service');
var TodoStatusComponent = (function () {
    function TodoStatusComponent(todoService) {
        this.todoService = todoService;
    }
    TodoStatusComponent.prototype.removeCompleted = function () {
        this.todoService.removeCompleted();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TodoStatusComponent.prototype, "count", void 0);
    TodoStatusComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-status',
            templateUrl: 'todo-status.component.html',
            styleUrls: ['todo-status.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoStatusComponent);
    return TodoStatusComponent;
}());
exports.TodoStatusComponent = TodoStatusComponent;
//# sourceMappingURL=todo-status.component.js.map