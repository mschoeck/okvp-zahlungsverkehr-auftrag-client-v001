import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Auftrag, Auftragsfreigabeschritt } from '../entities/auftrag';
import { AuftragService } from '../auftrag.service';
import { MessageService } from '../message.service';
import { AuthentifizierungService } from '../authentifizierung.service';

@Component({
  selector: 'app-auftrag-detail',
  templateUrl: './auftrag-detail.component.html',
  styleUrls: ['./auftrag-detail.component.css']
})

export class AuftragDetailComponent implements OnInit {
  
  freigabeMoeglich: boolean = true;
  auftrag: Auftrag;
  schritt: Auftragsfreigabeschritt;
  userid:string;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private auftragService: AuftragService,
    private messageService: MessageService,
    private authentifizierungService : AuthentifizierungService
  ) {}

  ngOnInit() {
    this.messageService.addInfo('OnInit für AuftragDetail gerufen');
    this.userid = this.authentifizierungService.getCurrentUser();
    this.getAuftrag();
  }

  getAuftrag(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.auftragService.getAuftrag(id).subscribe(
        auftrag => {
            this.auftrag = auftrag;
        }
    )
  }

  freigeben(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.auftragService.naechsterFreigabeschritt(id).subscribe(
        schritt => {
        this.schritt = schritt;
        this.auftragService.freigebenAuftrag(id, this.schritt.schrittid).subscribe (
          schritt => {
            this.schritt = schritt;
            this.goBack();
        });
      });
  }

  ablehnen(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.auftragService.naechsterFreigabeschritt(id).subscribe(
      schritt => {
      this.schritt = schritt;
      this.auftragService.ablehnenAuftrag(id, this.schritt.schrittid).subscribe(
        schritt => {
        this.schritt = schritt;
        this.goBack();
        });  
     });
  }

  goBack(): void {
    this.location.back();
  }
}
