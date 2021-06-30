import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
// import { MOVIES } from ''
// import  { Movie } from ''


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
//  movies = MOVIES;
//  selectedMovie: Movie;
movies: any;
  constructor(private ms: MoviesService) {
   this.ms.getMovies$().subscribe(data=>this.movies=data)
  }

  ngOnInit(): void {
  }
// onSelect(movie:Movie): void{
//   this.selectedMovie = movie;
// }
//  goBack(): void{
//    this.movies
//  }
}
