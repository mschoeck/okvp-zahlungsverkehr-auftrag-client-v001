import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Auftrag } from '../entities/auftrag';
import { AuftragService }  from '../auftrag.service';
import { ProzessService }  from '../prozess.service';

@Component({
  selector: 'app-auftrag-detail',
  templateUrl: './auftrag-detail.component.html',
  styleUrls: ['./auftrag-detail.component.css']
})

export class AuftragDetailComponent implements OnInit {
  auftrag: Auftrag;
 
  constructor(
    private route: ActivatedRoute,
    private auftragService: AuftragService,
    private prozessService: ProzessService,
    private location: Location
  ) {}
 
  ngOnInit() {
    this.getAuftrag();
  }
  
  getAuftrag(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.auftragService.getAuftrag(id)
    .subscribe(auftrag => this.auftrag = auftrag);
  }
  
  freigeben(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.auftragService.getAuftrag(id)
       .subscribe(auftrag => this.auftrag = auftrag);
    this.prozessService.freigeben(this.auftrag);
  }
  
  goBack(): void {
    this.location.back();
  }
 
}
