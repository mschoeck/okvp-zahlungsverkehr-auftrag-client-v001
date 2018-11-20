import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Auftrag, Auftragsfreigabeschritt } from '../entities/auftrag';
import { AuftragService } from '../auftrag.service';
import { MessageService } from '../message.service';
import { AuthentifizierungService } from '../authentifizierung.service';
import { UiprozessService } from '../uiprozess.service';
import { Bedienerschritt } from '../entities/prozess';

@Component({
  selector: 'app-auftragsfreigabe',
  templateUrl: './auftragsfreigabe.component.html',
  styleUrls: ['./auftragsfreigabe.component.css']
})

export class AuftragsfreigabeComponent implements OnInit {

  freigabeMoeglich: boolean = true;
  auftrag: Auftrag;
  schritt: Auftragsfreigabeschritt;
  userid:string;
  bedienerschritt: Bedienerschritt;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private auftragService: AuftragService,
    private messageService: MessageService,
    private authentifizierungService : AuthentifizierungService,
    private uiprozessService : UiprozessService,
    private router: Router
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
      this.auftragService.freigebenAuftrag(id, this.schritt.schrittid).subscribe (
        schritt => {
          this.schritt = schritt;
          
  
      this.auftragService.getAuftrag(id).subscribe (
        auftrag => {
          this.auftrag = auftrag;
          if (auftrag.status == 'Freigegeben')
          {
            this.messageService.error ('Auftrag ' + auftrag.id + ' erfolgreich freigegeben');
          }
          else {
             this.messageService.error ('Auftrag ' + auftrag.id + ' an nächsten Freigeber weitergeleitet');
          }
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
