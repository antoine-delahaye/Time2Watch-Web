import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoviesComponent} from './movies/movies.component';
import {TvshowsComponent} from './tvshows/tvshows.component';
import {AboutComponent} from './about/about.component';

export const allAppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: 'about', component: AboutComponent}
];
