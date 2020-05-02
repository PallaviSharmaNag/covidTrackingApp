import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { IState } from '../../shared/interfaces/IState';
import { IStateDetail } from '../../shared/interfaces/IStateDetail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  private stateWiseURL = "http://api.covid19india.org/data.json"; 
  private districtWiseURL = " https://api.covid19india.org/state_district_wise.json";
  private stateDetails =[];

  constructor(private httpClient: HttpClient) { }  

   /** GET covid stats of all states. */
   getStateList(): Observable<IState[]> {
    return (this.httpClient.get(this.stateWiseURL))
    .pipe(
      map(response => {
         return response["statewise"];
      })
      )
      .pipe(
        catchError(this.handleError)
    );
  }

   /** GET covid stats of all states. */
   getStateDetais(): Observable<IStateDetail[]> {
    return (this.httpClient.get(this.districtWiseURL))
    .pipe(
        map(response => {
          for(let key in response){
              this.stateDetails.push(response[key]);
          }
          return this.stateDetails;
        })
      )
      .pipe(
        catchError(this.handleError)
    );
  }

  getStateDistrictDetails(code: string): IStateDetail{
    return this.stateDetails.find(stateDetail => stateDetail.statecode.toUpperCase()===code.toUpperCase());
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
