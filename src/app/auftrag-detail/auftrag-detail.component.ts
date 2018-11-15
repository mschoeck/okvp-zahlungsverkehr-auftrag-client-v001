import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Auftrag } from '../entities/auftrag';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from '../message.service';
import { ProzessService } from '../prozess.service';

@Component({
  selector: 'app-auftrag-detail',
  templateUrl: './auftrag-detail.component.html',
  styleUrls: ['./auftrag-detail.component.css']
})

export class AuftragDetailComponent implements OnInit {
  auftrag: Auftrag;
  constructor(
    private route: ActivatedRoute,
    private prozessService: ProzessService,
    private location: Location,
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getAuftrag();
  }
  getAuftrag(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.messageService.add('load auftrag [' + id + '] from backed');

    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.httpClient.get<Auftrag>('http://localhost:8091/zahlungsauftraege/' + id, {headers})
          .subscribe(
            auftrag => {
                  this.auftrag = auftrag;
                  this.messageService.add('auftrag [' + id + '] loaded'),
                  error => this.messageService.add('Error: ' + error);
          }
        );
  }
  freigeben(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.auftragService.getAuftrag(id)
    //    .subscribe(auftrag => this.auftrag = auftrag);
    // this.prozessService.freigeben(this.auftrag);
  }
  goBack(): void {
    this.location.back();
  }
}
