import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/model/movie';
import { MovieService } from 'src/app/shared/services/movie.service';
import { switchMap } from "rxjs/operators";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie!:Movie;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => 
    //   this.movie$ = this.movieService.getMovie$(params.get('id') as string)      );

    this.route.paramMap.pipe(
      switchMap(params => this.movieService.getMovie$(params.get('id') as string)))
        .subscribe(movie => this.movie = movie )
  }

  edit(){
      this.router.navigate(['movie/editar']);
  }

}
