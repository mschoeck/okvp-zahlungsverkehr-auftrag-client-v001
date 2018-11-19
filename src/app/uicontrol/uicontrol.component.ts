import { Component, OnInit } from '@angular/core';
import { Bedienerschritt } from '../entities/prozess';
import { UiprozessService } from '../uiprozess.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-uicontrol',
  templateUrl: './uicontrol.component.html',
  styleUrls: ['./uicontrol.component.css']
})
export class UicontrolComponent implements OnInit {
  schritt : Bedienerschritt;
  imageurl : string;

  constructor(
    private prozessService : UiprozessService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.prozessService.startProzess().subscribe(
      schritt => {
        this.schritt = schritt;
        this.getNaechsterSchritt();
        this.router.navigate(['']);
      }
    );
  }
  
  getNaechsterSchritt(): void {
     this.prozessService.getNaechsterSchritt(this.schritt.prozessid).subscribe(
      schritt => {
         this.schritt = schritt;
         this.imageurl = 'assets/images/' + this.schritt.uiservice + '.JPG';
         this.messageService.addInfo(this.imageurl);
     });
  }

  completeSchritt(aktion: string):void {
    this.prozessService.completeSchritt(this.schritt.prozessid, this.schritt.schrittid, aktion).subscribe(
      schritt => {
         this.schritt = schritt;
         this.getNaechsterSchritt();
     });
  }

  doit(aktion: string) : void {
      this.completeSchritt(aktion);
  }
}
