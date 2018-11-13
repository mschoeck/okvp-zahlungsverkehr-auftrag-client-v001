import { Component, OnInit } from '@angular/core';

import { AuftragService } from '../auftrag.service';
import { Auftrag } from '../auftrag';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.css']
})

export class AuftragslisteComponent implements OnInit {
  auftragsliste: Auftrag[];

  constructor(private auftragService: AuftragService) { }

  ngOnInit() { 
    this.getAuftragsliste();
  }

  getAuftragsliste(): void {
    this.auftragService.getAuftragsliste().subscribe(
      auftragsliste => this.auftragsliste = auftragsliste);
  }
}
