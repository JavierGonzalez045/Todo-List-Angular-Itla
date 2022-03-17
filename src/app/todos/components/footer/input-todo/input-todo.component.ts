import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss'],
})
export class InputTodoComponent implements OnInit {
  text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';
  }

  constructor(private todoService: TodosService) {}

  ngOnInit() {}
}
