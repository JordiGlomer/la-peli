import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { switchMap } from 'rxjs/operators'
import { Movie } from 'src/app/shared/model/movie'


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movie!:Movie;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) {

  };

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.movieService.getMovie$(params.get('id') as string)))
        .subscribe(movie => this.movie = movie )
  }
  edit(){
    this.router.navigate(['movie/editar']);
// onSelect(movie:Movie): void{
//   this.selectedMovie = movie;
// }
//  goBack(): void{
//    this.movies
//  }
}
}
