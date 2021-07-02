import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchMovie(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getMovies$(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(environment.API_URL);
  }
  getMovie$(id:string): Observable<Movie>{
    return this.http.get<Movie>(environment.API_URL.concat(id));
  }
}
