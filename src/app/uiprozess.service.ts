import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { AuthentifizierungService} from './authentifizierung.service';
import { Bedienerschritt } from './entities/prozess';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UiprozessService {
  prozesskey : string = 'P_Auftragsbearbeitung';
  baseURL : string ;
  headers : HttpHeaders;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private authentifizierungService: AuthentifizierungService) {
      this.baseURL = 'http://localhost:8091/zahlungsauftraege/uiprozess/';
      this.headers = new HttpHeaders().set('Accept', 'application/json');
  }

  
  startProzess() : Observable<Bedienerschritt> {
    this.messageService.addInfo('startProzess []');
    const url = this.baseURL + 'start';
    const headers = this.headers;
    const params : HttpParams = new HttpParams().set('prozesskey', this.prozesskey).append('userid', this.authentifizierungService.getCurrentUser());
    return this.http.get<Bedienerschritt>(url, {headers, params}).pipe(
     catchError(this.handleError<Bedienerschritt>(`startProzess`)));
  }

  getNaechsterSchritt(prozessid : string) : Observable<Bedienerschritt> {
    this.messageService.addInfo('getNaechsterSchritt [prozessid]');
    const url = this.baseURL + prozessid + '/schritt';
    const headers = this.headers;
    const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
    
    return this.http.get<Bedienerschritt>(url, {headers, params}).pipe(
     catchError(this.handleError<Bedienerschritt>(`getNaechsterSchritt`)));
  }

  completeSchritt(prozessid : string, schrittid: string, aktion: string) : Observable<Bedienerschritt> {
    this.messageService.addInfo('completeSchritt [prozessid, schrittid]');
    const url = this.baseURL + prozessid + '/schritt/' + schrittid + '/complete';
    const headers = this.headers;
    const params = new HttpParams().set('aktion', aktion).append('userid', this.authentifizierungService.getCurrentUser());
    
    return this.http.get<Bedienerschritt>(url, {headers, params}).pipe(
     catchError(this.handleError<Bedienerschritt>(`completeSchritt`)));
  }

 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.messageService.error(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  }
}

}
