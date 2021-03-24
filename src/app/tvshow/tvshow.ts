// tslint:disable:variable-name
export class TVShow {
  constructor(
    public backdrop_path: string,
    public created_by: {
      id: number,
      credit_id: string,
      name: string,
      gender: number,
      profile_path: string
    }[],
    public episode_run_time: number[],
    public first_air_date: string,
    public genres: {
      id: number,
      name: string
    }[],
    public homepage: string,
    public id: number,
    public in_production: boolean,
    public languages: string[],
    public last_air_date: string,
    public last_episode_to_air: {
      air_date: string,
      episode_number: number,
      id: number,
      name: string,
      overview: string,
      production_code: string,
      season_number: number,
      still_path: string,
      vote_average: number,
      vote_count: number
    },
    public name: string,
    public next_episode_to_air: {
      air_date: string,
      episode_number: number,
      id: number,
      name: string,
      overview: string,
      production_code: string,
      season_number: number,
      still_path: string,
      vote_average: number,
      vote_count: number
    }[],
    public networks: {
      name: string,
      id: number,
      logo_path: string,
      origin_country: string
    }[],
    public number_of_episodes: number,
    public number_of_seasons: number,
    public origin_country: string[],
    public original_language: string,
    public original_name: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public production_companies: {
      id: number,
      logo_path: string,
      name: string,
      origin_country: string
    }[],
    public production_countries: {
      iso_3166_1: string,
      name: string
    }[],
    public seasons: {
      air_date: string,
      episode_count: number,
      id: number,
      name: string,
      overview: string,
      poster_path: string,
      season_number: number
    }[],
    public spoken_languages: {
      english_name: string,
      iso_639_1: string,
      name: string
    }[],
    public status: string,
    public tagline: string,
    public type: string,
    public vote_average: number,
    public vote_count: number,
    public rating: number
  ) {  }
}
