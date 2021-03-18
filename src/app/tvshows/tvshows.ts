// tslint:disable:variable-name
export class TVShows {
  constructor(
    public backdrop_path: string,
    public first_air_date: string,
    public genre_ids: number[],
    public id: number,
    public name: string,
    public origin_country: string[],
    public original_language: string,
    public original_name: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public vote_average: number,
    public vote_count: number
  ) { }
}
