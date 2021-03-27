import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MoviesComponent} from './movies/movies.component';
import {TvshowsComponent} from './tvshows/tvshows.component';
import {AboutComponent} from './about/about.component';

import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { MovieComponent } from './movie/movie.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    TvshowsComponent,
    AboutComponent,
    MovieComponent,
    TvshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
