import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IToDo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() toDo?: IToDo;
  @Output() removeEvent = new EventEmitter();
  isEditable: boolean = false

  showEdit() {
    this.isEditable = !this.isEditable
  }

  removeTodo() {
    this.removeEvent.emit(this.toDo);
  }

  markAsComplated() {
    if (!this.toDo) return
    this.toDo.isDone = !this.toDo?.isDone
  }

}
