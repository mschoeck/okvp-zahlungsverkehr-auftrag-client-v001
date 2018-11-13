import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Auftrag } from './entities/auftrag';

import { InMemoryDataAuftragService } from './in-memory-data-auftrag.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class AuftragService {

  constructor(private messageService: MessageService, private inMemoryDataAuftragService : InMemoryDataAuftragService ) { }
  
  getAuftragsliste(): Observable<Auftrag[]> {
    // TODO: send the message _after_ fetching the auftrag
    this.messageService.add('AuftragoService: Auftragsliste geladen.');
    return of(this.inMemoryDataAuftragService.createDb().auftragsliste);
  }
  
  getAuftrag(id: number): Observable<Auftrag> {
    this.messageService.add(`AuftragoService: fetched auftrag id=${id}`);
    return of(this.inMemoryDataAuftragService.createDb().auftragsliste.find(auftrag => auftrag.id === id));
  }
}
