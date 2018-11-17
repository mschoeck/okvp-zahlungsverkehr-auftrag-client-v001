import { Component, OnInit } from '@angular/core';

import { AuftragService } from '../auftrag.service';
import { Auftrag } from '../entities/auftrag';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.css']
})

export class AuftragslisteComponent implements OnInit {
  auftragsliste: Auftrag[];

  constructor(
    private auftragservice: AuftragService) 
  { 
  }

  ngOnInit() {
    this.getAuftragsliste();
  }

  getAuftragsliste(): void {
     this.auftragservice.getAuftraegeEingereicht().subscribe(
      auftragsliste => {
          this.auftragsliste = auftragsliste;
      });
  }
}
