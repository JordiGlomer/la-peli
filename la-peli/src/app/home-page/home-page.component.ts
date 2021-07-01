import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies!: Array<Movie>;

  constructor(private movieService: MovieService) {
    this.movieService.getMovies$().subscribe(data=>this.movies=data)
    // moviesService.getMovies$().subscribe(data => console.log(data));

  }

  ngOnInit(): void {
  }

}



