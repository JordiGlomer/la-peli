import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
// pelisArr= '../movies.json';

  constructor(private http: HttpClient) { }

  getMovies$(): Observable<any>{

    return this.http.get(environment.url_movies);

  }
  getMovie(){

  }
}
