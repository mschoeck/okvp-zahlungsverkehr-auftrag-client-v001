import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auftrag } from '../entities/auftrag';
import { AuftragService } from '../auftrag.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard-freigabe',
  templateUrl: './dashboard-freigabe.component.html',
  styleUrls: [ './dashboard-freigabe.component.css' ]
})

export class DashboardFreigabeComponent implements OnInit {
  auftragsliste: Auftrag[] = [];
  constructor(
    private auftragService: AuftragService,
    private messageService: MessageService,
    private route: ActivatedRoute, 
    private router: Router
    ) 
  {
  }

  ngOnInit() {
    this.messageService.addInfo('OnInit für DashboardFreigabe gerufen');
    this.reload();
  }

  getAuftragsliste(): void {
    this.auftragService.getAuftraegeFreizugeben().subscribe(
     auftragsliste => {
         this.auftragsliste = auftragsliste;
     });
   }

   private reload() : void {
    this.getAuftragsliste();
   }
}
