import {Service} from '../service';

export class Ratino {

  constructor(private service: Service) { }

  rate(id: number, rating: number, type: string): any {
    // Type peut être soit 'tv' soit 'movie'
    this.service.postJSON(
      `https://api.themoviedb.org/3/${type}/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`,
      `{\"value\":${rating}}`
    ).subscribe(
      data => {

        // Si le status_code est 12 alors il était déjà noté et la note à été update
        // Si c'est 1 alors l'utilisateur l'avait jamais noté et la note à été créer

        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  public deleteRating(id: number, type: string): any {
    this.service.deleteJSON(`https://api.themoviedb.org/3/${type}/${id}/rating?api_key=ccbc42c4b357545c785bb0d1caba6301&guest_session_id=78f6d5bb6c2fca5f2278c9ba79783328`
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
