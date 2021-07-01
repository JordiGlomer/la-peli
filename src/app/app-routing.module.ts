import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'movie/editar',component:FormMovieComponent},
  {path:'movie/:id',component:MovieComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
