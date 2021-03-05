import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { HomeComponent } from './home/home.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    TvshowsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
