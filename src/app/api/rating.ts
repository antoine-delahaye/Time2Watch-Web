import {Service} from '../service';
import {Movie} from '../movie/movie';
import {plainToClass} from 'class-transformer';
import {TVShow} from '../tvshow/tvshow';

export class Rating {

  public ratedMovie: Movie[];
  public ratedTVShows: TVShow[];

  constructor(private service: Service) {
    this.ratedMovie = [];
    this.ratedTVShows = [];
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
    this.refreshRating(typeOfContent);
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

  public refreshRating(typeOfContent: string): any {
    if (typeOfContent === 'movie') {
      typeOfContent = 'movies';
    }

    this.service.getListOfGroup(
      `https://api.themoviedb.org/3/guest_session/78f6d5bb6c2fca5f2278c9ba79783328/rated/${typeOfContent}?api_key=ccbc42c4b357545c785bb0d1caba6301&language=fr&sort_by=created_at.asc`
    ).subscribe(
      data => {

        console.log(data);
        if (typeOfContent === 'movie') {
          this.ratedMovie = [];
          for (const movie of data.results) {
            this.ratedMovie.push(plainToClass(Movie, movie));
          }
        } else {
          this.ratedTVShows = [];
          for (const tvshow of data.results) {
            this.ratedTVShows.push(plainToClass(TVShow, tvshow));
          }
        }

      },
      err => {
        console.log(err);
      }
    );
  }
}
