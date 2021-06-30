import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'movie-page', component: MoviePageComponent},
  {path: 'plantilla', component: PlantillaComponent},
  {path:'**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
