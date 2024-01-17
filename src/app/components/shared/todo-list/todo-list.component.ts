import { Component } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoCounterComponent } from '../todo-counter/todo-counter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface IToDo {
  content: string
  isDone: boolean
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DateComponent, TodoComponent, TodoCounterComponent, FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: IToDo[] = []
  newToDo: string = ''

  addTodo(newToDo: string) {
    if (!this.newToDo.length) return
    this.todos.push({
      content: newToDo,
      isDone: false
    });

    this.newToDo = ''
  }

  removeTodo(todoToRemove: IToDo) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
  }

  unComplatedCount() {
    return this.todos.filter(todo => !todo.isDone).length;
  }

  complatedTasks() {
    return this.todos.filter(todo => todo.isDone).length;
  }

  removeFinishedTaks() {
    this.todos = this.todos.filter(todo => !todo.isDone);
  }

  markAllDone() {
    this.todos = this.todos.map(todo => {
      todo.isDone = true
      return todo
    })
  }

}
