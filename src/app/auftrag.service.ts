import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { AuthentifizierungService} from './authentifizierung.service';
import { Auftrag, Auftragsfreigabeschritt } from './entities/auftrag';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuftragService {
   baseURL : string ;
   headers : HttpHeaders;
   auftrag : Auftrag;

  constructor(  
    private http: HttpClient,
    private messageService: MessageService,
    private authentifizierungService: AuthentifizierungService) 
    { 
      this.baseURL = 'http://localhost:8091/zahlungsauftraege/';
      this.headers = new HttpHeaders().set('Accept', 'application/json');
    }

    getAuftrag(id: number) : Observable<Auftrag> {
       this.messageService.addInfo('getAuftrag [' + id + ']');
       const url = this.baseURL + id;
       const headers = this.headers;
       const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
       
       return this.http.get<Auftrag>(url, {headers}).pipe(
        catchError(this.handleError<Auftrag>(`getAuftrag id=${id}`))
      );
    }

    getAuftraegeEingereicht() : Observable<Auftrag[]> {
      this.messageService.addInfo('getAuftraegeEingereicht');
  
      const url= this.baseURL + '/eingereicht';
      const headers = this.headers;
      const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
  
      return this.http.get<Auftrag[]>(url, {headers, params}).pipe(
        catchError(this.handleError('getAuftraegeEingereicht', []))
      );
    }

    getAuftraegeFreizugeben() : Observable<Auftrag[]> {
      this.messageService.addInfo('getAuftraegeFreizugeben');
  
      const url= this.baseURL + '/offen';
      const headers = this.headers;
      const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
  
      return this.http.get<Auftrag[]>(url, {headers, params}).pipe(
        catchError(this.handleError('getAuftraegeFreizugeben', []))
      );
    }

    naechsterFreigabeschritt(id: number) : Observable<Auftragsfreigabeschritt> {
      this.messageService.addInfo('naechsterFreigabeschritt [' + id + ']');
      const url= this.baseURL  + id + '/freigabeschritt';
      const headers = this.headers;
      const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
      
      return this.http.get<Auftragsfreigabeschritt>(url, { headers,  params } ).pipe(
        catchError(this.handleError<Auftragsfreigabeschritt>(`naechsterFreigabeschritt Auftrag id=${id}`))
      );
    }

    freigebenAuftrag(id: number, schrittid: string) : Observable<Auftragsfreigabeschritt> {
       this.messageService.addInfo('freigebenAuftrag (' + id + '), Schritt (' + schrittid + ')');
       const url= this.baseURL + id + '/freigabeschritt/' + schrittid + '/freigeben';
       const headers = this.headers;
       const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
       this.messageService.addInfo('URL: ' + url);
       return this.http.get<Auftragsfreigabeschritt>(url, {headers, params}).pipe(
         catchError(this.handleError<Auftragsfreigabeschritt>(`freigebenAuftrag id=${id}`))
      );
     }

     ablehnenAuftrag(id: number, schrittid: string) : Observable<Auftragsfreigabeschritt> {
      this.messageService.addInfo('ablehnenAuftrag (' + id + ')');
      const url= this.baseURL + id + '/freigabeschritt/' + schrittid + '/ablehnen';
      const headers = this.headers;
      const params = new HttpParams().set('userid', this.authentifizierungService.getCurrentUser());
      return this.http.get<Auftragsfreigabeschritt>(url, {headers, params}).pipe(
        catchError(this.handleError<Auftragsfreigabeschritt>(`ablehnenAuftrag id=${id}`))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.messageService.error(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
