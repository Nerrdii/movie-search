import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  onSearch(searchTerm: string) {
    this.movies = this.movieService.searchMovies(searchTerm);
    this.movies.subscribe(movies => console.log(movies));
  }
}
