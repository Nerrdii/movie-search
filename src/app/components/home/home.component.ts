import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../models/movie.model';
import { Response } from '../../models/response.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  onSearch(searchTerm: string) {
    this.movieService
      .searchMovies(searchTerm)
      .subscribe((res: Response) => (this.movies = res.results));
  }
}
