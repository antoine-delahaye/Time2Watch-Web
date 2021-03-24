import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {plainToClass} from 'class-transformer';
import {Service} from '../service';
import {TranslateService} from '@ngx-translate/core';
import {TVShow} from './tvshow';
import {Cast, Crew} from '../api/credits';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  tvshow: TVShow;
  castArray: Cast[];
  crewArray: Crew[];
  note = 0;

  constructor(private route: ActivatedRoute, private service: Service, private translateService: TranslateService) {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.rateTVShow(params.id, 9.0);
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

          for (const castObj of data.cast) {
            this.castArray.push(plainToClass(Cast, castObj));
          }

          for (const crewObj of data.crew) {
            this.crewArray.push(plainToClass(Crew, crewObj));
          }

        },
        err => {
          console.log(err);
        }
      );
  }

  public rateTVShow(id: number, rating: number): any {
    this.service.postJSON(
      `https://api.themoviedb.org/3/tv/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`,
      `{\"value\":${rating}}`
    ).subscribe(
      data => {

        // Si le status_code est 12 alors il était déjà noté et la note à été update
        // Si c'est 1 alors l'utilisateur l'avait jamais noté et la note à été créer
        this.note = rating;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  public deleteRating(id: number): any {
    this.service.deleteJSON(`https://api.themoviedb.org/3/tv/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`
    ).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
