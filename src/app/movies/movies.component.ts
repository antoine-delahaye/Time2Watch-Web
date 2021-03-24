import {Component, HostBinding, OnInit} from '@angular/core';
import {Service} from '../service';
import {plainToClass} from 'class-transformer';
import {Movies} from './movies';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movies[];

  page: number;

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  private routeSub: Subscription;

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.page = params.page;
      this.getPopularMovies();
    });
  }

  getPopularMovies(): any {
    this.movies = [];
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/movie/popular?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}&page=${this.page}`)
      .subscribe(
        data => {
          for (const movie of data.results) {
            this.movies.push(plainToClass(Movies, movie));
          }
        },
        err => {
          console.log(err);
        }
      );
  }

}

