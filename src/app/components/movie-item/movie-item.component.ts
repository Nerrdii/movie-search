import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  getPosterPath(): string {
    return this.movieService.getPosterPath(this.movie);
  }
}
