import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies$(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(environment.API_URL);
  }
  getMovie$(id:string): Observable<Movie>{
    return this.http.get<Movie>(environment.API_URL.concat(id));
  }
}
