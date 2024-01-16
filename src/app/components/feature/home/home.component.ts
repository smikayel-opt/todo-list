import { Component } from '@angular/core';
import { DateComponent } from '../../shared/date/date.component';
import { TodoCounterComponent } from '../../shared/todo-counter/todo-counter.component';
import { TodoComponent } from '../../shared/todo/todo.component';
import { TodoListComponent } from '../../shared/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
