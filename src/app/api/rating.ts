import {Service} from '../service';
import {plainToClass} from 'class-transformer';
import {Injectable} from '@angular/core';
import {TVShow} from '../tvshow/tvshow';


@Injectable({
  providedIn: 'root',
})
export class Rating {

  constructor(private service: Service) {
  }

  public rate(id: number, rating: number, typeOfContent: string): any {
    // Type peut être soit 'tv' soit 'movie'
    this.service.postJSON(
      `https://api.themoviedb.org/3/${typeOfContent}/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`,
      `{\"value\":${rating}}`
    ).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  public deleteRating(id: number, typeOfContent: string): any {
    this.service.deleteJSON(`https://api.themoviedb.org/3/${typeOfContent}/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`
    ).subscribe(
      () => {
      },
      err => {
        console.log(err);
      }
    );
  }
}
