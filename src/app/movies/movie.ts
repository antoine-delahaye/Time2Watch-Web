export class Movie {
  constructor(
  public adult: boolean,
  public backdropPath: string,
  public belongsToCollection: {
    id: number;
    name: string;
    posterPath: string;
    backdropPath: string;
  }[],
  public budget: number,
  public genres: {
    id: number;
    name: string;
  }[],
  public homepage: string,
  public id: number,
  public imdbId: string,
  public originalLanguage: string,
  public originalTitle: string,
  public overview: string,
  public popularity: number,
  public posterPath: string,
  public productionCompanies: {
    id: number;
    logoPath: string;
    originCountry: string;
  }[],
  public productionCountries: {
    iso_3166_1: string;
    name: string;
  }[],
  public releaseDate: string,
  public revenue: number,
  public runtime: number,
  public spokenLanguages: {
    iso_639_1: string;
    name: string;
  }[],
  public status: string,
  public tagline: string,
  public title: string,
  public video: boolean,
  public voteAverage: number,
  public voteCount: number
  ) { }
}
