import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movie$ = this.route.params.pipe(
      switchMap((params) => this.movieService.getMovie(+params['id']))
    );
  }

  getPosterPath(movie: Movie) {
    return this.movieService.getPosterPath(movie);
  }

  goBack() {
    this.location.back();
  }
}
