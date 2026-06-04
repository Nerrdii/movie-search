import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    imports: [FormsModule]
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.search.emit(this.searchTerm);
  }
}
