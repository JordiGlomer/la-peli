import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies: any;
  // pelis = '../movies.json';
  constructor(private moviesService: MoviesService) {
    moviesService.getMovies$().subscribe(data => console.log(data));

  }

  ngOnInit(): void {
  }

}



