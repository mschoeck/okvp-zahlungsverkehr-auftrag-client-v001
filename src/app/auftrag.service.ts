import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Auftrag, Auftragsfreigabeschritt } from './entities/auftrag';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuftragService {
   
   userid : string;
   baseURL : string ;
   headers : HttpHeaders;
   params : HttpParams;
   auftrag : Auftrag;

  constructor(  
    private http: HttpClient,
    private messageService: MessageService) 
    { 
      this.userid = 'ycm4444';
      this.baseURL = 'http://localhost:8091/zahlungsauftraege/';
      this.headers = new HttpHeaders().set('Accept', 'application/json');
      this.params = new HttpParams().set('userid', this.userid);
    }

    getAuftrag(id: number) : Observable<Auftrag> {
       this.messageService.add('getAuftrag [' + id + ']');
       const url = this.baseURL + id;
       const headers = this.headers;
       
       return this.http.get<Auftrag>(url, {headers}).pipe(
        catchError(this.handleError<Auftrag>(`getAuftrag id=${id}`))
      );
    }

    getAuftraegeEingereicht() : Observable<Auftrag[]> {
      this.messageService.add('getAuftraegeEingereicht');
  
      const url= this.baseURL + '/eingereicht';
      const headers = this.headers;
      const params =  this.params;
  
      return this.http.get<Auftrag[]>(url, {headers, params}).pipe(
        catchError(this.handleError('getAuftraegeEingereicht', []))
      );
    }

    getAuftraegeFreizugeben() : Observable<Auftrag[]> {
      this.messageService.add('getAuftraegeFreizugeben');
  
      const url= this.baseURL + '/offen';
      const headers = this.headers;
      const params =  this.params;
  
      return this.http.get<Auftrag[]>(url, {headers, params}).pipe(
        catchError(this.handleError('getAuftraegeFreizugeben', []))
      );
    }

    naechsterFreigabeschritt(id: number) : Observable<Auftragsfreigabeschritt> {
      this.messageService.add('naechsterFreigabeschritt [' + id + ']');
      const url= this.baseURL  + id + '/freigabeschritt';
      const headers = this.headers;
      const params =  this.params;
      
      return this.http.get<Auftragsfreigabeschritt>(url, { headers,  params } ).pipe(
        catchError(this.handleError<Auftragsfreigabeschritt>(`naechsterFreigabeschritt Auftrag id=${id}`))
      );
    }

    freigebenAuftrag(id: number, schrittid: string) : Observable<Auftragsfreigabeschritt> {
       this.messageService.add('freigebenAuftrag (' + id + '), Schritt (' + schrittid + ')');
       const url= this.baseURL + id + '/freigabeschritt/' + schrittid + '/freigeben';
       const headers = this.headers;
       const params =  this.params;
       this.messageService.add('URL: ' + url);
       return this.http.get<Auftragsfreigabeschritt>(url, {headers, params}).pipe(
         catchError(this.handleError<Auftragsfreigabeschritt>(`freigebenAuftrag id=${id}`))
      );
     }

     ablehnenAuftrag(id: number, schrittid: string) : Observable<Auftragsfreigabeschritt> {
      this.messageService.add('ablehnenAuftrag (' + id + ')');
      const url= this.baseURL + id + '/freigabeschritt/' + schrittid + '/ablehnen';
      const headers = this.headers;
      const params =  this.params;
      return this.http.get<Auftragsfreigabeschritt>(url, {headers, params}).pipe(
        catchError(this.handleError<Auftragsfreigabeschritt>(`ablehnenAuftrag id=${id}`))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.messageService.add(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
