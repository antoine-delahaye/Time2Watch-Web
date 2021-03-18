import {Component, HostBinding, OnInit} from '@angular/core';
import {Movie} from '../movies/movie';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(private service: Service, private translateService: TranslateService) {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.movies = [];
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/movie/popular?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}&page=1`)
      .subscribe(
        data => {
          for (const movie of data.results.slice(0, 10)) {
            this.movies.push(plainToClass(Movie, movie));
          }
        },
        err => {
          console.log(err);
        }
      );
    console.log(this.movies);
  }

}
