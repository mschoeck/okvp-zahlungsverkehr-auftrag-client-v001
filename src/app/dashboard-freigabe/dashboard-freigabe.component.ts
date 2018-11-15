import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Auftrag } from '../entities/auftrag';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-dashboard-freigabe',
  templateUrl: './dashboard-freigabe.component.html',
  styleUrls: [ './dashboard-freigabe.component.css' ]
})

export class DashboardFreigabeComponent implements OnInit {
  auftragsliste: Auftrag[] = [];
  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
  ngOnInit() {
    this.getAuftragsliste();
  }
  getAuftragsliste(): void {
    this.messageService.add('load auftragsliste from backed');

    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.httpClient.get<Auftrag[]>('http://localhost:8091/zahlungsauftraege', {headers})
          .subscribe(
            auftraege => {
                  this.auftragsliste = auftraege.slice(0, 4);
                  this.messageService.add('auftragsliste loaded'),
                error => this.messageService.add('Error: ' + error);
          }
        );
  }
}
