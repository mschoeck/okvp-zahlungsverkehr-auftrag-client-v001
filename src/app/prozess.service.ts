import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Auftrag } from './auftrag';

import { ProzessReferenz, Prozessauftrag, Prozessauftragsliste, Aufgabe, Auftragsstatus } from './prozess';

import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class ProzessService {

  constructor(private messageService: MessageService) { }

  starteProzess(zvauftrag: Prozessauftrag) : ProzessReferenz {
      return {id:'lkajsfökdjaöfjk'};
  }

  
  freigeben(auftrag: Auftrag) {
      this.messageService.add(`ProzessService: freigeben`);
      var zvauftrag = new Prozessauftrag( );
      zvauftrag.id= auftrag.id;
      zvauftrag.erfasserid = auftrag.erfasser;
      zvauftrag.betrag = auftrag.betrag;
      if (auftrag.sofertausfuehren)
         zvauftrag.ablaufdatum = new Date();
      else
         zvauftrag.ablaufdatum = auftrag.ausfuehrenZum;
      var prozessId: ProzessReferenz = this.starteProzess(zvauftrag);
  }
}