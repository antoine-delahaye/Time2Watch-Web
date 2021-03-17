class Movie {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: {
    id: number;
    name: string;
    posterPath: string;
    backdropPath: string;
  }[];
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  pasterPath: string;
  productionCompagnies: {
    id: number;
    logoPath: string;
    originCountry: string;
  }[];
  productionCountries: {
    iso_3166_1: string;
    name: string;
  }[];
  releaseDate: string;  // Date format
  revenue: number;
  runtime: number;
  spokenLanguages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
