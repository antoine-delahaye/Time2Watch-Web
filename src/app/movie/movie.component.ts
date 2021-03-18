import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {Movie} from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  movie: Movie;

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getMovie(params.id);
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
