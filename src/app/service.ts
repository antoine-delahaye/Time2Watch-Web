import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: 'c31z'})
};

const httpOptionsPost = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root',
})
export class Service {

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  // tslint:disable-next-line:typedef
  private extractData(res: Response) {
    return res || {};
  }

  public getListOfGroup(url: string): Observable<any> {
    return this.httpClient.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public postJSON(url: string, body: string): Observable<any> {
    return this.httpClient.post(url, body, httpOptionsPost).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public deleteJSON(url: string): Observable<any> {
    return this.httpClient.delete(url, httpOptionsPost).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}

