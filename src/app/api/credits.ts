// tslint:disable:variable-name
export class Crew {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public original_name: string,
    public popularity: number,
    public profile_path: string,
    public credit_id: string,
    public department: string,
    public job: string
  ) {
  }
}

export class Cast {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public original_name: string,
    public popularity: number,
    public profile_path: string,
    public character: string,
    public credit_id: string,
    public order: number,
  ) {
  }
}
