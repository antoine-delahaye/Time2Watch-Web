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

  constructor(private service: Service, private translateService: TranslateService) { }

  @HostBinding('class.col-12') boolean = true;

  ngOnInit(): void {
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
}

