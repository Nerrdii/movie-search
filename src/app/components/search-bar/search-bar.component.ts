import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.search.emit(this.searchTerm);
  }
}
