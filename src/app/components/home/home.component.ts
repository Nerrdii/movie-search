import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [SearchBarComponent, NgIf, NgFor, MovieItemComponent, AsyncPipe]
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  onSearch(searchTerm: string) {
    this.movies$ = this.movieService.searchMovies(searchTerm);
  }
}
