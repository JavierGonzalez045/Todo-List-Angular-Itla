import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  constructor(private todoService: TodosService) {}

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  public handleSearch(event): void {
    this.onSearch.emit(event.target.value);
  }
}
