import {Component, HostBinding, OnInit} from '@angular/core';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {TVShows} from './tvshows';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})

export class TvshowsComponent implements OnInit {

  tvshows: TVShows[];

  constructor(private service: Service, private translateService: TranslateService) {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.getPopularTVShows();
  }

  getPopularTVShows(): any {
    this.tvshows = [];
    this.service
      .getListOfGroup(`https://api.themoviedb.org/3/tv/popular?api_key=ccbc42c4b357545c785bb0d1caba6301&language=${this.translateService.currentLang}&page=1`)
      .subscribe(
        data => {
          for (const movie of data.results) {
            this.tvshows.push(plainToClass(TVShows, movie));
          }
          console.log(this.tvshows);
        },
        err => {
          console.log(err);
        }
      );
  }

}
