import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {TvshowsComponent} from './tvshows/tvshows.component';
import {TvshowComponent} from './tvshow/tvshow.component';
import {AboutComponent} from './about/about.component';

export const allAppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: 'tvshow/:id', component: TvshowComponent},
  {path: 'about', component: AboutComponent}
];
