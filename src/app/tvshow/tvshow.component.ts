import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {TVShow} from './tvshow';
import {Cast, Crew} from '../api/credits';
import {Rating} from '../api/rating';
import {DisplayTime, DisplayDate} from '../app.component';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  private routeSub: Subscription;

  tvshow: TVShow;
  castArray: Cast[];
  crewArray: Crew[];
  note = 0;

  @HostBinding('class') class = 'my-auto col-12';

  displayTime(minutes: number): string {
    return DisplayTime(minutes);
  }

  displayDate(date: string): string {
    return DisplayDate(date);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getTVShow(params.id);
      this.getCreditsTVShow(params.id);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  getTVShow(id: number): any {
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/tv/${id}?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}`)
      .subscribe(
        data => {
          this.tvshow = plainToClass(TVShow, data);
        },
        err => {
          console.log(err);
        }
      );
  }

  getCreditsTVShow(id: number): any {
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}`)
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

}
