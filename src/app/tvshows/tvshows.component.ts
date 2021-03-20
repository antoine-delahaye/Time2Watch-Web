import {Component, HostBinding, OnInit} from '@angular/core';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {TVShows} from './tvshows';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})

export class TvshowsComponent implements OnInit {

  tvshows: TVShows[];

  page: number;

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  private routeSub: Subscription;

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.page = params.page;
      this.getPopularTVShows();
    });
  }

  getPopularTVShows(): any {
    this.tvshows = [];
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/tv/popular?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}&page=${this.page}`)
      .subscribe(
        data => {
          for (const tvshow of data.results) {
            this.tvshows.push(plainToClass(TVShows, tvshow));
          }
        },
        err => {
          console.log(err);
        }
      );
  }

}
