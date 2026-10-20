import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink, DatePipe]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  getPosterPath(): string {
    return this.movieService.getPosterPath(this.movie);
  }
}
