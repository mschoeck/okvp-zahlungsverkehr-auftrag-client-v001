import { Component, OnInit } from '@angular/core';
import { Auftrag } from '../entities/auftrag';
import { AuftragService } from '../auftrag.service';
 
@Component({
  selector: 'app-dashboard-freigabe',
  templateUrl: './dashboard-freigabe.component.html',
  styleUrls: [ './dashboard-freigabe.component.css' ]
})

export class DashboardFreigabeComponent implements OnInit {
  auftragsliste: Auftrag[] = [];
 
  constructor(private auftragService: AuftragService) { }
 
  ngOnInit() {
    this.getAuftragsliste();
  }
 
  getAuftragsliste(): void {
    this.auftragService.getAuftragsliste()
      .subscribe(auftragsliste => this.auftragsliste = auftragsliste.slice(0, 4));
  }
}
