import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesService } from './movies.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from './plantilla/plantilla.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviePageComponent,
    PlantillaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' })
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
