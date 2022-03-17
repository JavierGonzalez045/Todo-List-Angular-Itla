import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  constructor(private todoService: TodosService) {}

  public handleSearching(val: string) {
    if (!val.length) {
      this.todoService.isFiltering$.next(false);
      return;
    }
    this.todoService.isFiltering$.next(true);
    let filteredList = this.todoService.todos.filter((todo) =>
      todo.text.includes(val)
    );
    this.todoService.filteredTodos$.next(filteredList);
  }
}
