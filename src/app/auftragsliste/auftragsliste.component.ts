import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuftragService } from '../auftrag.service';
import { Auftrag } from '../entities/auftrag';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.css']
})

export class AuftragslisteComponent implements OnInit {
  auftragsliste: Auftrag[];

  constructor(
    private auftragservice: AuftragService,
    private route: ActivatedRoute,
    private messageService: MessageService
    )
  { 
  }

  ngOnInit() {
    this.messageService.addInfo('onInit für Auftragsliste gerufen');
    this.getAuftragsliste();
  }

  getAuftragsliste(): void {
     this.auftragservice.getAuftraegeEingereicht().subscribe(
      auftragsliste => {
          this.auftragsliste = auftragsliste;
      });
  }
}
