import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path:'movie/editar',component:FormMovieComponent},
  {path: 'movie-page/:id', component: MoviePageComponent},
  {path:'**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
