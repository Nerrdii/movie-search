import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly BASE_API = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('query', query);

    return this.http.get<Movie[]>(`${this.BASE_API}/search/movie`, {
      params
    });
  }
}
