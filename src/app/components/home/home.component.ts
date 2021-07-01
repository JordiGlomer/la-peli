import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies!:Array<Movie>;
  constructor(public movieService: MovieService) {
    this.movieService.getMovies$().subscribe(data => this.movies = data);
   }

  ngOnInit(): void {
  }

}
