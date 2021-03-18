// tslint:disable:variable-name
export class Movie {
  constructor(
    public adult: boolean,
    public backdrop_path: string,
    public belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    }[],
    public budget: number,
    public genres: {
      id: number;
      name: string;
    }[],
    public homepage: string,
    public id: number,
    public imdb_id: string,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }[],
    public production_countries: {
      iso_3166_1: string;
      name: string;
    }[],
    public release_date: string,
    public revenue: number,
    public runtime: number,
    public spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[],
    public status: string,
    public tagline: string,
    public title: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) { }
}
