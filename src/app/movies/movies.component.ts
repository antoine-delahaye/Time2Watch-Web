import {Component, HostBinding, OnInit} from '@angular/core';
import {Service} from '../service';
import {deserializeArray, plainToClass} from 'class-transformer';
import {Movie} from './movie';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[];
  movie: Movie;

  constructor(private service: Service, private translateService: TranslateService) { }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    // this.getPopularMovies();
    // this.getMovie(584);
  }

  getPopularMovies(): any {
    this.movies = [];
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/movie/popular?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}&page=1`)
      .subscribe(
        data => {
          for (const movie of data.results) {
            this.movies.push(plainToClass(Movie, movie));
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  getMovie(id: number): any {
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/movie/${id}?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}`)
      .subscribe(
        data => {
          this.movie = plainToClass(Movie, data);
          console.log(this.movie);
        },
        err => {
          console.log(err);
        }
      );
  }
}

