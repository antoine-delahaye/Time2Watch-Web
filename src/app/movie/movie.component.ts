import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {Movie} from './movie';
import {Cast, Crew} from '../api/credits';
import {DisplayDate, DisplayTime} from '../app.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  private routeSub: Subscription;

  movie: Movie;
  castArray: Cast[];
  crewArray: Crew[];
  currentRate = 0;

  @HostBinding('class') class = 'my-auto col-12';

  displayTime(minutes: number): string {
    return DisplayTime(minutes);
  }

  displayDate(date: string): string {
    return DisplayDate(date);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getMovie(params.id);
      // TODO vérifier si le film est déjà noté et appliquer la valeur
      this.getCreditsMovie(params.id);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
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

  getCreditsMovie(id: number): any {
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}`)
      .subscribe(
        data => {
          this.castArray = [];
          this.crewArray = [];
          for (const castObj of data['cast']) {
            this.castArray.push(plainToClass(Cast, castObj));
          }
          for (const crewObj of data['crew']) {
            this.crewArray.push(plainToClass(Crew, crewObj));
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  minutesConverter(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes - (hours * 60));
    return hours + 'h' + minutes + 'min';
  }
}
